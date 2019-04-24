import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Stroke, Style } from 'ol/style';

const style_function = function(_feature) {
  return new Style({
    stroke: new Stroke({
      color: '#426E86',
      width: 1.5
    })
  })
};

// from https://openlayers.org/en/latest/examples/vector-layer.html?q=geojson
export const roads_layer = new VectorLayer({
  source: new VectorSource({
    url: '/data/berlin/roads.json',
    format: new GeoJSON()
  }),
  style: style_function
});

export const paths_layer = new VectorLayer({
  source: new VectorSource({
    url: '/data/berlin/paths.json',
    format: new GeoJSON()
  }),
  style: style_function
});
