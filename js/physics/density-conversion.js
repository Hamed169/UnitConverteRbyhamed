/*Elements*/

var pounds_element = document.getElementById("pounds"); //gramslitter
var gram_element = document.getElementById("grams"); //grams/milliliter
var kilogram_element = document.getElementById("kilogram"); //kilograms/cubic meters
var ounce_element = document.getElementById("oz"); // kilograms/liter
var stone_element = document.getElementById("st"); //ounces/cubic inch
var carat_element = document.getElementById("ct"); //o/galon
var miligram_element = document.getElementById("mg"); // p/cubic inch
var metricTonElement = document.getElementById("mt"); //p/cobic foot
var galoonElement = document.getElementById("gallon"); //p/gallon
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
  gram_element.value = (pounds*0.001).toFixed(4);   //pounds to gram
  kilogram_element.value = (pounds).toFixed(3);    //pounds to kilogram
  ounce_element.value = (pounds*0.001).toFixed(3);         //to ounces
  stone_element.value = (pounds*0.000578037).toFixed(6);     //to stone
  carat_element.value = (pounds*0.133526471).toFixed(3);
  miligram_element.value = (pounds*0.000036127).toFixed(6);
  metricTonElement.value = (pounds*0.062427961).toFixed(6);
  galoonElement.value = (pounds*0.008345404).toFixed(6);
}
}

/*from Grams to other conversions*/
function fromGramToOthers(grams){
  grams = parseFloat(grams);
  if(is_valid(gram_element,grams)){
  pounds_element.value = (grams*1000).toFixed(3);  //to pounds
  kilogram_element.value = (grams*1000).toFixed(3);  //to kg
  ounce_element.value = (grams).toFixed(3);     //to ounce
  stone_element.value = (grams*0.5780366721308).toFixed(6);     //to stone
  carat_element.value = (grams*133.526466).toFixed(3);
  miligram_element.value = (grams*0.0361272).toFixed(6);
  metricTonElement.value = (grams*62.427962).toFixed(6);
  galoonelement.value = (grams*8.3454044).toFixed(3);
  }
}

/*from kg to other conversions*/
function fromKilogramToOther(kilogram){
  kilogram = parseFloat(kilogram);
  if(is_valid(kilogram_element,kilogram)){
  pounds_element.value = (kilogram).toFixed(3); //to pounds
  gram_element.value = (kilogram*0.001).toFixed(3);       //to grams
  ounce_element.value = (kilogram*0.001).toFixed(6);    //to ounces
  stone_element.value = (kilogram*0.0005780366).toFixed(6);    //to stone
  carat_element.value =  (kilogram*0.133526466).toFixed(3);
  miligram_element.value = (kilogram*0.0000361272929).toFixed(6);
  metricTonElement.value = (kilogram*0.062427962).toFixed(6);
  galoonelement.value = (kilogram*0.00834540447).toFixed(3);
}
}
/*from Ounces To others*/
function fromOuncesToOther(oz){
  oz = parseFloat(oz);
  if(is_valid(ounce_element,oz)){
  pounds_element.value = (oz*1000).toFixed(3);     //to pounds
  gram_element.value = (oz).toFixed(3);       //to grams
  kilogram_element.value = (oz*1000).toFixed(3);   //to kg
  stone_element.value = (oz*0.5780366).toFixed(6);      //to stone
  carat_element.value = (oz*133.526).toFixed(3);      //to carat
  miligram_element.value = (oz*0.03612729).toFixed(6);   //to miligram
  metricTonElement.value = (oz*62.427962).toFixed(6);
  galoonelement.value = (oz*8.345044).toFixed(3);
}
}
/*from stone to others*/
function fromStoneToOthers(st){
  st = parseFloat(st);
  if(is_valid(stone_element,st)){
  pounds_element.value = (st*1729.99404).toFixed(3);     //to pounds
  gram_element.value = (st*1.72999404).toFixed(3);       //to grams
  kilogram_element.value = (st*1729.99404).toFixed(3);   //to kg
  ounce_element.value = (st*1.72999404).toFixed(6);      //ounce
  carat_element.value = (st*230.9999).toFixed(3);      //to carat
  miligram_element.value = (st*0.06250000).toFixed(6);   //to miligram
  metricTonElement.value = (st*108.0000).toFixed(6);
  galoonelement.value = (st*14.4375000).toFixed(3);
}
}
/*From carat to others */
function fromCaratToOthers(ct){
    ct = parseFloat(ct);
    if(is_valid(carat_element,ct)){
    pounds_element.value = (ct*7.489152).toFixed(3);     //to pounds
    gram_element.value = (ct*0.00748915).toFixed(3);       //to grams
    kilogram_element.value = (ct*7.489152).toFixed(3);   //to kg
    ounce_element.value = (ct*0.00748915).toFixed(6);      //to ounce
    stone_element.value = (ct*0.004329004499).toFixed(3);      //to stone
    miligram_element.value = (ct*0.000270562788).toFixed(6);   //to mg
    metricTonElement.value = (ct*0.467532496).toFixed(6);
    galoonelement.value = (ct*0.6250000).toFixed(3);
  }
}
/*from miligram to other conversions*/
function fromMiligramToOthers(mg){
  mg = parseFloat(mg);
  if(is_valid(miligram_element,mg)){
  pounds_element.value = (mg*27679.904).toFixed(3);     //to pounds
  gram_element.value = (mg*27.649904).toFixed(3);       //to grams
  kilogram_element.value = (mg*27679.904).toFixed(3);   //to kg
  ounce_element.value = (mg*27.679904).toFixed(3);      //to ounce
  stone_element.value = (mg*15.9999).toFixed(6);      //to stone
  carat_element.value = (mg*3695.9997).toFixed(3);      //to carat
  metricTonElement.value = (mg*1727.9999).toFixed(6);
  galoonelement.value = (mg*230.9999).toFixed(3);
}
}
function fromMetricTonToOthers(mt){
  mt = parseFloat(mt);
  if(is_valid(metricTonElement,mt)){
  pounds_element.value = (mt*16.0184).toFixed(3);     //to pounds
  gram_element.value = (mt*0.016018463).toFixed(3);       //to grams
  kilogram_element.value = (mt*16.01846).toFixed(3);   //to kg
  ounce_element.value = (mt*0.01601846).toFixed(3);      //to ounce
  stone_element.value = (mt*0.00925925904).toFixed(6);      //to stone
  carat_element.value = (mt*2.138888).toFixed(3);      //to carat
  miligram_element.value = (mt*0.000578703).toFixed(6);
  galoonelement.value = (mt*0.1336805).toFixed(3);
}
}
function fromGallonToOthers(gallon){
  gallon = parseFloat(gallon);
  if(is_valid(gallonElement,gallon)){
  pounds_element.value = (gallon*119.826427).toFixed(3);    //to pounds
  gram_element.value = (gallon*0.119826).toFixed(3);      //to grams
  kilogram_element.value = (gallon*119.826).toFixed(3);  //to kg
  ounce_element.value = (gallon*0.1198264).toFixed(3);     //to ounce
  stone_element.value = (gallon*0.06926406).toFixed(6);     //to stone
  carat_element.value = (gallon*15.9999).toFixed(3);     //to carat
  miligram_element.value = (gallon*0.004329).toFixed(6);
  metricTonElement.value = (gallon*7.4805196).toFixed(6);
}
}
