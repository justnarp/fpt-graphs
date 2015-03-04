//var countries = new Array("SE", "FI", "NO", "DK"); // not for DK, only 10 years
var countries = new Array("SE"); // not for DK, only 10 years
var graphs = new Array("con", "mod", "bal", "gro", "rf", "rf_plus");
var alsoSaveLargeGraphs = true;
var privateBanking = true;

var bankType = privateBanking ? 'private-banking' : 'retail-banking';

if(privateBanking){
  graphs = new Array("con", "mod", "bal", "gro", "rf", "eo", "fio");
}

#include "destination-folder.jsx";
#include "functions/set-foreground-color.jsx";
#include "functions/make-selection.jsx";
#include "functions/gradient-selection.jsx";
#include "functions/select-none.jsx";
#include "functions/select-layer.jsx";
#include "functions/save-as-png.jsx";
#include "functions/draw-line.jsx";
#include "functions/get-layer.jsx";
#include "functions/make-layer.jsx";
#include "functions/gradient-loop.jsx";
#include "functions/copy-paste-layer-style.jsx";
#include "functions/position-layer-center.jsx";
#include "functions/delete-layer.jsx";
#include "functions/rename-layer.jsx";
#include "functions/duplicate-layer.jsx";
//#include "values/2014/min-exp-max-return.jsx";


for (var countryCounter = 0; countryCounter < countries.length; countryCounter++) {

  var imgCountry = countries[countryCounter];

  var graphsLength = graphs.length;

    // don't make rf_plus for anyone but norway
  if(!privateBanking){
    graphsLength = graphsLength - (imgCountry == "NO" ? 0 : 1);
  }

    for (var graphsCounter = 0; graphsCounter < graphsLength; graphsCounter++) {
      var graph = graphs[graphsCounter];
    //#include "values/2015/retail-banking/se/min-exp-max-returns.jsx";
    #include "values/2015/private-banking/se/min-exp-max-returns.jsx";

// Determine boundaries
        var highestValueInPercent = maxReturn[19];
        var lowestValueInPercent = minReturn[2];

// Graph dimensions
        var graphDimensionX = 400;
        var graphDimensionY = 290;
        var graphPaddingTop = 25;
        var graphPaddingBottom = 25;

        var xAxisPos = [];
        var xAxisYears = 19;
        for (var i = 0; i <= xAxisYears; i++) {
            xAxisPos.push(20 + (graphDimensionX / (xAxisYears)) * i);
        }
        var highestYPixels = 20 + graphPaddingTop;
        var lowestYPixels = 20 + graphDimensionY - graphPaddingBottom;

// Draw the curves
        selectLayer("gradient");

        var drawLineArr = [];
        for (var i = 0; i < 20; i++) {
            drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(minReturn[i])];
        }
        drawLine('minReturnCurve', drawLineArr);

        for (var i = 0; i < 20; i++) {
            drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(expReturn[i])];
        }
        drawLine('expReturnCurve', drawLineArr);

        for (var i = 0; i < 20; i++) {
            drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(maxReturn[i])];
        }
        drawLine('maxReturnCurve', drawLineArr);


// Do the minReturn dots and text
        positionLayerCenter("minReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(minReturn[2]));
        positionLayerCenter("minReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(minReturn[5]));
        positionLayerCenter("minReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(minReturn[9]));
        positionLayerCenter("minReturn20YearsDot", xAxisPos[19], calculateYAxisPixels(minReturn[19]));
        getLayer("minReturn3YearsText").textItem.contents = Math.round(minReturn[2]) + "%";
        getLayer("minReturn6YearsText").textItem.contents = Math.round(minReturn[5]) + "%";
        getLayer("minReturn10YearsText").textItem.contents = Math.round(minReturn[9]) + "%";
        getLayer("minReturn20YearsText").textItem.contents = Math.round(minReturn[19]) + "%";
        positionLayerCenter("minReturn3YearsText", xAxisPos[2], calculateYAxisPixels(minReturn[2]));
        positionLayerCenter("minReturn6YearsText", xAxisPos[5], calculateYAxisPixels(minReturn[5]));
        positionLayerCenter("minReturn10YearsText", xAxisPos[9], calculateYAxisPixels(minReturn[9]));
        positionLayerCenter("minReturn20YearsText", xAxisPos[19], calculateYAxisPixels(minReturn[19]));
        getLayer("minReturn3YearsText").translate(-19, 12);
        getLayer("minReturn6YearsText").translate(-19, 12);
        getLayer("minReturn10YearsText").translate(-19, 12);
        getLayer("minReturn20YearsText").translate(-19, 12);

// Do the expReturn dots and text
        positionLayerCenter("expReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(expReturn[2]));
        positionLayerCenter("expReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(expReturn[5]));
        positionLayerCenter("expReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(expReturn[9]));
        positionLayerCenter("expReturn20YearsDot", xAxisPos[19], calculateYAxisPixels(expReturn[19]));
        getLayer("expReturn3YearsText").textItem.contents = Math.round(expReturn[2]) + "%";
        getLayer("expReturn6YearsText").textItem.contents = Math.round(expReturn[5]) + "%";
        getLayer("expReturn10YearsText").textItem.contents = Math.round(expReturn[9]) + "%";
        getLayer("expReturn20YearsText").textItem.contents = Math.round(expReturn[19]) + "%";
        positionLayerCenter("expReturn3YearsText", xAxisPos[2], calculateYAxisPixels(expReturn[2]));
        positionLayerCenter("expReturn6YearsText", xAxisPos[5], calculateYAxisPixels(expReturn[5]));
        positionLayerCenter("expReturn10YearsText", xAxisPos[9], calculateYAxisPixels(expReturn[9]));
        positionLayerCenter("expReturn20YearsText", xAxisPos[19], calculateYAxisPixels(expReturn[19]));
        getLayer("expReturn3YearsText").translate(-19, -8);
        getLayer("expReturn6YearsText").translate(-19, -8);
        getLayer("expReturn10YearsText").translate(-19, -8);
        getLayer("expReturn20YearsText").translate(-19, -8);

// Do the maxReturn dots and text
        positionLayerCenter("maxReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(maxReturn[2]));
        positionLayerCenter("maxReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(maxReturn[5]));
        positionLayerCenter("maxReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(maxReturn[9]));
        positionLayerCenter("maxReturn20YearsDot", xAxisPos[19], calculateYAxisPixels(maxReturn[19]));
        getLayer("maxReturn3YearsText").textItem.contents = Math.round(maxReturn[2]) + "%";
        getLayer("maxReturn6YearsText").textItem.contents = Math.round(maxReturn[5]) + "%";
        getLayer("maxReturn10YearsText").textItem.contents = Math.round(maxReturn[9]) + "%";
        getLayer("maxReturn20YearsText").textItem.contents = Math.round(maxReturn[19]) + "%";
        positionLayerCenter("maxReturn3YearsText", xAxisPos[2], calculateYAxisPixels(maxReturn[2]));
        positionLayerCenter("maxReturn6YearsText", xAxisPos[5], calculateYAxisPixels(maxReturn[5]));
        positionLayerCenter("maxReturn10YearsText", xAxisPos[9], calculateYAxisPixels(maxReturn[9]));
        positionLayerCenter("maxReturn20YearsText", xAxisPos[19], calculateYAxisPixels(maxReturn[19]));
        getLayer("maxReturn3YearsText").translate(-19, -8);
        getLayer("maxReturn6YearsText").translate(-19, -8);
        getLayer("maxReturn10YearsText").translate(-19, -8);
        getLayer("maxReturn20YearsText").translate(-19, -8);

// Do the y-axis
        positionLayerCenter("yAxis0PercentText", xAxisPos[0] + 15, calculateYAxisPixels(0) + 10);
        app.activeDocument.artLayers.getByName("yAxis0PercentText").visible = false;
        if (highestValueInPercent < 90) {
            getLayer("yAxis100PercentText").textItem.contents = "50%";
            positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(50));
            positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(50));
        } else if (highestValueInPercent > 1000) {
            getLayer("yAxis100PercentText").textItem.contents = "1000%";
            positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(1000));
            positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(1000));
        } else if (highestValueInPercent > 500) {
            getLayer("yAxis100PercentText").textItem.contents = "500%";
            positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(500));
            positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(500));
        } else if (highestValueInPercent > 250) {
            getLayer("yAxis100PercentText").textItem.contents = "250%";
            positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(250));
            positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(250));
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
        positionLayerCenter("xAxis20YearLine", xAxisPos[19], graphDimensionY / 2 + 20);

// Make gradient
      if(privateBanking) {
        setForegroundColor(175, 175, 175); // light gray
        //setForegroundColor(125, 125, 125); // Same colour gray as used in PB pdf
        //setForegroundColor(140, 140, 140); // a bit lighter than used in PB pdf
      } else {
        setForegroundColor(80, 160, 215);
      }
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

            getLayer("xAxis3YearText").textItem.contents = "3 " + translationYear;
            getLayer("xAxis6YearText").textItem.contents = "6 " + translationYear;
            getLayer("xAxis10YearText").textItem.contents = "10 " + translationYear;
            getLayer("xAxis20YearText").textItem.contents = "20 " + translationYear;
            positionLayerCenter("xAxis3YearText", xAxisPos[2] - 2, 23);
            positionLayerCenter("xAxis6YearText", xAxisPos[5] - 2, 23);
            positionLayerCenter("xAxis10YearText", xAxisPos[9] - 2, 23);
            positionLayerCenter("xAxis20YearText", xAxisPos[19] - 2, 23);

            saveAsPng(destinationFolder + '/' + countries[countryCounter] + '/' + bankType,
                'RB_capdevl_l_' + graphs[graphsCounter] + '_' + imgLocale[i] + countries[countryCounter] + '.png',
                alsoSaveLargeGraphs);

        }

    }
}

function calculateYAxisPixels(valueInPercent) {
    return highestYPixels + (highestValueInPercent - valueInPercent) / (highestValueInPercent - lowestValueInPercent) * (lowestYPixels - highestYPixels);
}