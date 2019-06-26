# always re-build website
.PHONY: website/index.html

build: website/index.html

all: install local build

local: website/data/berlin/roads.json website/data/berlin/paths.json

install: node_modules

node_modules:
	npm install

screenshots:
	$(MAKE) -C images

website/index.html: index.html berlin/index.html
	npx parcel build $^ --out-dir website

%.html: pages/%.md
	pandoc --standalone -t html5 $< > $@

%/index.html: pages/%.md
	pandoc --standalone -t html5 $< > $@

website/data/berlin/%.json:
	mkdir -p website/data/berlin
	wget --directory-prefix=website/data/berlin --compression=auto https://www.familienradwege.de/data/berlin/$(notdir $@)
