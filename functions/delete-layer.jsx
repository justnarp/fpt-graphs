function deleteLayer(name) {
    // Select Layer
    var idslct = charIDToTypeID("slct");
    var desc38 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref27 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref27.putName(idLyr, name);
    desc38.putReference(idnull, ref27);
    var idMkVs = charIDToTypeID("MkVs");
    desc38.putBoolean(idMkVs, false);
    executeAction(idslct, desc38, DialogModes.NO);
    // Delete Layer
    var idDlt = charIDToTypeID("Dlt ");
    var desc39 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref28 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref28.putEnumerated(idLyr, idOrdn, idTrgt);
    desc39.putReference(idnull, ref28);
    executeAction(idDlt, desc39, DialogModes.NO);
}