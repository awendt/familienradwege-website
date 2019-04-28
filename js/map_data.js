import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Stroke, Style } from 'ol/style';
import { Group as LayerGroup } from 'ol/layer';

const default_style = new Style({
  stroke: new Stroke({
    color: '#426E86',
    width: 1.5
  })
});

const build_layer = (title, url) => {
  return new LayerGroup({
    title: title,
    combine: true,
    layers: [
      // https://openlayers.org/en/latest/examples/vector-layer.html?q=geojson
      new VectorLayer({
        source: new VectorSource({
          url: url,
          format: new GeoJSON()
        }),
        style: default_style
      })
    ]
  });
};

export const paths_layer = build_layer('Straßen', '/data/berlin/roads.json');
export const roads_layer = build_layer('Wege', '/data/berlin/paths.json');
