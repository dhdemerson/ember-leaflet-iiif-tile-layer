/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-leaflet-iiif-tile-layer',
  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/leaflet-iiif/leaflet-iiif.js');
  }
};
