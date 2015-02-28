function selectNone(){
    var idsetd = charIDToTypeID( "setd" );
    var desc57 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref48 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref48.putProperty( idChnl, idfsel );
    desc57.putReference( idnull, ref48 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc57.putEnumerated( idT, idOrdn, idNone );
    executeAction( idsetd, desc57, DialogModes.NO );
}