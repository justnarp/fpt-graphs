function pasteLayerStyle(layerName) {
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
    // Paste layer style
    var idPaFX = charIDToTypeID("PaFX");
    var desc37 = new ActionDescriptor();
    executeAction(idPaFX, desc37, DialogModes.NO);
}

function copyLayerStyle(layerName) {
    // Select layer
    var idslct = charIDToTypeID("slct");
    var desc35 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref25 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref25.putName(idLyr, layerName);
    desc35.putReference(idnull, ref25);
    var idMkVs = charIDToTypeID("MkVs");
    desc35.putBoolean(idMkVs, false);
    executeAction(idslct, desc35, DialogModes.NO);
    // Copy layer style
    var idCpFX = charIDToTypeID("CpFX");
    executeAction(idCpFX, undefined, DialogModes.NO);
}