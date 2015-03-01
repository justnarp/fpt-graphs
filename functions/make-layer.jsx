function makeLayer(layerName) {
    // Make a new layer
    var idMk = charIDToTypeID("Mk  ");
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref1 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref1.putClass(idLyr);
    desc3.putReference(idnull, ref1);
    executeAction(idMk, desc3, DialogModes.NO);
    // Rename layer
    var idsetd = charIDToTypeID("setd");
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref2 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref2.putEnumerated(idLyr, idOrdn, idTrgt);
    desc4.putReference(idnull, ref2);
    var idT = charIDToTypeID("T   ");
    var desc5 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc5.putString(idNm, layerName);
    var idLyr = charIDToTypeID("Lyr ");
    desc4.putObject(idT, idLyr, desc5);
    executeAction(idsetd, desc4, DialogModes.NO);
}