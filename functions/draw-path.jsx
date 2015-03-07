function turnPathToRaster(pathName) {
  selectLayer(pathName);
  makeLayer(pathName + "Temp");


  /*
   var currentPathItem = app.activeDocument.pathItems.getByName(pathName);
   var selection = currentPathItem.select();
   alert(app.foregroundColor);
   selection.stroke(app.foregroundColor, '100 px');
   //currentPathItem.strokePath(ToolType.PENCIL, 100);
   */



  // Select myPath path
  var idslct = charIDToTypeID("slct");
  var desc6 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref3 = new ActionReference();
  var idPath = charIDToTypeID("Path");
  ref3.putName(idPath, pathName);
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


  copyLayerStyle(pathName);
  pasteLayerStyle(pathName + "Temp");
  deleteLayer(pathName);
  renameLayer(pathName + "Temp", pathName);

  duplicateLayer(pathName, pathName + 'LargeTemp');
  selectLayer(pathName + 'LargeTemp');
  copyLayerStyle(pathName + 'Large');
  pasteLayerStyle(pathName + "LargeTemp");
  deleteLayer(pathName + 'Large');
  renameLayer(pathName + "LargeTemp", pathName + 'Large');

  if(onlineGraphs) onlineGraphCurves();
}

function onlineGraphCurves() {

  app.activeDocument.artLayers.getByName('maxReturnBox').visible = true;
  app.activeDocument.artLayers.getByName('maxLossBox').visible = true;
  // small
  deleteLayer('expReturnCurveMax');
  selectLayer('expReturnCurve');
  duplicateLayer('expReturnCurve', 'expReturnCurveMax');
  selectMaskInverseDelete('maxReturnBox');
  selectNone();
  copyLayerStyle('expReturnCurveMaxLayerStyle');
  pasteLayerStyle('expReturnCurveMax');
  deleteLayer('expReturnCurveMin');
  selectLayer('expReturnCurve');
  duplicateLayer('expReturnCurve', 'expReturnCurveMin');
  selectMaskInverseDelete('maxLossBox');
  selectNone();
  copyLayerStyle('expReturnCurveMinLayerStyle');
  pasteLayerStyle('expReturnCurveMin');

  // large
  deleteLayer('expReturnCurveMaxLarge');
  selectLayer('expReturnCurveLarge');
  duplicateLayer('expReturnCurveLarge', 'expReturnCurveMaxLarge');
  selectMaskInverseDelete('maxReturnBox');
  selectNone();
  copyLayerStyle('expReturnCurveMaxLayerStyleLarge');
  pasteLayerStyle('expReturnCurveMaxLarge');
  deleteLayer('expReturnCurveMinLarge');
  selectLayer('expReturnCurveLarge');
  duplicateLayer('expReturnCurveLarge', 'expReturnCurveMinLarge');
  selectMaskInverseDelete('maxLossBox');
  selectNone();
  copyLayerStyle('expReturnCurveMinLayerStyleLarge');
  pasteLayerStyle('expReturnCurveMinLarge');

  app.activeDocument.artLayers.getByName('maxReturnBox').visible = false;
  app.activeDocument.artLayers.getByName('maxLossBox').visible = false;
}

function drawPath(pathName, pathDataArr) {
  var doc = app.activeDocument;
  var y = pathDataArr.length;

  var lineArray = [];
  for (var i = 0; i < y; i++) {
    lineArray[i] = new PathPointInfo;
    lineArray[i].kind = PointKind.CORNERPOINT;
    lineArray[i].anchor = pathDataArr[i];
    lineArray[i].leftDirection = lineArray[i].anchor;
    lineArray[i].rightDirection = lineArray[i].anchor;
  }

  var lineSubPathArray = new SubPathInfo();
  lineSubPathArray.closed = false;
  lineSubPathArray.operation = ShapeOperation.SHAPEADD;
  lineSubPathArray.entireSubPath = lineArray;
  var pathItem = doc.pathItems.add(pathName, [lineSubPathArray]);
  return pathItem;
}