default: dist

dist: dist/index.html dist/main.js dist/main.css dist/formula.png

dist/index.html: index.html
	mkdir -p dist
	cp index.html dist/index.html

dist/main.js: src/minkowski/*.cljs
	lein cljsbuild once
	mkdir -p dist
	cp target/main.js dist

dist/main.css:
	mkdir -p dist
	cp main.css dist/main.css

dist/formula.png:
	mkdir -p dist
	cp formula.png dist/formula.png

clean:
	rm -rf dist

dependencies:
	lein install

test: test/minkowski/core_test.clj
	lein test
