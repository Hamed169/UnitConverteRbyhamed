var meter_element = document.getElementById("meter");
var km_element = document.getElementById("kilometer");
var cm_element = document.getElementById("centimeter");
var milimeter_element = document.getElementById("milimeter");
var micrometer_element = document.getElementById("micrometer");
var nm_element = document.getElementById("nanometer");
var mile_element = document.getElementById("miles");
var yard_element = document.getElementById("yard");
var foot_element = document.getElementById("foot");
var inch_element = document.getElementById("inch");
var LY_element  = document.getElementById("light-year");
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


function fromMeterToOther(meter){
    meter = parseFloat(meter);
    if(is_valid(meter_element,meter)){
    km_element.value = (meter*0.001).toFixed(3);
    cm_element.value = (meter*100).toFixed(0);
    milimeter_element.value = (meter*1000).toFixed(0);
    micrometer_element.value = (meter*1000000).toFixed(0);
    nm_element.value = (meter*1000000000).toFixed(0);
    mile_element.value = (meter*0.0006213689).toFixed(3);
    yard_element.value = (meter*1.0936132983).toFixed(3);
    foot_element.value  = (meter*3.280839895).toFixed(3);
    inch_element.value = (meter*39.37007874).toFixed(3);
    LY_element.value = (meter*1.057008707E-16);
    }
}

function fromKilometerToOthers(km){
        km = parseFloat(km);
        if(is_valid(km_element,km)){
        meter_element.value = (km*1000).toFixed(1);
        cm_element.value = (km*100000).toFixed(0);
        milimeter_element.value = (km*1000000).toFixed(0);
        micrometer_element.value = (km*1000000000).toFixed(0);
        nm_element.value = (km*1000000000000).toFixed(0);
        mile_element.value = (km*0.6213688756).toFixed(3);
        yard_element.value = (km*1093.6132983).toFixed(3);
        foot_element.value = (km*3280.839895).toFixed(3);
        inch_element.value = (km*39370.07874).toFixed(3);
        LY_element.value = (km*1.057008707E-13);
}
}
function fromCentimeterToOther(cm){
    cm = parseFloat(cm);
    if(is_valid(cm_element,cm)){
    meter_element.value = (cm*0.01).toFixed(1);
    km_element.value = (cm*0.00001).toFixed(3);
    milimeter_element.value = (cm*10).toFixed(0);
    micrometer_element.value = (cm*10000).toFixed(0);
    nm_element.value = (cm*10000000).toFixed(0);
    mile_element.value = (cm*0.0000062137).toFixed(3);
    yard_element.value = (cm*0.010936133).toFixed(3);
    foot_element.value = (cm*0.032808399).toFixed(3);
    inch_element.value = (cm*0.3937007874).toFixed(3);
    LY_element.value = (cm*1.057008707E-18);
}
}
function fromMilimeterToOther(mm){
    mm = parseFloat(mm);
    if(is_valid(milimeter_element,mm)){
    meter_element.value = (mm*0.001).toFixed(1);
    km_element.value = (mm*0.000001).toFixed(3);
    cm_element.value = (mm*0.1).toFixed(0);
    micrometer_element.value = (mm*1000).toFixed(0);
    nm_element.value = (mm*1000000).toFixed(0);
    mile_element.value = (mm*6.213688756E-7).toFixed(3);
    yard_element.value = (mm*0.0010936133).toFixed(3);
    foot_element.value = (mm*0.0032808399).toFixed(3);
    inch_element.value = (mm*0.0393700787).toFixed(3);
    LY_element.value = (mm*1.057008707E-19);
}
}
function fromMicrometerToOthers(mm){
    mm = parseFloat(mm);
    if(is_valid(micrometer_element,mm)){
    meter_element.value = (mm*0.000001).toFixed(1);
    km_element.value = (mm*9.999999999E-10).toFixed(3);
    cm_element.value = (mm*0.0001).toFixed(0);
    milimeter_element.value = (mm*0.001).toFixed(0);
    nm_element.value = (mm*1000).toFixed(0);
    mile_element.value = (mm*6.213688756E-10).toFixed(3);
    yard_element.value = (mm*0.0000010936).toFixed(3);
    foot_element.value = (mm*0.0000032808).toFixed(3);
    inch_element.value = (mm*0.0000393701).toFixed(3);
    LY_element.value = (mm*1.057008707E-22);
}
}
function fromNanometerToOthers(nm){
    nm = parseFloat(nm);
    if(is_valid(nm_element,nm)){
    meter_element.value = (nm*1.E-9).toFixed(1);
    km_element.value = (nm*1.E-12).toFixed(3);
    cm_element.value = (nm*1.E-7).toFixed(0);
    milimeter_element.value = (nm*0.000001).toFixed(0);
    micrometer_element.value = (nm*0.001).toFixed(0);
    mile_element.value = (nm*6.213688756E-13).toFixed(3);
    yard_element.value = (nm*1.093613298E-9).toFixed(3);
    foot_element.value = (nm*3.280839895E-9).toFixed(3);
    inch_element.value = (nm*3.937007874E-8).toFixed(3);
    LY_element.value = (nm*1.057008707E-25);
}
}
function fromMilesToOthers(mile){
    mile = parseFloat(mile);
    if(is_valid(mile_element,mile)){
    meter_element.value = (mile*1609.35).toFixed(1);
    km_element.value = (mile *1.60935).toFixed(3);
    cm_element.value = (mile*160935).toFixed(0);
    milimeter_element.value = (mile*1609350).toFixed(0);
    micrometer_element.value = (mile*1609350000).toFixed(0);
    nm_element.value = (mile * 1609350000000).toFixed(0);
    yard_element.value = (mile*1760.0065617).toFixed(3);
    foot_element.value = (mile*5280.019685).toFixed(3);
    inch_element.value = (mile*63360.23622).toFixed(3);
    LY_element.value = (mile*1.701096963E-13);
}
}
function fromYardToOthers(yard){
    yard = parseFloat(yard);
    if(is_valid(yard_element,yard)){
    meter_element.value = (yard*0.9144).toFixed(1);
    km_element.value = (yard * 0.0009144).toFixed(3);
    cm_element.value = (yard* 91.44).toFixed(0);
    milimeter_element.value = (yard*914.4).toFixed(0);
    micrometer_element.value = (yard*914400).toFixed(0);
    nm_element.value = (yard * 914400000).toFixed(0);
    mile_element.value = (yard* 0.0005681797).toFixed(3);
    foot_element.value = (yard*3).toFixed(3);
    inch_element.value = (yard*36).toFixed(3);
    LY_element.value = (yard*9.665287622E-17);
}
}
function fromFootToOthers(foot){
    foot = parseFloat(foot);
    if(is_valid(foot_element,foot)){
    meter_element.value = (foot* 0.3048).toFixed(1);
    km_element.value = (foot * 0.0003048).toFixed(3);
    cm_element.value = (foot* 30.48).toFixed(0);
    milimeter_element.value = (foot*304.8 ).toFixed(0);
    micrometer_element.value = (foot*304800).toFixed(0);
    nm_element.value = (foot *304800000).toFixed(0);
    mile_element.value = (foot*0.0001893932 ).toFixed(3);
    yard_element.value = (foot *0.3333333333 ).toFixed(3);
    inch_element.value = (foot*12).toFixed(3);
    LY_element.value = (foot*3.22176254E-17);
}
}
function fromInchToOthers(inch){
    inch = parseFloat(inch);
    if(is_valid(inch_element,inch)){
    meter_element.value = (inch*0.0254).toFixed(1) ;
    km_element.value = (inch * 0.0000254).toFixed(3);
    cm_element.value = (inch* 2.54).toFixed(0);
    milimeter_element.value = (inch* 25.4).toFixed(0);
    micrometer_element.value = (inch* 25400).toFixed(0);
    nm_element.value = (inch * 25400000).toFixed(0);
    mile_element.value = (inch* 0.0000157828).toFixed(3);
    yard_element.value = (inch * 0.0277777778).toFixed(3);
    foot_element.value = (inch* 0.0833333333).toFixed(3);
    LY_element.value = (inch*2.684802117E-18);
}
}
function fromLYToOthers(ly){
    ly = parseFloat(ly);
    if(is_valid(LY_element,ly)){
    meter_element.value = (ly* 9460660000000000).toFixed(1);
    km_element.value = (ly * 9460660000000).toFixed(3);
    cm_element.value = (ly* 946066000000000000).toFixed(0);
    milimeter_element.value = (ly * 9460660000000000000).toFixed(0);
    micrometer_element.value = (ly* 9.46066E+21).toFixed(0);
    nm_element.value = (ly * 9.460659999E+24).toFixed(0);
    mile_element.value = (ly* 5878559666946).toFixed(3);
    yard_element.value = (ly * 10346303587051618).toFixed(3);
    foot_element.value = (ly* 31038910761154856).toFixed(3);
    inch_element.value = (ly* 372466929133858300).toFixed(3);
}
}