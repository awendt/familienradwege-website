import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export const create_tile_layer = (url) => {
  return new TileLayer({
    source: new OSM({
      url: url
    })
  });
};
