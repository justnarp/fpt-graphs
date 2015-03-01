var countries = new Array("SE", "FI", "NO", "DK"); // not for DK, only 10 years
var graphs = new Array("con", "mod", "bal", "gro", "rf", "rf_plus");
var destinationFolder = "/Users/MLP/Repos/ScriptAndPhotoshop/graphs/2014";
var alsoSaveLargeGraphs = false;

#include "functions/set-foreground-color.jsx";
#include "functions/make-selection.jsx";
#include "functions/gradient-selection.jsx";
#include "functions/select-none.jsx";
#include "functions/select-layer.jsx";
#include "functions/save-as-png.jsx";
#include "functions/draw-line.jsx";
#include "values/2014/min-exp-max-return.jsx";

for (var countryCounter = 0; countryCounter < countries.length; countryCounter++) {

    // don't make rf_plus for anyone but norway
    var graphsLength = graphs.length - (countries[countryCounter] == "NO" ? 0 : 1);

    for (var graphsCounter = 0; graphsCounter < graphsLength; graphsCounter++) {

        var minReturn = minExpMaxReturns(countries[countryCounter], graphs[graphsCounter]).minReturn
        var expReturn = minExpMaxReturns(countries[countryCounter], graphs[graphsCounter]).expReturn
        var maxReturn = minExpMaxReturns(countries[countryCounter], graphs[graphsCounter]).maxReturn

        // Determine boundaries
        var highestValueInPercent = maxReturn[9];
        var lowestValueInPercent = minReturn[2];

        // Graph dimensions
        var graphDimensionX = 400;
        var graphDimensionY = 290;
        var graphPaddingTop = 25;
        var graphPaddingBottom = 25;
        var xAxisPos = [];
        var xAxisYears = 9;
        for (var i = 0; i <= xAxisYears; i++) {
            xAxisPos.push(20 + (graphDimensionX / (xAxisYears)) * i);
        }
        var highestYPixels = 20 + graphPaddingTop;
        var lowestYPixels = 20 + graphDimensionY - graphPaddingBottom;

        // Draw the curves
        selectLayer("gradient");
        var drawLineArr = [];

        for(var i=0;i<10;i++){
            drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(minReturn[i])];
        }
        drawLine('minReturnCurve', drawLineArr);

        for(var i=0;i<10;i++){
            drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(expReturn[i])];
        }
        drawLine('expReturnCurve', drawLineArr);

        for(var i=0;i<10;i++){
            drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(maxReturn[i])];
        }
        drawLine('maxReturnCurve', drawLineArr);


        // Do the minReturn dots and text
        positionLayerCenter("minReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(minReturn[2]));
        positionLayerCenter("minReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(minReturn[5]));
        positionLayerCenter("minReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(minReturn[9]));
        getLayer("minReturn3YearsText").textItem.contents = Math.round(minReturn[2]) + "%";
        getLayer("minReturn6YearsText").textItem.contents = Math.round(minReturn[5]) + "%";
        getLayer("minReturn10YearsText").textItem.contents = Math.round(minReturn[9]) + "%";
        positionLayerCenter("minReturn3YearsText", xAxisPos[2], calculateYAxisPixels(minReturn[2]));
        positionLayerCenter("minReturn6YearsText", xAxisPos[5], calculateYAxisPixels(minReturn[5]));
        positionLayerCenter("minReturn10YearsText", xAxisPos[9], calculateYAxisPixels(minReturn[9]));
        getLayer("minReturn3YearsText").translate(-19, 12);
        getLayer("minReturn6YearsText").translate(-19, 12);
        getLayer("minReturn10YearsText").translate(-19, 12);

        // Do the expReturn dots and text
        positionLayerCenter("expReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(expReturn[2]));
        positionLayerCenter("expReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(expReturn[5]));
        positionLayerCenter("expReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(expReturn[9]));
        getLayer("expReturn3YearsText").textItem.contents = Math.round(expReturn[2]) + "%";
        getLayer("expReturn6YearsText").textItem.contents = Math.round(expReturn[5]) + "%";
        getLayer("expReturn10YearsText").textItem.contents = Math.round(expReturn[9]) + "%";
        positionLayerCenter("expReturn3YearsText", xAxisPos[2], calculateYAxisPixels(expReturn[2]));
        positionLayerCenter("expReturn6YearsText", xAxisPos[5], calculateYAxisPixels(expReturn[5]));
        positionLayerCenter("expReturn10YearsText", xAxisPos[9], calculateYAxisPixels(expReturn[9]));
        getLayer("expReturn3YearsText").translate(-19, -8);
        getLayer("expReturn6YearsText").translate(-19, -8);
        getLayer("expReturn10YearsText").translate(-19, -8);

        // Do the maxReturn dots and text
        positionLayerCenter("maxReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(maxReturn[2]));
        positionLayerCenter("maxReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(maxReturn[5]));
        positionLayerCenter("maxReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(maxReturn[9]));
        getLayer("maxReturn3YearsText").textItem.contents = Math.round(maxReturn[2]) + "%";
        getLayer("maxReturn6YearsText").textItem.contents = Math.round(maxReturn[5]) + "%";
        getLayer("maxReturn10YearsText").textItem.contents = Math.round(maxReturn[9]) + "%";
        positionLayerCenter("maxReturn3YearsText", xAxisPos[2], calculateYAxisPixels(maxReturn[2]));
        positionLayerCenter("maxReturn6YearsText", xAxisPos[5], calculateYAxisPixels(maxReturn[5]));
        positionLayerCenter("maxReturn10YearsText", xAxisPos[9], calculateYAxisPixels(maxReturn[9]));
        getLayer("maxReturn3YearsText").translate(-19, -8);
        getLayer("maxReturn6YearsText").translate(-19, -8);
        getLayer("maxReturn10YearsText").translate(-19, -8);

        // Do the y-axis
        positionLayerCenter("yAxis0PercentText", xAxisPos[0] + 15, calculateYAxisPixels(0) + 10);
        if (highestValueInPercent < 90) {
            getLayer("yAxis100PercentText").textItem.contents = "50%";
            positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(50));
            positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(50));
        } else {
            getLayer("yAxis100PercentText").textItem.contents = "100%";
            positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(100));
            positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(100));
        }

        // Do the x-axis
        positionLayerCenter("xAxisLine", graphDimensionX / 2 + 25, calculateYAxisPixels(0));
        positionLayerCenter("xAxis3YearLine", xAxisPos[2], graphDimensionY / 2 + 20);
        positionLayerCenter("xAxis6YearLine", xAxisPos[5], graphDimensionY / 2 + 20);
        positionLayerCenter("xAxis10YearLine", xAxisPos[9], graphDimensionY / 2 + 20);

        // Make gradient
        setForegroundColor(80,160,215);
        app.activeDocument.artLayers.getByName("emptyGradient").visible = false;
        deleteLayer("gradient");
        selectLayer("emptyGradient");
        duplicateLayer("emptyGradient", "gradient");
        app.activeDocument.artLayers.getByName("gradient").visible = true;
        selectLayer("gradient");
        gradientLoop(expReturn, maxReturn);
        gradientLoop(expReturn, minReturn);
        selectNone();

        // Save graphs
        var imgLocale = [];
        switch (countries[countryCounter]) {
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
                imgLocale.push('sv');
                imgLocale.push('fi');
                break;
        }
        imgLocale.push('en');

        var translationYear;
        for (var i = 0; i < imgLocale.length; i++) {

            // Setup language
            if (i == 0) {
                translationYear = 'år';
            } else if (imgLocale[i] == 'fi') {
                translationYear = 'vuosi';
            } else if (imgLocale[i] == 'en') {
                translationYear = 'year';
            }

            getLayer('xAxis3YearText').textItem.contents = '3 ' + translationYear;
            getLayer('xAxis6YearText').textItem.contents = '6 ' + translationYear;
            getLayer('xAxis10YearText').textItem.contents = '10 ' + translationYear;
            positionLayerCenter("xAxis3YearText", xAxisPos[2] - 2, 23);
            positionLayerCenter("xAxis6YearText", xAxisPos[5] - 2, 23);
            positionLayerCenter("xAxis10YearText", xAxisPos[9] - 2, 23);

            saveAsPng(destinationFolder + '/' + countries[countryCounter],
                'RB_capdevl_s_'+graphs[graphsCounter]+'_'+imgLocale[i] + countries[countryCounter] + '.png',
                alsoSaveLargeGraphs);
        }
    }
}

function getLayer(name){
    return app.activeDocument.layers.getByName(name);
}

function gradientLoop(startReturn, endReturn) {
    for (var step = 0; step < 20; step++) {
        var x1 = x4 = Math.round(xAxisPos[step]),
            x2 = x3 = Math.round(xAxisPos[step + 1]),
            y1 = Math.floor(calculateYAxisPixels(startReturn[step])),
            y2 = Math.floor(calculateYAxisPixels(startReturn[step + 1])),
            y3 = Math.floor(calculateYAxisPixels(endReturn[step + 1])),
            y4 = Math.floor(calculateYAxisPixels(endReturn[step])),
            splitDivs = [];

        for (var i = 0; i <= (x2 - x1); i++) {
            var x = x1 + i;
            var bottomY = Math.floor(y1 - (Math.abs(y2 - y1) / Math.abs(x2 - x1)) * i);
            var topY = Math.floor(y4 - (Math.abs(y3 - y4) / Math.abs(x2 - x1)) * i);
            var point = {x1: x, x2: x, y1: bottomY, y2: topY};

            splitDivs.push(point);
        }

        for (var i = 0; i < splitDivs.length - 1; i++) {
            var x1 = splitDivs[i].x1,
                x2 = splitDivs[i + 1].x1,
                x3 = splitDivs[i + 1].x2,
                x4 = splitDivs[i].x2,
                y1 = splitDivs[i].y1,
                y2 = splitDivs[i + 1].y1,
                y3 = splitDivs[i + 1].y2,
                y4 = splitDivs[i].y2;
            makeSelection(x1, x2, x3, x4, y1, y2, y3, y4);
            gradientSelection(x1, x2, x3, x4, y1, y2, y3, y4);
        }
    }
}

function calculateYAxisPixels(valueInPercent) {
    return highestYPixels + (highestValueInPercent - valueInPercent) / (highestValueInPercent - lowestValueInPercent) * (lowestYPixels - highestYPixels);
}

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


