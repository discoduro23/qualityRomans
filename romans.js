// Constants for the literals
const INVALID_ROMAN = 'Please enter a valid roman';
const INVALID_INTEGER = 'Please enter a valid integer';
const OUT_OF_RANGE = 'Out of range (1-3999)';


function init() { 
  
  // Load elements once to avoid repetition on every invocation
  var modeCheckbox = document.querySelector('input[type=\'checkbox\']');
  var header = document.querySelector('h1');
  var convertButton = document.querySelector('.convert-button');
  var outputArea = document.querySelector('.convert-output');
  var inputArea = document.querySelector('input[type=\'text\']');


  modeCheckbox.addEventListener('change', function(e) {
    header.innerHTML = getModeTitle(e.target.checked);
  });

  const getModeTitle = function(integerToRoman) {
    return integerToRoman ? 'Integer To Roman' : 'Roman To Integer';
  };

  // Now, the convertion operation does only perform the operation. 
  // Things we have extracted to this listener: 
  // 1 - Read the UI inputs (inputArea.value)
  // 2 - Write the UI output (outputArea.innerHTML)
  // 3 - Show error messages
  // This is cleaner and also removes code duplications
  convertButton.addEventListener('click', function() {
    var inputValue = inputArea.value;
    var convertion = modeCheckbox.checked ? convertIntegerToRoman(inputValue) : convertRomanToInteger(inputValue);
    if (convertion.result) {
      outputArea.innerHTML = convertion.value;
    } else {
      alert(convertion.message);
    }
  });
}

const lessThan9 = function(num, obj) {
  if (num === 9) {
    return obj[1] + obj[10];
  } else if (num >= 5 && num < 9) {
    return obj[5] + obj[1].repeat(num % 5);
  } else if (num === 4) {
    return obj[1] + obj[5];
  } else {
    return obj[1].repeat(num);
  }
};

const greaterThan9 = function(num, obj) {
  if (num >= 10 && num < 50) {
    if (num === 10) {
      return obj[10];
    }

    if (num === 40) {
      return obj[10] + obj[50];
    } else {
      return obj[10].repeat(parseInt(num / 10));
    }
  } else if (num >= 50 && num < 100) {
    if (num === 50) {
      return obj[50];
    }

    if (num === 90) {
      return obj[10] + obj[100];
    } else {
      return obj[50] + obj[10].repeat(parseInt((num - 50) / 10));
    }
  } else if (num >= 100 && num < 500) {
    if (num === 100) {
      return obj[100];
    }

    if (num === 400) {
      return obj[100] + obj[500];
    } else {
      return obj[100].repeat(parseInt(num / 100));
    }
  } else if (num >= 500 && num < 1000) {
    if (num === 500) {
      return obj[500];
    }

    if (num === 900) {
      return obj[100] + obj[1000];
    } else {
      return obj[500] + obj[100].repeat(parseInt(num - 500) / 100);
    }
  } else if (num >= 1000 && num < 5000) {
    if (num === 1000) {
      return obj[1000];
    }
    return obj[1000].repeat(parseInt(num / 1000));
  }
};

if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    // Could we try:
    // return Array(count + 1).join(this);
    return rpt;
  };
}