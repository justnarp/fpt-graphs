
// Setup
var destinationFolder = "C:/temp/fpt-graphs/2016/v1";
var thisPsdFolder = "C:/Repos/fpt-graphs/psd/2015";
//var destinationFolder = "/Users/MLP/Repos/graphs/test";
//var thisPsdFolder = "/Users/MLP/Repos/fpt-graphs/psd/2015";

// Country specific data
//#include 'values/2015/private-banking/se/histdev.jsx';
//#include 'values/2015/private-banking/se/capdev.jsx';
/*
#include 'values/2015/retail-banking/se/histdev.jsx';
#include 'values/2015/retail-banking/se/capdev.jsx';
#include 'values/2015/retail-banking/fi/histdev.jsx';
#include 'values/2015/retail-banking/fi/capdev.jsx';
#include 'values/2015/retail-banking/dk/capdev.jsx';
#include 'values/2015/retail-banking/dk/histdev.jsx';
#include 'values/2015/retail-banking/no/capdev.jsx';
#include 'values/2015/retail-banking/no/histdev.jsx';
*/

#include 'values/2016.js';

// These scripts will run when this file is executed from PS
#include 'scripts/histdev_s.jsx';
//#include 'scripts/capdevb_s.jsx';
//#include 'scripts/capdevb_l.jsx';
//#include 'scripts/capdevl_l.jsx';
//#include 'scripts/capdevl_s.jsx';

// Needed functions (leave as is)
#include 'functions/functions.jsx';
