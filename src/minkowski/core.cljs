(ns minkowski.core
  (:require
    [minkowski.distance :as distance]
    [goog.string :as gstring]
    [goog.string.format]))

(enable-console-print!)

(println "Hello world!")

(def doublepi (* 2 Math/PI))

(def visualization (.getElementById js/document "visualization"))
(def canvas (aget (.getElementsByTagName js/document "canvas") 0))
(def slider (aget (.getElementsByTagName js/document "input") 0))
(def order-field (.getElementById js/document "minkowski-order"))
(def metric-name-field (.getElementById js/document "metric-name"))
(def drawing (.getContext canvas "2d"))
(def unit-pixels 200)
(def width (* 8 unit-pixels))
(def height (* 8 unit-pixels))
(aset canvas "width" width)
(aset canvas "height" height)

(defn canvas-point [[x y]] [(+ (* unit-pixels x) (/ width 2)) (+ (* unit-pixels y) (/ height 2))])
(defn coordinates-point [[x y]] [(/ (- x (/ width 2)) unit-pixels) (/ (- y (/ height 2)) unit-pixels)])

(def minkowski-order 2.0)
(def minkowski-distance (distance/minkowski minkowski-order))
(def circles [])
(def mouse-point [0 0])

(defn angles [n] (range 0 doublepi (/ doublepi n)))

(defn point-euclidean [angle radius]
  [(* radius (Math/sin angle)) (* radius (Math/cos angle))])

(defn points [n radius]
  (map (fn [angle]
    (point-euclidean angle (* radius (/ radius (minkowski-distance (point-euclidean angle radius)))))) (angles n)))

(defn window-resized []
  (let [new-width (aget visualization "clientWidth") new-height (aget visualization "clientHeight")]
    (set! width new-width)
    (set! height new-height)
    (aset canvas "width" width)
    (aset canvas "height" height)))

(defn recalculate-circles []
    (set! circles (map (fn [n] (points 360 n)) (range 1 7))))
(recalculate-circles)

(defn minkowski-order-changed []
  (let [minkowski-order-text (if (= minkowski-order distance/infinity) "&infin;" (gstring/format "%.2f" minkowski-order))]
    (aset order-field "innerHTML" minkowski-order-text))
  (set! minkowski-distance (distance/minkowski minkowski-order))
  (let [metric-name (if (= minkowski-order 1.0) "Miejska" (if (= minkowski-order 2.0) "Euklidesowa" (if (= minkowski-order distance/infinity) "Czebyszewa" "Minkowskiego")))] (aset metric-name-field "innerHTML" metric-name))
  )
(minkowski-order-changed)

(.addEventListener slider "input" (fn []
  (let [value (aget slider "value")]
    (set! minkowski-order (/ value 33))
    (if (> minkowski-order 3.0) (set! minkowski-order distance/infinity)
      (if (> minkowski-order 2.0) (set! minkowski-order (+ 2.0 (* (- minkowski-order 2.0) 20)))))
    (minkowski-order-changed)
    (recalculate-circles)
  )))

(defn mouse-moved [e]
  (let [
        rect (.getBoundingClientRect canvas)
        left (aget rect "left")
        top (aget rect "top")
        mouse-left (aget e "clientX")
        mouse-top (aget e "clientY")
        canvas-x (- mouse-left left)
        canvas-y (- mouse-top top)]
      (set! mouse-point (coordinates-point [canvas-x canvas-y]))))

(defn mouse-left []
  (set! mouse-point [0 0]))

(.addEventListener js/window "resize" window-resized)
(window-resized)
(.addEventListener canvas "mousemove" mouse-moved)
(.addEventListener canvas "mouseleave" mouse-left)

(defn draw-coordinates []
  (do
    (.save drawing)
    (aset drawing "strokeStyle" "#dddddd")
    (aset drawing "lineWidth" 1)
    (.beginPath drawing)
    (let [[x y] (canvas-point [-10 0])] (.moveTo drawing x y))
    (let [[x y] (canvas-point [10 0])] (.lineTo drawing x y))
    (.closePath drawing)
    (.stroke drawing)
    (.beginPath drawing)
    (let [[x y] (canvas-point [0 -10])] (.moveTo drawing x y))
    (let [[x y] (canvas-point [0 10])] (.lineTo drawing x y))
    (.closePath drawing)
    (.stroke drawing)
    (.restore drawing)))

(defn draw-mouse-point []
  (do
    (.save drawing)
    (.beginPath drawing)
    (let [[x y] (canvas-point mouse-point)] (.moveTo drawing x y))
    (let [[x y] (canvas-point [0 0])] (.lineTo drawing x y))
    (.stroke drawing)
    (.closePath drawing)
    (.beginPath drawing)
    (let [[x y] (canvas-point [0 0])]
      (.arc drawing x y 3 0 doublepi))
    (aset drawing "fillStyle" "white")
    (.fill drawing)
    (.stroke drawing)
    (.closePath drawing)
    (.beginPath drawing)
    (let [[x y] (canvas-point mouse-point) text-x (+ x 10) text-y (+ y 3)]
      (.arc drawing x y 3 0 doublepi)
      (aset drawing "fillStyle" "black")
      (.fillText drawing (gstring/format "%.2f" (minkowski-distance mouse-point)) text-x text-y))
    (aset drawing "fillStyle" "white")
    (.fill drawing)
    (.stroke drawing)
    (.closePath drawing)
    (.restore drawing)))

(defn draw-circle [circle]
  (do
    (.save drawing)
    (.beginPath drawing)
    (doall (for [point circle] (let [[x y] (canvas-point point)] (.lineTo drawing x y))))
    (.closePath drawing)
    (.setLineDash drawing (array 3 5))
    (aset drawing "strokeStyle" "gray")
    (.stroke drawing)
    (.restore drawing)))

(defn draw-scene []
  (do
    (.clearRect drawing 0 0 (aget canvas "width") (aget canvas "height"))
    (draw-coordinates)
    (doall (for [circle circles] (draw-circle circle)))
    (draw-mouse-point)))

(defn request-frame []
  (.requestAnimationFrame js/window
    (fn []
      (draw-scene)
      (request-frame))))

(request-frame)
