LO_RES_JPEGS = berlin/map-patches.jpg berlin/map-parks.jpg berlin/map-city.jpg
HI_RES_JPEGS = berlin/map-patches@2x.jpg berlin/map-parks@2x.jpg berlin/map-city@2x.jpg

all: map.jpg map@2x.jpg $(LO_RES_JPEGS) $(HI_RES_JPEGS)

map.jpg: map-big.png
	convert map-big.png -quality 92 -resize x400 -gravity center -crop 400x400+0+0 map.jpg

map@2x.jpg: map-big.png
	convert map-big.png -quality 92 -resize x800 -gravity center -crop 800x800+0+0 map@2x.jpg

berlin/%.jpg: berlin/%.png
	convert $< -quality 85 -resize 1145x498 -gravity center $@

berlin/%@2x.jpg: berlin/%.png
	convert $< -quality 85 -resize 2290x996 -gravity center $@
