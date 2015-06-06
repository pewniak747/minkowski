(ns minkowski.core
  (:require
    [minkowski.distance :as distance]
    [goog.string :as gstring]
    [goog.string.format]))

(enable-console-print!)

; application state
(def doublepi (* 2 Math/PI))
(def unit-pixels 200)
(def width (* 8 unit-pixels))
(def height (* 8 unit-pixels))
(def minkowski-order 2.0)
(def minkowski-distance (distance/minkowski minkowski-order))
(def isoquants [])
(def mouse-point [0 0])
(def metric-names {1.0 "Miejska" 2.0 "Euklidesowa" distance/infinity "Czebyszewa"})
(def default-metric-name "Minkowskiego")


; application logic
(defn angles [n] (range 0 doublepi (/ doublepi n)))

(defn point-euclidean [angle radius]
  [(* radius (Math/sin angle)) (* radius (Math/cos angle))])

(defn points [n radius]
  (map (fn [angle]
    (point-euclidean angle (* radius (/ radius (minkowski-distance (point-euclidean angle radius)))))) (angles n)))

(defn recalculate-isoquants []
    (set! isoquants (map (fn [n] (points 360 n)) (range 1 7))))


; UI elements
(def visualization (.getElementById js/document "visualization"))
(def canvas (aget (.getElementsByTagName js/document "canvas") 0))
(def slider (aget (.getElementsByTagName js/document "input") 0))
(def order-field (.getElementById js/document "minkowski-order"))
(def metric-name-field (.getElementById js/document "metric-name"))
(def drawing (.getContext canvas "2d"))


; UI callbacks
(defn minkowski-order-changed []
  (let [minkowski-order-text (if (= minkowski-order distance/infinity) "&infin;" (gstring/format "%.2f" minkowski-order))]
    (aset order-field "innerHTML" minkowski-order-text))
  (set! minkowski-distance (distance/minkowski minkowski-order))
  (let [metric-name (get metric-names minkowski-order default-metric-name)] (aset metric-name-field "innerHTML" metric-name)))

(defn window-resized []
  (let [new-width (aget visualization "clientWidth") new-height (aget visualization "clientHeight")]
    (set! width new-width)
    (set! height new-height)
    (aset canvas "width" width)
    (aset canvas "height" height)))

(defn slider-changed []
  (let [value (aget slider "value")]
    (set! minkowski-order (/ value 33))
    (if (> minkowski-order 3.0) (set! minkowski-order distance/infinity)
      (if (> minkowski-order 2.0) (set! minkowski-order (+ 2.0 (* (- minkowski-order 2.0) 20)))))
    (minkowski-order-changed)
    (recalculate-isoquants)))

(defn coordinates-point [[x y]] [(/ (- x (/ width 2)) unit-pixels) (/ (- y (/ height 2)) unit-pixels)])

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


; UI drawing
(defn canvas-point [[x y]] [(+ (* unit-pixels x) (/ width 2)) (+ (* unit-pixels y) (/ height 2))])

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

(defn draw-isoquant [isoquant]
  (do
    (.save drawing)
    (.beginPath drawing)
    (doall (for [point isoquant] (let [[x y] (canvas-point point)] (.lineTo drawing x y))))
    (.closePath drawing)
    (.setLineDash drawing (array 3 5))
    (aset drawing "strokeStyle" "gray")
    (.stroke drawing)
    (.restore drawing)))

(defn draw-scene []
  (do
    (.clearRect drawing 0 0 (aget canvas "width") (aget canvas "height"))
    (draw-coordinates)
    (doall (for [isoquant isoquants] (draw-isoquant isoquant)))
    (draw-mouse-point)))

(defn request-frame []
  (.requestAnimationFrame js/window
    (fn []
      (draw-scene)
      (request-frame))))

(defn start-application []
  (aset canvas "width" width)
  (aset canvas "height" height)

  (recalculate-isoquants)
  (minkowski-order-changed)
  (window-resized)

  (.addEventListener slider "input" slider-changed)
  (.addEventListener js/window "resize" window-resized)
  (.addEventListener canvas "mousemove" mouse-moved)
  (.addEventListener canvas "mouseleave" mouse-left)
  (request-frame))

(start-application)
