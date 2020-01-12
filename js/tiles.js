import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export const create_tile_layer = (url) => {
  return new TileLayer({
    source: new OSM({
      attributions: [
        '&#169; ' +
        '<a href="https://www.openstreetmap.org/copyright/de" target="_blank">OpenStreetMap</a>-' +
        'Mitwirkende.'
      ],
      url: url
    })
  });
};
