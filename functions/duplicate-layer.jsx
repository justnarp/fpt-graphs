function duplicateLayer(layerName, newLayerName) {
    var idslct = charIDToTypeID("slct");
    var desc53 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref40 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref40.putName(idLyr, layerName);
    desc53.putReference(idnull, ref40);
    var idMkVs = charIDToTypeID("MkVs");
    desc53.putBoolean(idMkVs, false);
    executeAction(idslct, desc53, DialogModes.NO);
    var idDplc = charIDToTypeID("Dplc");
    var desc54 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref41 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref41.putEnumerated(idLyr, idOrdn, idTrgt);
    desc54.putReference(idnull, ref41);
    var idNm = charIDToTypeID("Nm  ");
    desc54.putString(idNm, newLayerName);
    var idVrsn = charIDToTypeID("Vrsn");
    desc54.putInteger(idVrsn, 5);
    executeAction(idDplc, desc54, DialogModes.NO);
}