import { create_tile_layer } from './tiles';
import { roads_layer, paths_layer } from './map_data';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import LayerSwitcher from 'ol-layerswitcher';

const BERLIN_COORDINATES = [13.410, 52.524];

var northwestCorner = fromLonLat([12.766667, 52.799722]); // Fehrbellin
var southeastCorner = fromLonLat([14.416667, 52.25]);     // Müllrose

var map = new Map({
  target: 'mapid',
  layers: [
    create_tile_layer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'),
    roads_layer,
    paths_layer
  ],
  view: new View({
    center: fromLonLat(BERLIN_COORDINATES),
    // array of numbers representing an extent: [minx, miny, maxx, maxy]
    extent: [northwestCorner[0], southeastCorner[1], southeastCorner[0], northwestCorner[1]],
    minZoom: 10,
    zoom: 13
  })
});

var layerSwitcher = new LayerSwitcher();
map.addControl(layerSwitcher);
