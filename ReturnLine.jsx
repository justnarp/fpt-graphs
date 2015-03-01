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
#include "functions/get-layer.jsx";
#include "functions/make-layer.jsx";
#include "functions/gradient-loop.jsx";
#include "functions/copy-paste-layer-style.jsx";
#include "functions/position-layer-center.jsx";
#include "functions/delete-layer.jsx";
#include "functions/rename-layer.jsx";
#include "functions/duplicate-layer.jsx";
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
            exit;
        }
    }
}

function calculateYAxisPixels(valueInPercent) {
    return highestYPixels + (highestValueInPercent - valueInPercent) / (highestValueInPercent - lowestValueInPercent) * (lowestYPixels - highestYPixels);
}
