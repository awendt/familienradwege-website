HTML = index.html berlin/index.html

# always re-build website
.PHONY: website/index.html server watch screenshots

all: install local build

build: website/index.html

##########################################
# Check installation of required software
##########################################
check: check-node check-npm check-pandoc

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

website/index.html: $(HTML)
	npx parcel build $^ --out-dir website

%.html %/index.html: pages/%.md
	pandoc --standalone -t html5 $< > $@

website/data/berlin/%.json:
	mkdir -p website/data/berlin
	wget --directory-prefix=website/data/berlin --compression=auto https://www.familienradwege.de/data/berlin/$(notdir $@)

PORT = 1234

###################################
# Convenience tools for developing
###################################

server:
	ruby -run -e httpd website/ -p $(PORT) || php -S localhost:$(PORT)

watch:
	npx parcel watch $(HTML) --out-dir website

###################################
