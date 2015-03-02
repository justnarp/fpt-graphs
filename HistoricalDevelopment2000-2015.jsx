//var countries = new Array("DK", "SE", "FI", "NO");
var countries = new Array("SEonline");
var graphs = new Array("con", "mod", "bal", "gro", "rf", "rf_plus");

//var saveFolderAddress = "H:\\Graphs\\201403\\SE-historical-graphss\\";
//var saveFolderAddress = "/Users/MLP/Repos/ScriptAndPhotoshop/graphs";

var destinationFolder = "C:\\graphs\\2015\\retail-banking\\";
var alsoSaveLargeGraphs = true;

var onlineGraph = false;

#include "functions/save-as-png.jsx";

// No need to change anything after this

// Graph dimensions
var graphDimensionX = 400;
var graphDimensionY = 290;
var graphPaddingTop = 25;
var graphPaddingBottom = 25;
var xAxisPosition1Years = 20;
var xAxisPosition2Years = 20 + (graphDimensionX / 9);
var xAxisPosition3Years = 20 + (graphDimensionX / 9) * 2;
var xAxisPosition4Years = 20 + (graphDimensionX / 9) * 3;
var xAxisPosition5Years = 20 + (graphDimensionX / 9) * 4;
var xAxisPosition6Years = 20 + (graphDimensionX / 9) * 5;
var xAxisPosition7Years = 20 + (graphDimensionX / 9) * 6;
var xAxisPosition8Years = 20 + (graphDimensionX / 9) * 7;
var xAxisPosition9Years = 20 + (graphDimensionX / 9) * 8;
var xAxisPosition10Years = 20 + graphDimensionX;
var highestYPixels = 20 + graphPaddingTop;
var lowestYPixels = 20 + graphDimensionY - graphPaddingBottom;


for (var countryCounter = 0; countryCounter < countries.length; countryCounter++) {
  var graphsLength = graphs.length - (countries[countryCounter] == "NO" ? 0 : 1);

  var imgCountry = countries[countryCounter];

  if (imgCountry == 'SEonline') {
    imgCountry = 'SE';
    onlineGraph = true;
  }

  //var countryFolder = new Folder(saveFolderAddress + '/' + imgCountry);
  //if (!countryFolder.exists) countryFolder.create();

  for (var graphsCounter = 0; graphsCounter < graphsLength; graphsCounter++) {

    // data
  #include
    "values/2015/retail-banking/se/historical-development.jsx";

    // Draw the curves
    var yearPosition2015 = 420;
    var yearPosition2000 = 20;

    var maxLossPosition = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 * 12 - (maxLossPositionYear * 12 + maxLossPositionMonth - 1)) / (2015 * 12 - 2000 * 12);
    var maxReturnPosition = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 * 12 - (maxReturnPositionYear * 12 + maxReturnPositionMonth - 1)) / (2015 * 12 - 2000 * 12);

    var yearPositionY = onlineGraph ? 320 : 23; // top: 23 - bottom: 320

    app.activeDocument.layerSets.getByName("legend online").visible = onlineGraph;

    var axisPosition2015 = yearPosition2015;
    positionLayerCenter("xAxis2015Line", axisPosition2015, 165);
    positionLayerCenter("xAxis2015Text", axisPosition2015, yearPositionY);
    var axisPosition2010 = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 - (2010)) / (2015 - 2000);
    positionLayerCenter("xAxis2010Line", axisPosition2010, 165);
    positionLayerCenter("xAxis2010Text", axisPosition2010, yearPositionY);
    var axisPosition2005 = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 - (2005)) / (2015 - 2000);
    positionLayerCenter("xAxis2005Line", axisPosition2005, 165);
    positionLayerCenter("xAxis2005Text", axisPosition2005, yearPositionY);
    var axisPosition2000 = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 - (2000)) / (2015 - 2000);
    positionLayerCenter("xAxis2000Text", axisPosition2000, yearPositionY);
    app.activeDocument.artLayers.getByName("xAxis2000Text").visible = onlineGraph;


    var lowestNumberInGraph = 10000;
    var highestNumberInGraph = -10000;
    for (var i = 0; i < excelLineArray.length; i++) {
      if (excelLineArray[i] < lowestNumberInGraph) {
        lowestNumberInGraph = excelLineArray[i];
      }
      if (excelLineArray[i] > highestNumberInGraph) {
        highestNumberInGraph = excelLineArray[i];
      }
    }

    var myLineArray = new Array();
    var xPositionForGraph = 0;
    var yPositionForGraph = 0;
    for (var i = 0; i < excelLineArray.length; i++) {
      xPositionForGraph = 20 + ((graphDimensionX) / excelLineArray.length) * i;
      yPositionForGraph = graphDimensionY - (lowestNumberInGraph - excelLineArray[i]) / (lowestNumberInGraph - highestNumberInGraph) * (graphDimensionY - (20 + graphPaddingTop));
      myLineArray[i] = [xPositionForGraph, yPositionForGraph];
    }
    selectLayer("maxLossBox");
    var lineName = "expReturnCurve";
    DrawLine_v2(myLineArray);

    // Change values
    app.activeDocument.layers.getByName("maxLossText").textItem.contents = Math.round(maxLoss) + "%";
    app.activeDocument.layers.getByName("maxReturnText").textItem.contents = Math.round(maxReturn) + "%";

    // Position box and text
    positionLayerCenter("maxLossBox", maxLossPosition + 15, 188);
    positionLayerCenter("maxLossText", maxLossPosition + 15, 58);
    positionLayerCenter("maxReturnBox", maxReturnPosition + 15, 188);
    positionLayerCenter("maxReturnText", maxReturnPosition + 15, 58);

    var imgLocale = [];
    switch (imgCountry) {
      case 'DK':
        imgLocale.push('da');
        break;
      case 'SE':
        imgLocale.push('sv');
        break;
      case 'NO':
        imgLocale.push('no');
        break;
      case 'FI':
        imgLocale.push('fi');
        imgLocale.push('sv');
        break;
    }
    imgLocale.push('en');


    for (var i = 0; i < imgLocale.length; i++) {
      var outputFolder = destinationFolder;
      if (onlineGraph) {
        outputFolder += '/online';
      }
      saveAsPng(outputFolder + '/' + countries[countryCounter],
          'RB_histdev_s_' + graphs[graphsCounter] + '_' + imgLocale[i] + countries[countryCounter] + '.png',
          alsoSaveLargeGraphs);
      exit;
    }

  }
}


function savePictureOLD(saveFile) {
  var pngOpts = new ExportOptionsSaveForWeb;
  pngOpts.format = SaveDocumentType.PNG
  pngOpts.PNG8 = false;
  pngOpts.transparency = true;
  pngOpts.interlaced = false;
  pngOpts.quality = 100;
  activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, pngOpts);
}

function savePicture(saveFile) {
  saveFile = File(saveFile);
  if (saveFile.exists) {
    saveFile.remove()
  }

  pngOpts = new PNGSaveOptions();
  pngOpts.embedColorProfile = true
  pngOpts.formatOptions = FormatOptions.STANDARDBASELINE
  pngOpts.matte = MatteType.NONE
  pngOpts.quality = 1
  activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE)
}


function positionLayerTopRight(lyr, x, y) {// layerObject, Number, Number
  var lyr1 = app.activeDocument.layers.getByName(lyr);
  // if can not move layer return
  if (lyr1.iisBackgroundLayer || lyr.positionLocked) return
  // get the layer bounds
  var layerBounds = lyr1.bounds;
  // get top left position
  var layerX = layerBounds[2].value;
  var layerY = layerBounds[1].value;
  // the difference between where layer needs to be and is now
  var deltaX = x - layerX;
  var deltaY = y - layerY;
  // move the layer into position
  lyr1.translate(deltaX, deltaY);
}

function resizeLayer(layerName, Width, Height) {
  if (!documents.length) return;
  if (activeDocument.activeLayer.isBackgroundLayer) return;
  var startRulerUnits = preferences.rulerUnits;
  preferences.rulerUnits = Units.PIXELS;
  var LB = activeDocument.artLayers.getByName(layerName).bounds;
  var lWidth = 100 / (LB[2].value - LB[0].value);
  var lHeight = 100 / (LB[3].value - LB[1].value);
  var NewWidth = lWidth * Width;
  var NewHeight = lHeight * Height;
  activeDocument.artLayers.getByName(layerName).resize(Number(NewWidth), Number(NewHeight), AnchorPosition.BOTTOMRIGHT);
  app.preferences.rulerUnits = startRulerUnits;
}

function calculateYAxisPixels(valueInPercent) {
  return highestYPixels + (highestValueInPercent - valueInPercent) / (highestValueInPercent - lowestValueInPercent) * (lowestYPixels - highestYPixels);
}

function positionLayerCenter(lyr, x, y) {// layerObject, Number, Number
  var lyr1 = app.activeDocument.layers.getByName(lyr);
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

function DrawLine_v2(myLineArray) {
  var doc = app.activeDocument;
  var y = myLineArray.length;
  var i = 0;

  var lineArray = [];
  for (i = 0; i < y; i++) {
    lineArray[i] = new PathPointInfo;
    lineArray[i].kind = PointKind.CORNERPOINT;
    lineArray[i].anchor = myLineArray[i];
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

function makeLayer(layerName) {
  // Make a new layer
  var idMk = charIDToTypeID("Mk  ");
  var desc3 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref1 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref1.putClass(idLyr);
  desc3.putReference(idnull, ref1);
  executeAction(idMk, desc3, DialogModes.NO);
  // Rename layer
  var idsetd = charIDToTypeID("setd");
  var desc4 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref2 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  var idOrdn = charIDToTypeID("Ordn");
  var idTrgt = charIDToTypeID("Trgt");
  ref2.putEnumerated(idLyr, idOrdn, idTrgt);
  desc4.putReference(idnull, ref2);
  var idT = charIDToTypeID("T   ");
  var desc5 = new ActionDescriptor();
  var idNm = charIDToTypeID("Nm  ");
  desc5.putString(idNm, layerName);
  var idLyr = charIDToTypeID("Lyr ");
  desc4.putObject(idT, idLyr, desc5);
  executeAction(idsetd, desc4, DialogModes.NO);
}

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

function renameLayer(oldName, newName) {
  // Select Layer
  var idslct = charIDToTypeID("slct");
  var desc40 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref29 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref29.putName(idLyr, oldName);
  desc40.putReference(idnull, ref29);
  var idMkVs = charIDToTypeID("MkVs");
  desc40.putBoolean(idMkVs, false);
  executeAction(idslct, desc40, DialogModes.NO);
  // Rename layer
  var idsetd = charIDToTypeID("setd");
  var desc41 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref30 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  var idOrdn = charIDToTypeID("Ordn");
  var idTrgt = charIDToTypeID("Trgt");
  ref30.putEnumerated(idLyr, idOrdn, idTrgt);
  desc41.putReference(idnull, ref30);
  var idT = charIDToTypeID("T   ");
  var desc42 = new ActionDescriptor();
  var idNm = charIDToTypeID("Nm  ");
  desc42.putString(idNm, newName);
  var idLyr = charIDToTypeID("Lyr ");
  desc41.putObject(idT, idLyr, desc42);
  executeAction(idsetd, desc41, DialogModes.NO);
}

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


