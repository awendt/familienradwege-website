# always re-build website
.PHONY: website/index.html

build: website/index.html

local: website/berlin/roads.json website/berlin/paths.json

install: node_modules

node_modules:
	npm install

website/index.html:
	mkdir -p website
	npx parcel build index.html --out-dir website

website/berlin/%.json:
	mkdir -p website/berlin
	wget --directory-prefix=website/berlin --compression=auto https://www.familienradwege.de/berlin/$(notdir $@)
