all: map.jpg map@2x.jpg

map.jpg: map-big.png
	convert map-big.png -quality 92 -resize x400 -gravity center -crop 400x400+0+0 map.jpg

map@2x.jpg: map-big.png
	convert map-big.png -quality 92 -resize x800 -gravity center -crop 800x800+0+0 map@2x.jpg
