function saveAsPng(dir, file, alsoSaveAsLarge) {

    var pngOpts = new PNGSaveOptions();
    pngOpts.embedColorProfile = true;
    pngOpts.formatOptions = FormatOptions.STANDARDBASELINE;
    pngOpts.matte = MatteType.NONE;
    pngOpts.quality = 1;

    var createDir = new Folder(dir);
    if (!createDir.exists) createDir.create();
    if(alsoSaveAsLarge){
        createDir = new Folder(dir + '/large');
        if (!createDir.exists) createDir.create();
    }

    var smallFile = File(dir+'/'+file);
    if (smallFile.exists) {
        smallFile.remove()
    }
    activeDocument.saveAs(smallFile, pngOpts, true, Extension.LOWERCASE);

    if(alsoSaveAsLarge){
        var largeFile = File(dir+'/large/'+file);
        if (largeFile.exists) {
            largeFile.remove()
        }
        activeDocument.resizeImage(900, 660);
        activeDocument.saveAs(largeFile, pngOpts, true, Extension.LOWERCASE);
        activeDocument.resizeImage(450, 330);
    }

}