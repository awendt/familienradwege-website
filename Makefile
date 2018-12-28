# always re-build website
.PHONY: website/index.html

build: website/index.html

local: website/data/berlin/roads.json website/data/berlin/paths.json

install: node_modules

node_modules:
	npm install

website/index.html:
	mkdir -p website
	npx parcel build index.html --out-dir website

website/data/berlin/%.json:
	mkdir -p website/data/berlin
	wget --directory-prefix=website/data/berlin --compression=auto https://www.familienradwege.de/data/berlin/$(notdir $@)
