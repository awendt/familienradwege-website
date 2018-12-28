# always re-build website
.PHONY: website/index.html

build: screenshots website/index.html

local: website/data/berlin/roads.json website/data/berlin/paths.json

install: node_modules

node_modules:
	npm install

screenshots: images/map.jpg images/map@2x.jpg

images/map.jpg: images/map-big.png
	convert images/map-big.png -quality 92 -resize x400 -gravity center -crop 400x400+0+0 images/map.jpg

images/map@2x.jpg: images/map-big.png
	convert images/map-big.png -quality 92 -resize x800 -gravity center -crop 800x800+0+0 images/map@2x.jpg

website/index.html:
	mkdir -p website
	npx parcel build index.html --out-dir website

website/data/berlin/%.json:
	mkdir -p website/data/berlin
	wget --directory-prefix=website/data/berlin --compression=auto https://www.familienradwege.de/data/berlin/$(notdir $@)
