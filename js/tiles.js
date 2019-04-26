import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export const tile_layer = new TileLayer({
  source: new OSM({
    url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
  })
});
