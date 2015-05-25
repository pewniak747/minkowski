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
(def drawing (.getContext canvas "2d"))
(def unit-pixels 200)
(def width (* 8 unit-pixels))
(def height (* 8 unit-pixels))
(aset canvas "width" width)
(aset canvas "height" height)

(defn canvas-point [[x y]] [(+ (* unit-pixels x) (/ width 2)) (+ (* unit-pixels y) (/ height 2))])

(def minkowski-order 2.0)
(def minkowski-distance (distance/minkowski minkowski-order))
(def draw-points '())
(def circles [])

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
  (aset order-field "textContent" (gstring/format "%.2f" minkowski-order))
  (set! minkowski-distance (distance/minkowski minkowski-order)))
  (.log js/console (array circles))
(minkowski-order-changed)

(.addEventListener slider "input" (fn []
  (let [value (aget slider "value")]
    (set! minkowski-order (/ value 33))
    (if (> minkowski-order 2.0) (set! minkowski-order (+ 2.0 (* (- minkowski-order 2.0) 10))))
    (minkowski-order-changed)
    (recalculate-circles)
  )))

(.addEventListener js/window "resize" window-resized)
(window-resized)

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
    (doall (for [circle circles] (draw-circle circle)))))

(defn request-frame []
  (.requestAnimationFrame js/window
    (fn []
      (draw-scene)
      (request-frame))))

(request-frame)
