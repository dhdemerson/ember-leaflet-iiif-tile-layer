/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-leaflet-iiif-tile-layer',
  options: {
    nodeAssets: {
      'leaflet-iiif': {
        vendor: {
          include: ['leaflet-iiif.js']
        }
      }
    }
  },
  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/leaflet-iiif/leaflet-iiif.js');
  }
};
