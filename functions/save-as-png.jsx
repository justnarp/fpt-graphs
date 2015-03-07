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


  /*

  // create large graphs first, to make the path smooth
  activeDocument.resizeImage(1500, 1100);
  turnPathToRaster(lineName, pathItem);

  app.activeDocument.artLayers.getByName('expReturnCurveMax').visible = false;
  app.activeDocument.artLayers.getByName('expReturnCurveMin').visible = false;
  app.activeDocument.artLayers.getByName('expReturnCurveMaxLarge').visible = true;
  app.activeDocument.artLayers.getByName('expReturnCurveMinLarge').visible = true;

  app.activeDocument.artLayers.getByName('expReturnCurveLarge').visible = true;
  app.activeDocument.artLayers.getByName('expReturnCurve').visible = false;
  app.activeDocument.artLayers.getByName('background').visible = true;
  save(file, 'large');
  app.activeDocument.artLayers.getByName('background').visible = false;
  save(file, 'nobg-large');

  // now the small graphs
  activeDocument.resizeImage(450, 330);

  app.activeDocument.artLayers.getByName('expReturnCurveMax').visible = true;
  app.activeDocument.artLayers.getByName('expReturnCurveMin').visible = true;
  app.activeDocument.artLayers.getByName('expReturnCurveMaxLarge').visible = false;
  app.activeDocument.artLayers.getByName('expReturnCurveMinLarge').visible = false;

  app.activeDocument.artLayers.getByName('expReturnCurveLarge').visible = false;
  app.activeDocument.artLayers.getByName('expReturnCurve').visible = true;
  save(file, 'nobg');
  app.activeDocument.artLayers.getByName('background').visible = true;
  save(file);

  function save(fileName, ext1) {
    if (ext1) fileName += '-' + ext1;
    fileName += '.png';
    var saveFile = File(dir + '/' + fileName);
    if (saveFile.exists) saveFile.remove();
    activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE);
  }

  */

}