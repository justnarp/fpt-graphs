var addTextLayer = function (text, size, bold, x, y) {
    var textLayer = activeDocument.artLayers.add();
    textLayer.name = 'xxx';
    textLayer.kind = LayerKind.TEXT;
    textLayer.textItem.contents = text;
    textLayer.textItem.size = size;
    bold? textLayer.textItem.font = 'Arial-BoldMT' : textLayer.textItem.font = 'ArialMT';
    var textColor = new SolidColor;
    textColor.rgb.red = 50;
    textColor.rgb.green = 50;
    textColor.rgb.blue = 50;
    textLayer.textItem.color = textColor;
    textLayer.textItem.position = [x+' px',y+' px'];
    textLayer.textItem.justification = Justification.CENTER;
}

//addTextLayer('-8%', 10, false, 50, 50);

/*
 selectLayer('xxx')
 //activeDocument.activeLayer = textLayer;
 var sel = activeDocument.activeLayer
 alert(sel.textItem.justification)
 */