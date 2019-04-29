const BERLIN_COORDINATES = [52.524, 13.410];

const GEOJSON_OPTIONS = {
  color: '#426E86',
  pointToLayer: () => {},
  weight: 1.5 // 3 seems to be default
}

export const map = L.map('mapid').setView(BERLIN_COORDINATES, 13);

export const layers = {
  roads: new L.geoJSON(undefined, GEOJSON_OPTIONS),
  paths: new L.geoJSON(undefined, GEOJSON_OPTIONS)
};