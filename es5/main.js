"use strict";

function sum() {
  var result = 0;

  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  numbers.forEach(function (number) {
    result += number;
  });

  console.log(result);
}

sum(1, 2, 3, 4, 5); // 15