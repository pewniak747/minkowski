(ns minkowski.core)

(enable-console-print!)

(println "Hello world!")

(def doublepi (* 2 Math/PI))

(def canvas (aget (.getElementsByTagName js/document "canvas") 0))
(def slider (aget (.getElementsByTagName js/document "input") 0))
(def drawing (.getContext canvas "2d"))

(def radius 30)

(.addEventListener slider "input" (fn []
  (set! radius (aget slider "value"))))

(defn draw-scene []
  (.clearRect drawing 0 0 (aget canvas "width") (aget canvas "height"))
  (.beginPath drawing)
  (.arc drawing 100 100 radius 0 doublepi false)
  (.stroke drawing))

(defn request-frame []
  (.requestAnimationFrame js/window
    (fn []
      (draw-scene)
      (request-frame))))

(request-frame)
