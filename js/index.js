import { translate_keys } from './i18n';
import { tile_layer } from './tiles';
import { roads_layer, paths_layer } from './map_data';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';

const BERLIN_COORDINATES = [13.410, 52.524];

var map = new Map({
  target: 'mapid',
  layers: [tile_layer, roads_layer, paths_layer],
  view: new View({
    center: fromLonLat(BERLIN_COORDINATES),
    zoom: 13
  })
});
