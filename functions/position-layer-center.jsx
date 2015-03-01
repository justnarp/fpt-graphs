function positionLayerCenter(lyr, x, y) {// layerObject, Number, Number
    var lyr1 = getLayer(lyr);
    // if can not move layer return
    if (lyr1.iisBackgroundLayer || lyr1.positionLocked) return
    // get the layer bounds
    var layerBounds = lyr1.bounds;
    // get top left position
    var layerX = (layerBounds[0].value + layerBounds[2].value) / 2;
    var layerY = (layerBounds[1].value + layerBounds[3].value) / 2;
    // the difference between where layer needs to be and is now
    var deltaX = x - layerX;
    var deltaY = y - layerY;
    // move the layer into position
    lyr1.translate(deltaX, deltaY);
}