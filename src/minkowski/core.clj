(ns minkowski.core
  (:gen-class))

(def infinity Double/POSITIVE_INFINITY)

(defn chebychev [[x y]] (float (max (Math/abs x) (Math/abs y))))

(defn minkowski [p]
  (if (not (== p infinity))
    (fn [[x y]] (Math/pow (+ (Math/pow (Math/abs x) p) (Math/pow (Math/abs y) p)) (/ 1 p)))
    chebychev
    ))
