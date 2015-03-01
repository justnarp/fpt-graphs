function renameLayer(oldName, newName) {
    // Select Layer
    var idslct = charIDToTypeID("slct");
    var desc40 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref29 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref29.putName(idLyr, oldName);
    desc40.putReference(idnull, ref29);
    var idMkVs = charIDToTypeID("MkVs");
    desc40.putBoolean(idMkVs, false);
    executeAction(idslct, desc40, DialogModes.NO);
    // Rename layer
    var idsetd = charIDToTypeID("setd");
    var desc41 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref30 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref30.putEnumerated(idLyr, idOrdn, idTrgt);
    desc41.putReference(idnull, ref30);
    var idT = charIDToTypeID("T   ");
    var desc42 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc42.putString(idNm, newName);
    var idLyr = charIDToTypeID("Lyr ");
    desc41.putObject(idT, idLyr, desc42);
    executeAction(idsetd, desc41, DialogModes.NO);
}