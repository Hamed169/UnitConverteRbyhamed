/*Elements*/

var pounds_element = document.getElementById("pounds");
var gram_element = document.getElementById("grams");
var kilogram_element = document.getElementById("kilogram");
var ounce_element = document.getElementById("ounce");
var stone_element = document.getElementById("stone");
var carat_element = document.getElementById("carat");
var miligram_element = document.getElementById("miligram");
var metricTonElement = document.getElementById("metric-ton");
function is_valid(element,value){
  if(value < 0){
      alert("Cannot accept negative numbers!");
      element.value = "";
      return false;

  }
  else{
      return true;
  }
}
/*from pounds to other conversions*/
function fromPoundsToOther(pounds){
  pounds = parseFloat(pounds);
  if(is_valid(pounds_element,pounds)){
  gram_element.value = (pounds / 0.0022046).toFixed(3);   //pounds to gram
  kilogram_element.value = (pounds/2.2046).toFixed(3);    //pounds to kilogram
  ounce_element.value = (pounds*16).toFixed(3);         //to ounces
  stone_element.value = (pounds*0.071429).toFixed(3);     //to stone
  carat_element.value = (pounds*2267.96).toFixed(3);
  miligram_element.value = (pounds*453592).toFixed(0);
  metricTonElement.value = (pounds*0.000453592).toFixed(5);
}
}

/*from Grams to other conversions*/
function fromGramToOthers(gram){
  gram = parseFloat(gram);
  if(is_valid(gram_element,gram)){
  pounds_element.value = (gram*0.0022046).toFixed(3);  //to pounds
  kilogram_element.value = (gram/1000).toFixed(3);  //to kg
  ounce_element.value = (gram*0.035274).toFixed(3);     //to ounce
  stone_element.value = (gram*0.00015747).toFixed(3);     //to stone
  carat_element.value = (gram*5).toFixed(3);
  miligram_element.value = (gram*1).toFixed(0);
  metricTonElement.value = (gram*0.000001).toFixed(5);
  }
}

/*from kg to other conversions*/
function fromKilogramToOther(kg){
  kg = parseFloat(kg);
  if(is_valid(kilogram_element,kg)){
  pounds_element.value = (kg*2.2046).toFixed(3); //to pounds
  gram_element.value = (kg*1000).toFixed(3);       //to grams
  ounce_element.value = (kg*35.274).toFixed(3);    //to ounces
  stone_element.value = (kg*0.1574).toFixed(3);    //to stone
  carat_element.value =  (kg*0.0283495).toFixed(3);
  miligram_element.value = (kg*1000000).toFixed(0);
  metricTonElement.value = (kg*0.001).toFixed(5);
}
}
/*from Ounces To others*/
function fromOuncesToOther(oz){
  oz = parseFloat(oz);
  if(is_valid(ounce_element,oz)){
  pounds_element.value = (oz*0.0625).toFixed(3);     //to pounds
  gram_element.value = (oz/0.035274).toFixed(3);       //to grams
  kilogram_element.value = (oz/35.274).toFixed(3);     //to kg
  stone_element.value = (oz*0.0044643).toFixed(3);       //to stone
  carat_element.value = (oz*141.7475).toFixed(3);          //to carat
  miligram_element.value = (oz*28349.5).toFixed(0);          //to miligram
  metricTonElement.value = (oz*35.273990723).toFixed(5);
}
}
/*from stone to others*/
function fromStoneToOthers(st){
  st = parseFloat(st);
  if(is_valid(stone_element,st)){
  pounds_element.value = (st*14).toFixed(3);           //to pounds
  gram_element.value = (st/0.00015747).toFixed(3);       //to grams
  kilogram_element.value = (st/0.15747).toFixed(3);        //to kg
  ounce_element.value = (st*224).toFixed(3);           //ounce
  carat_element.value = (st*31751.47).toFixed(3);        //to carat
  miligram_element.value = (st/0.00000015747).toFixed(0);      //to miligram
  metricTonElement.value = (st/157.4730).toFixed(5);
}
}
/*From carat to others */
function fromCaratToOthers(ct){
    ct = parseFloat(ct);
    if(is_valid(carat_element,ct)){
    pounds_element.value = (ct*0.0004409249).toFixed(3);       //to pounds
    gram_element.value = (ct*0.2).toFixed(3);              //to grams
    kilogram_element.value = (ct*0.0002).toFixed(3);       //to kg
    ounce_element.value = (ct*0.0070547981).toFixed(3);  //to ounce
    stone_element.value = (ct / 31751.47).toFixed(3);        //to stone
    miligram_element.value = (ct*200).toFixed(0);      //to mg
    metricTonElement.value = (ct*2.E-7).toFixed(5);
  }
}
/*from miligram to other conversions*/
function fromMiligramToOthers(mg){
  mg = parseFloat(mg);
  if(is_valid(miligram_element,mg)){
  pounds_element.value = (mg*0.0000022046).toFixed(3);     //to pounds
  gram_element.value = (mg*0.001).toFixed(3);          //to grams
  kilogram_element.value = (mg*0.000001).toFixed(3);       //to kg
  ounce_element.value = (mg*0.000035274).toFixed(3);     //to ounce
  stone_element.value = (mg * 0.00000015747).toFixed(3);     //to stone
  carat_element.value = (mg*0.005).toFixed(3);           //to carat
  metricTonElement.value = (mg*9.999999999E-10).toFixed(5);
}
}
function fromMetricTonToOthers(mt){
  mt = parseFloat(mt);
  if(is_valid(metricTonElement,mt)){
  pounds_element.value = (mt*2204.6244202).toFixed(3);     //to pounds
  gram_element.value = (mt*1000000).toFixed(3);          //to grams
  kilogram_element.value = (mt*1000).toFixed(3);       //to kg
  ounce_element.value = (mt*35273.990723).toFixed(3);     //to ounce
  stone_element.value = (mt*157.473).toFixed(3);     //to stone
  carat_element.value = (mt*5000000).toFixed(3);           //to carat
  miligram_element.value = (mt*1000000000).toFixed(0);
}
}
