function saveAsPng(dir, file) {

  app.activeDocument.artLayers.getByName('background').visible = true;

  var pngOpts = new PNGSaveOptions();
  pngOpts.embedColorProfile = true;
  pngOpts.formatOptions = FormatOptions.STANDARDBASELINE;
  pngOpts.matte = MatteType.NONE;
  pngOpts.quality = 1;

  var createDir = new Folder(dir);
  if (!createDir.exists) createDir.create();

  /*
  var createNoBgDir = new Folder(dir + '/no-bg');
  if (!createNoBgDir.exists) createNoBgDir.create();

  if (alsoSaveAsLarge) {
    createDir = new Folder(dir + '/large');
    if (!createDir.exists) createDir.create();

    createNoBgDir = new Folder(dir + '/large/no-bg');
    if (!createNoBgDir.exists) createNoBgDir.create();
  }
  */


  app.activeDocument.artLayers.getByName('background').visible = true;
  save(file);
  app.activeDocument.artLayers.getByName('background').visible = false;
  save(file, 'nobg');
  activeDocument.resizeImage(1500, 1100);
  save(file, 'nobg-large');
  app.activeDocument.artLayers.getByName('background').visible = true;
  save(file, 'large');
  activeDocument.resizeImage(450, 330);

  /*
  var smallFile = File(dir + '/' + file);
  if (smallFile.exists) smallFile.remove();
  activeDocument.saveAs(smallFile, pngOpts, true, Extension.LOWERCASE);
  */

  /*
  var smallFileNoBg = File(dir + '/no-bg/' + file);
  if (smallFileNoBg.exists) smallFileNoBg.remove();
  app.activeDocument.artLayers.getByName('background').visible = false;
  activeDocument.saveAs(smallFileNoBg, pngOpts, true, Extension.LOWERCASE);
  app.activeDocument.artLayers.getByName('background').visible = true;

  if (alsoSaveAsLarge) {
    var largeFile = File(dir + '/large/' + file);
    if (largeFile.exists) largeFile.remove();

    var largeFileNoBg = File(dir + '/large/no-bg/' + file);
    if (largeFileNoBg.exists) largeFileNoBg.remove();

    activeDocument.resizeImage(1500, 1100);
    app.activeDocument.artLayers.getByName('background').visible = true;
    activeDocument.saveAs(largeFile, pngOpts, true, Extension.LOWERCASE);

    app.activeDocument.artLayers.getByName('background').visible = false;
    activeDocument.saveAs(largeFileNoBg, pngOpts, true, Extension.LOWERCASE);
    app.activeDocument.artLayers.getByName('background').visible = true;


    activeDocument.resizeImage(450, 330);
  }
  */

  function save(fileName, ext1){
    if(ext1) fileName += '-' + ext1;
    fileName += '.png';
    var saveFile = File(dir + '/' + fileName);
    if (saveFile.exists) saveFile.remove();
    activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE);
  }

}