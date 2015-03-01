function drawLine(lineName, drawLineArr) {
    var doc = app.activeDocument;
    var y = drawLineArr.length;

    var lineArray = [];
    for (var i = 0; i < y; i++) {
        lineArray[i] = new PathPointInfo;
        lineArray[i].kind = PointKind.CORNERPOINT;
        lineArray[i].anchor = drawLineArr[i];
        lineArray[i].leftDirection = lineArray[i].anchor;
        lineArray[i].rightDirection = lineArray[i].anchor;
    }

    var lineSubPathArray = new SubPathInfo();
    lineSubPathArray.closed = false;
    lineSubPathArray.operation = ShapeOperation.SHAPEADD;
    lineSubPathArray.entireSubPath = lineArray;
    var myPathItem = doc.pathItems.add(lineName, [lineSubPathArray]);

    makeLayer(lineName + "Temp");

    // Select myPath path
    var idslct = charIDToTypeID("slct");
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref3 = new ActionReference();
    var idPath = charIDToTypeID("Path");
    ref3.putName(idPath, lineName);
    desc6.putReference(idnull, ref3);
    executeAction(idslct, desc6, DialogModes.NO);

    // Turn path to line
    var idStrk = charIDToTypeID("Strk");
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref4 = new ActionReference();
    var idPath = charIDToTypeID("Path");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref4.putEnumerated(idPath, idOrdn, idTrgt);
    desc7.putReference(idnull, ref4);
    var idUsng = charIDToTypeID("Usng");
    var idPcTl = charIDToTypeID("PcTl");
    desc7.putClass(idUsng, idPcTl);
    executeAction(idStrk, desc7, DialogModes.NO);

    // remove line
    myPathItem.remove();

    copyLayerStyle(lineName);
    pasteLayerStyle(lineName + "Temp");
    deleteLayer(lineName);
    renameLayer(lineName + "Temp", lineName);
}