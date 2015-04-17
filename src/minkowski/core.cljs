(ns minkowski.core)

(enable-console-print!)

(println "Hello world!")

(def doublepi (* 2 Math/PI))

(def canvas (aget (.getElementsByTagName js/document "canvas") 0))
(def slider (aget (.getElementsByTagName js/document "input") 0))
(def drawing (.getContext canvas "2d"))
(def width 200)
(def height 200)
(defn canvas-point [[x y]] [(+ x (/ width 2)) (+ y (/ height 2))])

(def radius 30)
(def draw-points '())

(defn angles [n] (range 0 doublepi (/ doublepi n)))

(defn points [n radius] (map (fn [angle] [(* radius (Math/sin angle)) (* radius (Math/cos angle))]) (angles n)))

(.addEventListener slider "input" (fn []
  (let [value (aget slider "value")]
    (set! radius value)
    (set! draw-points (points 360 radius))
  )))

(defn draw-scene []
  (do
    (.clearRect drawing 0 0 (aget canvas "width") (aget canvas "height"))
    (.beginPath drawing)
    (doall (for [point draw-points] (let [[x y] (canvas-point point)] (.lineTo drawing x y))))
    (.closePath drawing)
    (.stroke drawing)))

(defn request-frame []
  (.requestAnimationFrame js/window
    (fn []
      (draw-scene)
      (request-frame))))

(request-frame)
