(defproject minkowski "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                  [org.clojure/clojure "1.6.0"]
                  [org.clojure/clojurescript "0.0-3126"]
                ]
  :main ^:skip-aot minkowski.core
  :target-path "target/%s"
  :plugins [
             [lein-auto "0.1.1"]
             [lein-cljsbuild "1.0.5"]
           ]
  :cljsbuild {
              :builds [{
                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src"]
                        ; The standard ClojureScript compiler options:
                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                                   :output-to "target/main.js"  ; default: target/cljsbuild-main.js
                                   :optimizations :advanced
                                   :pretty-print true}}]}
  :profiles {:uberjar {:aot :all}})
