'use strict'

var xlsx = require('node-xlsx'),
    fs = require('fs');

var xlsData = {
  'RBDK': {
    'retail': xlsx.parse('excel/2016/dk/RB DK graphs data_NEW.xlsx')
  }
};

// get data from excel
for (var country in xlsData) {
  xlsData[country].output = xlsData[country].retail.filter(function (o) {
    return o.name == 'RB data'
  });
  xlsData[country].output = xlsData[country].output[0].data.filter(function (o) {
    return o.length;
  });
}

function createFileOutput() {
  var countries = ['RBDK'];
  var models = ['con', 'mod', 'bal', 'gro', 'rf', 'eo', 'fio'];
  var modelData = ['excelLineArray', 'maxLoss', 'maxLossPositionMonth', 'maxLossPositionYear', 'maxReturn', 'maxReturnPositionMonth', 'maxReturnPositionYear'];

  var obj = {};

  countries.forEach(function (country) {
    obj[country] = {};
    models.forEach(function (model) {
      obj[country][model] = {};
      modelData.forEach(function (d) {
        obj[country][model][d] = '';
      })
    });

    var linesInExcel = [
      {
        'string': 'Conservative',
        'short': 'con',
        'line': 0
      },
      {
        'string': 'Moderate',
        'short': 'mod',
        'line': 6
      },
      {
        'string': 'Balanced',
        'short': 'bal',
        'line': 12
      },
      {
        'string': 'Growth',
        'short': 'gro',
        'line': 18
      },
      {
        'string': 'Return Focus',
        'short': 'rf',
        'line': 24
      }
    ];

    linesInExcel.forEach(function (o) {
      if (xlsData[country].output[o.line][0].indexOf(o.string) > -1) {
        xlsData[country].output[o.line + 2].shift();
        obj[country][o.short].excelLineArray = xlsData[country].output[o.line + 2];
        obj[country][o.short].maxLoss = xlsData[country].output[o.line + 4][0] * 100;
        obj[country][o.short].maxLossPositionMonth = getMonth(xlsData[country].output[o.line + 4][1].split(' ')[0]);
        obj[country][o.short].maxLossPositionYear = parseInt(20 + xlsData[country].output[o.line + 4][1].split(' ')[1]);
        obj[country][o.short].maxReturn = xlsData[country].output[o.line + 5][0] * 100;
        obj[country][o.short].maxReturnPositionMonth = getMonth(xlsData[country].output[o.line + 5][1].split(' ')[0]);
        obj[country][o.short].maxReturnPositionYear = parseInt(20 + xlsData[country].output[o.line + 5][1].split(' ')[1]);
      }
    });

  });

  return obj;
}

function getMonth(month) {
  return "JanFebMarAprMajJunJulAugSepOktNovDec".indexOf(month) / 3 + 1;
}

fs.writeFileSync('./values/2016.js', 'var excelValues = ' + JSON.stringify(createFileOutput(), null, 2) + ';', 'utf-8');
