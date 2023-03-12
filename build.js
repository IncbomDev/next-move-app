const NwBuilder = require('nw-builder');

// Create a new NW.js builder object
const nw = new NwBuilder({
    files: './', // Path to your NW.js project files
    platforms: ['win64'], // Platforms to build for (in this case, Windows 64-bit)
    version: '0.51.0' // NW.js version to use
});

// Build the NW.js project
nw.build().then(function () {
    console.log('Build complete!');
}).catch(function (error) {
    console.error(error);
});
