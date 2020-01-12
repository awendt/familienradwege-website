HTML = index.html berlin/index.html daten/index.html

# always re-build website
.PHONY: website/index.html start-dev-server screenshots

all: install local build

build: website/index.html

##########################################
# Check installation of required software
##########################################
check: check-fswatch check-node check-npm check-pandoc

RED=\033[0;31m
GREEN=\033[0;32m
NC=\033[0m

check-%:
	@command -v ${*} > /dev/null && echo "${GREEN}✔ $*${NC}" || echo "${RED}✘ $*${NC}"
##########################################

local: website/data/berlin/roads.json website/data/berlin/paths.json

install: node_modules

node_modules:
	npm install

screenshots:
	$(MAKE) -C images

website/index.html: $(addprefix html/,$(HTML))
	npx parcel build $^ --out-dir website --no-source-maps

html/%/index.html: pages/_navigation.md pages/%.md pages/_footer.md
	mkdir -p $(dir $@)
	pandoc --standalone -f markdown-implicit_figures -t html5 $^ > $@

html/index.html: html/index/index.html
	cp $< $@

website/data/berlin/%.json:
	mkdir -p website/data/berlin
	wget --directory-prefix=website/data/berlin --compression=auto https://www.familienradwege.de/data/berlin/$(notdir $@)

clean:
	rm -rf .cache
	git clean --force -X website

###################################
# Convenience tools for developing
###################################

PORT ?= 1234

start-dev-server:
	PORT=$(PORT) FILES="$(addprefix html/,$(HTML))" npx nf start

###################################
