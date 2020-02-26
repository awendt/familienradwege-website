import { create_tile_layer } from './tiles';
import { roads_layer, paths_layer } from './map_data';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import LayerSwitcher from 'ol-layerswitcher';
import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';

const BERLIN_COORDINATES = [13.410, 52.524];

var map = new Map({
  target: 'mapid',
  layers: [
    create_tile_layer('https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'),
    roads_layer,
    paths_layer
  ],
  view: new View({
    center: fromLonLat(BERLIN_COORDINATES),
    zoom: 13
  })
});

var layerSwitcher = new LayerSwitcher();
map.addControl(layerSwitcher);

// export options for html-to-image.
// See: https://github.com/bubkoo/html-to-image#options
var exportOptions = {
  filter: (element) => {
    return element.className ? element.className.indexOf('ol-control') === -1 : true;
  }
};

document.getElementById('export-png').addEventListener('click', function() {
  map.once('rendercomplete', () => {
    toBlob(map.getTargetElement(), exportOptions)
      .then((blob) => {
        saveAs(blob, 'map.png');
      });
  });
  map.renderSync();
});
