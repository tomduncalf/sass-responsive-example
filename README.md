# SASS Layout Example

Responsive layout example using SASS and Gulp.

Should work in Chrome, Firefox and iOS Safari (tested on iPhone 5S, switches to desktop mode in landscape). Menu is broken in desktop Safari due to Flexbox issues.

## Usage

Run `./run.sh` to start a [http-server](https://www.npmjs.com/package/http-server), and then browse to http://127.0.0.1:4000.
Alternatively, point a server of your choice to the `dist` folder.

## Development

1. To install required packages, run `npm install`
2. To compile the SASS, run `gulp sass`, or `gulp sass:watch` to automatically recompile on any changes
