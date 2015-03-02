function selectMaskInverseDelete(maskLayer){
    // =======================================================
    var idsetd = charIDToTypeID( "setd" );
    var desc26 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref27 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref27.putProperty( idChnl, idfsel );
    desc26.putReference( idnull, ref27 );
    var idT = charIDToTypeID( "T   " );
    var ref28 = new ActionReference();
    var idPath = charIDToTypeID( "Path" );
    var idPath = charIDToTypeID( "Path" );
    var idvectorMask = stringIDToTypeID( "vectorMask" );
    ref28.putEnumerated( idPath, idPath, idvectorMask );
    var idLyr = charIDToTypeID( "Lyr " );
    ref28.putName( idLyr, maskLayer );
    desc26.putReference( idT, ref28 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc26.putInteger( idVrsn, 1 );
    var idvectorMaskParams = stringIDToTypeID( "vectorMaskParams" );
    desc26.putBoolean( idvectorMaskParams, true );
    executeAction( idsetd, desc26, DialogModes.NO );

// =======================================================
    var idInvs = charIDToTypeID( "Invs" );
    executeAction( idInvs, undefined, DialogModes.NO );

// =======================================================
    var idDlt = charIDToTypeID( "Dlt " );
    executeAction( idDlt, undefined, DialogModes.NO );
}