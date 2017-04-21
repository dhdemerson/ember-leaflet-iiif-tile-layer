# ember-leaflet-iiif-tile-layer
This is a wrapper library for [Leaflet-iiif](https://github.com/mejackreed/Leaflet-IIIF) for use with [ember-leaflet](https://github.com/miguelcobain/ember-leaflet). 

## Installation
`ember install ember-leaflet`

`ember install ember-leaflet-iiif-tile-layer`

## Usage

#### Template

```htmlbars
{{#leaflet-map lat=0 lng=0 zoom=0 crs=crs}}
    {{iiif-tile-layer url="https://example.com/image/info.json"}}
{{/leaflet-map}}
```

#### Controller

```javascript
export default Ember.Controller.extend({
    crs: L.CRS.Simple
});
```
*If the map CRS is not set to `L.CRS.Simple` you will have a bad time and wonder why nothing works.*


### Options

See [Leaflet-iiif](https://github.com/mejackreed/Leaflet-IIIF#options)

#### Example

`{{iiif-tile-layer url="https://example.com/image/info.json" fitBounds=false}}`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).