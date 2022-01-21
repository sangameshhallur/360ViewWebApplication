function load360Image(configFileURL, graphicsPath) {
    var rotator = WR360.ImageRotator.Create('wr360PlayerId');
    rotator.settings.configFileURL = configFileURL;
    /*rotator.settings.configFileURL = '../XML/f1.xml';*/
    rotator.settings.graphicsPath = graphicsPath;
    rotator.settings.alt = '360 degree view - f1';
    rotator.settings.googleEventTracking = false;
    rotator.settings.responsiveBaseWidth = 0;
    rotator.settings.responsiveMinHeight = 0;
    rotator.runImageRotator();
}