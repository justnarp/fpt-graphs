

// Run from setup-and-run.jsx



// Watch the magic happen
var countryData = {};
countryData['private-banking'] = {};
countryData['retail-banking'] = {};
if(typeof dataPBSE != 'undefined')countryData['private-banking']['SE'] = dataPBSE;
if(typeof dataPBNO != 'undefined')countryData['private-banking']['NO'] = dataPBNO;
if(typeof dataRBSE != 'undefined')countryData['retail-banking']['SE'] = dataRBSE;
if(typeof dataRBSE != 'undefined')countryData['retail-banking']['SEonline'] = dataRBSE;

// Graph dimensions
var graphDimensionX = 400,
    graphDimensionY = 290,
    graphPaddingTop = 25,
    graphPaddingBottom = 25,
    highestYPixels = 20 + graphPaddingTop,
    lowestYPixels = 20 + graphDimensionY - graphPaddingBottom,
    yearPosition2015 = 420,
    yearPosition2000 = 20;

// Do the graphs
for (var bankType in countryData) {
  for (var country in countryData[bankType]) {
    for (var dataType in countryData[bankType][country]) {

      var doTheGraphs = true;
      var saveDataTypeAs = dataType;
      var onlineGraphs = false;
      if (bankType == 'retail-banking') {
        // retail-banking should only save 'eo' for norway, and it should be saved as 'rf_plus'
        if (dataType == 'eo') {
          if (country == 'NO') {
            saveDataTypeAs = 'rf_plus';
          } else doTheGraphs = false;
        }
        // retail-banking don't want fio graph
        if (dataType == 'fio') doTheGraphs = false;
        // do the online graphs
        if (country == 'SEonline') onlineGraphs = true;
      }

      if (doTheGraphs) {
        // Data values
        var excelLineArray = countryData[bankType][country][dataType].excelLineArray,
            maxLoss = countryData[bankType][country][dataType].maxLoss,
            maxLossPositionMonth = countryData[bankType][country][dataType].maxLossPositionMonth,
            maxLossPositionYear = countryData[bankType][country][dataType].maxLossPositionYear,
            maxReturn = countryData[bankType][country][dataType].maxReturn,
            maxReturnPositionMonth = countryData[bankType][country][dataType].maxReturnPositionMonth,
            maxReturnPositionYear = countryData[bankType][country][dataType].maxReturnPositionYear;

        // Draw the curves
        var maxLossPosition = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 * 12 - (maxLossPositionYear * 12 + maxLossPositionMonth - 1)) / (2015 * 12 - 2000 * 12);
        var maxReturnPosition = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 * 12 - (maxReturnPositionYear * 12 + maxReturnPositionMonth - 1)) / (2015 * 12 - 2000 * 12);

        var yearPositionY = onlineGraphs ? 320 : 23; // top: 23 - bottom: 320

        app.activeDocument.layerSets.getByName('legend online').visible = onlineGraphs;

        var axisPosition2015 = yearPosition2015;
        positionLayerCenter('xAxis2015Line', axisPosition2015, 165);
        positionLayerCenter('xAxis2015Text', axisPosition2015, yearPositionY);
        var axisPosition2010 = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 - (2010)) / (2015 - 2000);
        positionLayerCenter('xAxis2010Line', axisPosition2010, 165);
        positionLayerCenter('xAxis2010Text', axisPosition2010, yearPositionY);
        var axisPosition2005 = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 - (2005)) / (2015 - 2000);
        positionLayerCenter('xAxis2005Line', axisPosition2005, 165);
        positionLayerCenter('xAxis2005Text', axisPosition2005, yearPositionY);
        var axisPosition2000 = yearPosition2015 - (yearPosition2015 - yearPosition2000) * (2015 - (2000)) / (2015 - 2000);
        positionLayerCenter('xAxis2000Text', axisPosition2000, yearPositionY);
        app.activeDocument.artLayers.getByName('xAxis2000Text').visible = onlineGraphs;

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
        selectLayer('maxLossBox');
        var lineName = 'expReturnCurve';
        DrawLine_v2(myLineArray);

        // Change values
        app.activeDocument.layers.getByName('maxLossText').textItem.contents = Math.round(maxLoss) + '%';
        app.activeDocument.layers.getByName('maxReturnText').textItem.contents = Math.round(maxReturn) + '%';

        // Position box and text
        positionLayerCenter('maxLossBox', maxLossPosition + 15, 188);
        positionLayerCenter('maxReturnBox', maxReturnPosition + 15, 188);
        positionLayerCenter('maxLossBoxPB', maxLossPosition + 15, 188);
        positionLayerCenter('maxReturnBoxPB', maxReturnPosition + 15, 188);
        positionLayerCenter('maxLossText', maxLossPosition + 15, 58);
        positionLayerCenter('maxReturnText', maxReturnPosition + 15, 58);

        app.activeDocument.artLayers.getByName('expReturnCurveMax').visible = onlineGraphs;
        app.activeDocument.artLayers.getByName('expReturnCurveMin').visible = onlineGraphs;
        app.activeDocument.artLayers.getByName('maxLossText').visible = !onlineGraphs;
        app.activeDocument.artLayers.getByName('maxReturnBox').visible = !onlineGraphs;
        app.activeDocument.artLayers.getByName('maxReturnText').visible = !onlineGraphs;

        var privateBanking = bankType == 'private-banking';
        app.activeDocument.artLayers.getByName('maxLossBox').visible = !privateBanking && !onlineGraphs;
        app.activeDocument.artLayers.getByName('maxReturnBox').visible = !privateBanking && !onlineGraphs;
        app.activeDocument.artLayers.getByName('maxLossBoxPB').visible = privateBanking && !onlineGraphs;
        app.activeDocument.artLayers.getByName('maxReturnBoxPB').visible = privateBanking && !onlineGraphs;

        if (onlineGraphs) {
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
        }

        var locales = {
          'DK': ['da', 'en'],
          'SE': ['sv', 'en'],
          'SEonline': ['sv', 'en'],
          'NO': ['no', 'en'],
          'FI': ['fi', 'sv', 'en']
        };

        for (i = 0; i < locales[country].length; i++) {
          var folderName = destinationFolder + '/' + country + '/' + bankType;
          var fileName = 'RB_histdev_s_' + saveDataTypeAs + '_' + locales[country][i] + country + '.png';
  exit;
          saveAsPng(folderName, fileName, alsoSaveLargeGraphs);
        }
      }
    }
  }
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

  makeLayer(lineName + 'Temp');

  // Select myPath path
  var idslct = charIDToTypeID('slct');
  var desc6 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref3 = new ActionReference();
  var idPath = charIDToTypeID('Path');
  ref3.putName(idPath, lineName);
  desc6.putReference(idnull, ref3);
  executeAction(idslct, desc6, DialogModes.NO);

  // Turn path to line
  var idStrk = charIDToTypeID('Strk');
  var desc7 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref4 = new ActionReference();
  var idPath = charIDToTypeID('Path');
  var idOrdn = charIDToTypeID('Ordn');
  var idTrgt = charIDToTypeID('Trgt');
  ref4.putEnumerated(idPath, idOrdn, idTrgt);
  desc7.putReference(idnull, ref4);
  var idUsng = charIDToTypeID('Usng');
  var idPcTl = charIDToTypeID('PcTl');
  desc7.putClass(idUsng, idPcTl);
  executeAction(idStrk, desc7, DialogModes.NO);

  // remove line
  myPathItem.remove();

  copyLayerStyle(lineName);
  pasteLayerStyle(lineName + 'Temp');
  deleteLayer(lineName);
  renameLayer(lineName + 'Temp', lineName);
}

function selectLayer(layerName) {
  // Select layer
  var idslct = charIDToTypeID('slct');
  var desc36 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref26 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  ref26.putName(idLyr, layerName);
  desc36.putReference(idnull, ref26);
  var idMkVs = charIDToTypeID('MkVs');
  desc36.putBoolean(idMkVs, false);
  executeAction(idslct, desc36, DialogModes.NO);
}

function pasteLayerStyle(layerName) {
  // Select layer
  var idslct = charIDToTypeID('slct');
  var desc36 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref26 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  ref26.putName(idLyr, layerName);
  desc36.putReference(idnull, ref26);
  var idMkVs = charIDToTypeID('MkVs');
  desc36.putBoolean(idMkVs, false);
  executeAction(idslct, desc36, DialogModes.NO);
  // Paste layer style
  var idPaFX = charIDToTypeID('PaFX');
  var desc37 = new ActionDescriptor();
  executeAction(idPaFX, desc37, DialogModes.NO);
}

function copyLayerStyle(layerName) {
  // Select layer
  var idslct = charIDToTypeID('slct');
  var desc35 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref25 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  ref25.putName(idLyr, layerName);
  desc35.putReference(idnull, ref25);
  var idMkVs = charIDToTypeID('MkVs');
  desc35.putBoolean(idMkVs, false);
  executeAction(idslct, desc35, DialogModes.NO);
  // Copy layer style
  var idCpFX = charIDToTypeID('CpFX');
  executeAction(idCpFX, undefined, DialogModes.NO);
}

function makeLayer(layerName) {
  // Make a new layer
  var idMk = charIDToTypeID('Mk  ');
  var desc3 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref1 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  ref1.putClass(idLyr);
  desc3.putReference(idnull, ref1);
  executeAction(idMk, desc3, DialogModes.NO);
  // Rename layer
  var idsetd = charIDToTypeID('setd');
  var desc4 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref2 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  var idOrdn = charIDToTypeID('Ordn');
  var idTrgt = charIDToTypeID('Trgt');
  ref2.putEnumerated(idLyr, idOrdn, idTrgt);
  desc4.putReference(idnull, ref2);
  var idT = charIDToTypeID('T   ');
  var desc5 = new ActionDescriptor();
  var idNm = charIDToTypeID('Nm  ');
  desc5.putString(idNm, layerName);
  var idLyr = charIDToTypeID('Lyr ');
  desc4.putObject(idT, idLyr, desc5);
  executeAction(idsetd, desc4, DialogModes.NO);
}

function deleteLayer(name) {
  // Select Layer
  var idslct = charIDToTypeID('slct');
  var desc38 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref27 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  ref27.putName(idLyr, name);
  desc38.putReference(idnull, ref27);
  var idMkVs = charIDToTypeID('MkVs');
  desc38.putBoolean(idMkVs, false);
  executeAction(idslct, desc38, DialogModes.NO);
  // Delete Layer
  var idDlt = charIDToTypeID('Dlt ');
  var desc39 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref28 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  var idOrdn = charIDToTypeID('Ordn');
  var idTrgt = charIDToTypeID('Trgt');
  ref28.putEnumerated(idLyr, idOrdn, idTrgt);
  desc39.putReference(idnull, ref28);
  executeAction(idDlt, desc39, DialogModes.NO);
}

function renameLayer(oldName, newName) {
  // Select Layer
  var idslct = charIDToTypeID('slct');
  var desc40 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref29 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  ref29.putName(idLyr, oldName);
  desc40.putReference(idnull, ref29);
  var idMkVs = charIDToTypeID('MkVs');
  desc40.putBoolean(idMkVs, false);
  executeAction(idslct, desc40, DialogModes.NO);
  // Rename layer
  var idsetd = charIDToTypeID('setd');
  var desc41 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref30 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  var idOrdn = charIDToTypeID('Ordn');
  var idTrgt = charIDToTypeID('Trgt');
  ref30.putEnumerated(idLyr, idOrdn, idTrgt);
  desc41.putReference(idnull, ref30);
  var idT = charIDToTypeID('T   ');
  var desc42 = new ActionDescriptor();
  var idNm = charIDToTypeID('Nm  ');
  desc42.putString(idNm, newName);
  var idLyr = charIDToTypeID('Lyr ');
  desc41.putObject(idT, idLyr, desc42);
  executeAction(idsetd, desc41, DialogModes.NO);
}

function duplicateLayer(layerName, newLayerName) {
  var idslct = charIDToTypeID('slct');
  var desc53 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref40 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  ref40.putName(idLyr, layerName);
  desc53.putReference(idnull, ref40);
  var idMkVs = charIDToTypeID('MkVs');
  desc53.putBoolean(idMkVs, false);
  executeAction(idslct, desc53, DialogModes.NO);
  var idDplc = charIDToTypeID('Dplc');
  var desc54 = new ActionDescriptor();
  var idnull = charIDToTypeID('null');
  var ref41 = new ActionReference();
  var idLyr = charIDToTypeID('Lyr ');
  var idOrdn = charIDToTypeID('Ordn');
  var idTrgt = charIDToTypeID('Trgt');
  ref41.putEnumerated(idLyr, idOrdn, idTrgt);
  desc54.putReference(idnull, ref41);
  var idNm = charIDToTypeID('Nm  ');
  desc54.putString(idNm, newLayerName);
  var idVrsn = charIDToTypeID('Vrsn');
  desc54.putInteger(idVrsn, 5);
  executeAction(idDplc, desc54, DialogModes.NO);
}


