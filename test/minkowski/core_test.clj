(ns minkowski.core-test
  (:require [clojure.test :refer :all]
            [minkowski.core :refer :all]))

(deftest minkowski-test
  (testing "euclidean distance"
    (let [euclidean (minkowski 2)]
      (testing "90st points"
        (is (= 0.0 (euclidean [0 0])))
        (is (= 1.0 (euclidean [1 0])))
        (is (= 1.0 (euclidean [0 1])))
        (is (= 1.0 (euclidean [-1 0])))
        (is (= 1.0 (euclidean [0 -1])))
        (is (= 2.0 (euclidean [0 2])))
        (is (= 2.0 (euclidean [-2 0])))
        (is (= 2.0 (euclidean [-2 0]))))
      (testing "45st points"
        (let [x (Math/cos (/ Math/PI 4))]
          (is (= 1.0 (euclidean [x x])))
          (is (= 1.0 (euclidean [(- 0 x) x])))
          (is (= 1.0 (euclidean [x (- 0 x)])))
          (is (= 1.0 (euclidean [(- 0 x) (- 0 x)])))
          ))))
  (testing "manhattan distance"
    (let [manhattan (minkowski 1)]
      (testing "90st points"
        (is (= 0.0 (manhattan [0 0])))
        (is (= 1.0 (manhattan [1 0])))
        (is (= 1.0 (manhattan [0 1])))
        (is (= 1.0 (manhattan [-1 0])))
        (is (= 1.0 (manhattan [0 -1])))
        (is (= 2.0 (manhattan [0 2])))
        (is (= 2.0 (manhattan [-2 0])))
        (is (= 2.0 (manhattan [-2 0]))))
      (testing "45st points"
        (is (= 1.0 (manhattan [0.5 0.5])))
        (is (= 1.0 (manhattan [0.5 -0.5])))
        (is (= 1.0 (manhattan [-0.5 0.5])))
        (is (= 1.0 (manhattan [-0.5 -0.5])))
        )))
  (testing "chebyshev distance"
    (let [chebychev (minkowski infinity)]
      (testing "90st points"
        (is (= 0.0 (chebychev [0 0])))
        (is (= 1.0 (chebychev [1 0])))
        (is (= 1.0 (chebychev [0 1])))
        (is (= 1.0 (chebychev [-1 0])))
        (is (= 1.0 (chebychev [0 -1])))
        (is (= 2.0 (chebychev [0 2])))
        (is (= 2.0 (chebychev [-2 0])))
        (is (= 2.0 (chebychev [-2 0]))))
      (testing "45st points"
        (is (= 1.0 (chebychev [1 1])))
        (is (= 1.0 (chebychev [-1 1])))
        (is (= 1.0 (chebychev [1 -1])))
        (is (= 1.0 (chebychev [-1 -1])))
        ))))
