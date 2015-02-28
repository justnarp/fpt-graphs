function selectLayer(layerName) {
    // Select layer
    var idslct = charIDToTypeID("slct");
    var desc36 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref26 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref26.putName(idLyr, layerName);
    desc36.putReference(idnull, ref26);
    var idMkVs = charIDToTypeID("MkVs");
    desc36.putBoolean(idMkVs, false);
    executeAction(idslct, desc36, DialogModes.NO);
}