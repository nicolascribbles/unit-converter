/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = (input)=> {
    var result;
    var numeralString='';
    var reggie = /[a-z]+$/i;
    var indexChar = input.search(reggie);
    if(indexChar >= 0) {
     numeralString += input.slice(0, indexChar);
    } else {
     numeralString += input;
    }
    
  var nreg =  /^([0-9]+(\.[0-9]+)?)(\/([0-9]+\.[0-9]+|[1-9]+))?$/;
  var found = nreg.exec(numeralString);
    if(found !== null) {
    var x = Number(found[1]);
    var y = found[4] ? Number(found[4]) : 1;
    result= x / y;
    } else {
    var noreg = /[^0-9]+/;
    if(noreg.test(numeralString)) {result = NaN;}
    else {result=1;}
    }
    
if (isNaN(result)) { return 'invalid number'; }
else { return Number(result.toFixed(5)); 
  }};
  
  
  
  this.getUnit = (input) =>{
    var result;
    var regg = /[a-z]+$/i;
    var stringy = '';
    var indexChar = input.search(regg);
    if(indexChar >=0){
    stringy += input.slice(indexChar);
    } else {
      result = 'invalid unit';
    }
    var unitsReg =  /^(gal|l|mi|km|lbs|kg)$/i;
    var find = unitsReg.exec(stringy);
    if(find === null) { result = 'invalid unit';}
    else { result = find[1];}
    return result.toLowerCase();
  };
  
 
  
  
  this.getReturnUnit = function(initUnit) {
    var result;
     switch (initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default:
        result = 'invalid unit';
}  
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
        switch (unit.toLowerCase()) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      default:
        result = 'invalid unit';
}
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result=Number(initNum);
   switch (initUnit.toLowerCase()) {
      case 'gal':
        result *= galToL;
        break;
      case 'l':
        result /= galToL;
        break;
      case 'lbs':
        result *= lbsToKg;
        break;
      case 'kg':
        result /= lbsToKg;
        break;
      case 'mi':
        result *= miToKm;
        break;
      case 'km':
        result /= miToKm;
        break;
      default:
        result = NaN;
    }
    if (isNaN(result)) { return 'invalid number'; }
return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
        if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      result = 'invalid number and unit';
    } else if (initNum === 'invalid number') {
      result = 'invalid number';
    } else if (initUnit === 'invalid unit') {
      result = 'invalid unit';
    } else {
      result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
}
    return result;
  };
  
}

module.exports = ConvertHandler;
