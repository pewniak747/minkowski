(ns minkowski.core)

(enable-console-print!)

(println "Hello world!")

(def doublepi (* 2 Math/PI))

(def canvas (aget (.getElementsByTagName js/document "canvas") 0))
(def slider (aget (.getElementsByTagName js/document "input") 0))
(def drawing (.getContext canvas "2d"))
(def unit-pixels 100)
(def width (* 8 unit-pixels))
(def height (* 8 unit-pixels))
(aset canvas "width" width)
(aset canvas "height" height)

(defn canvas-point [[x y]] [(+ (* unit-pixels x) (/ width 2)) (+ (* unit-pixels y) (/ height 2))])

(def radius 30)
(def draw-points '())
(def circles [])

(defn angles [n] (range 0 doublepi (/ doublepi n)))

(defn points [n radius] (map (fn [angle] [(* radius (Math/sin angle)) (* radius (Math/cos angle))]) (angles n)))

(.addEventListener slider "input" (fn []
  (let [value (aget slider "value")]
    (set! radius (/ value 100))
    (set! circles (map (fn [n] (points 360 (* n radius))) (range 1 4))
  ))))

(defn draw-circle [circle]
  (do
    (.beginPath drawing)
    (doall (for [point circle] (let [[x y] (canvas-point point)] (.lineTo drawing x y))))
    (.closePath drawing)
    (.setLineDash drawing (array 3 5))
    (aset drawing "strokeStyle" "gray")
    (.stroke drawing)
  ))

(defn draw-scene []
  (do
    (.clearRect drawing 0 0 (aget canvas "width") (aget canvas "height"))
    (doall (for [circle circles] (draw-circle circle)))))

(defn request-frame []
  (.requestAnimationFrame js/window
    (fn []
      (draw-scene)
      (request-frame))))

(request-frame)
