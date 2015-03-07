function saveAsPng(dir, file) {

  activeDocument.resizeImage(450, 330);

  var pngOpts = new PNGSaveOptions();
  pngOpts.embedColorProfile = true;
  pngOpts.formatOptions = FormatOptions.STANDARDBASELINE;
  pngOpts.matte = MatteType.NONE;
  pngOpts.quality = 1;

  var createDir = new Folder(dir);
  if (!createDir.exists) createDir.create();

  var saveOptions = {
    'smallBg': {
      'large': false,
      'bg': true
    },
    'smallNoBg': {
      'large': false,
      'bg': false
    },
    'largeBg': {
      'large': true,
      'bg': true
    },
    'largeNoBg': {
      'large': true,
      'bg': false
    }
  };

  for (var opt in saveOptions) {
    var fileName = file;
    app.activeDocument.artLayers.getByName('background').visible = saveOptions[opt]['bg'];
    if (!saveOptions[opt]['bg']) fileName += '_no-bg';

    if (saveOptions[opt]['large']) {
      fileName += '_large';
      activeDocument.resizeImage(1500, 1100);
    }

    var saveFile = File(dir + '/' + fileName + '.png');
    if (saveFile.exists) saveFile.remove();
    activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE);

    activeDocument.resizeImage(450, 330);

  }

  // always leave the background layer visible after saving
  app.activeDocument.artLayers.getByName('background').visible = true;

}