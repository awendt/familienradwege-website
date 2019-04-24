import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export const tile_layer = new TileLayer({
  source: new XYZ({
    url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
  })
});
