document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    screen.orientation.lock('portrait-primary');
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
