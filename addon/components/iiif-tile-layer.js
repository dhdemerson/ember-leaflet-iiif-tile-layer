import TileLayer from 'ember-leaflet/components/tile-layer';

export default TileLayer.extend({
  
  leafletOptions: [
    'tileFormat',
    'tileSize',
    'fitBounds',
    'setMaxBounds',
    'quality'
  ],

  createLayer() {
    return this.L.tileLayer.iiif(...this.get('requiredOptions'), this.get('options'));
  }

});
