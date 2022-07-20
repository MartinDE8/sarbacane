(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/public/assets/scripts/main"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\laragon\\www\\sarbacane\\node_modules\\@babel\\runtime\\regenerator\\index.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\laragon\\www\\sarbacane\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./resources/scripts/main.js":
/*!***********************************!*\
  !*** ./resources/scripts/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multi_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi/form.js */ "./resources/scripts/multi/form.js");


/***/ }),

/***/ "./resources/scripts/multi/form.js":
/*!*****************************************!*\
  !*** ./resources/scripts/multi/form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]; //Check if dom is loaded


function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
} //If it's ready we start the scripts


ready(function (_) {
  var inputs = document.querySelectorAll('input');
  var button = document.querySelector('button'); //Create function to check input validity

  function isInputsCheckValid(formInputs) {
    var validInputs = true;

    if (formInputs.length) {
      formInputs.forEach(function (formInput) {
        if (!formInput.checkValidity()) {
          validInputs = false;
        }
      });
    }

    return validInputs;
  } //Connect to api with axios & make form button subittable


  if (inputs.length && button) {
    var inputsValide = false;
    var inputValue = false;

    if (!isInputsCheckValid(inputs)) {
      button.disabled = true;
    }

    inputs.forEach(function (input) {
      input.addEventListener('keyup', function () {
        if (input.value !== '') {
          if (input.getAttribute('name') === 'city') {
            autocomplete(input, "https://geo.api.gouv.fr/communes?nom=" + input.value + "&fields=departement&boost=population&limit=5");
          }

          if (input.getAttribute('name') === 'siren') {
            autocompleteNoApi(input, ["124574451", "123478541", "214587459", "32546985", "12569325", "145852149", "325415874", "325417856", "145874521", "145875216", "147854125", "254789632", "278964158"]);
          }

          if (input.getAttribute('name') === 'naf') {
            autocompleteNoApi(input, ["1013A", "1013B", "1013C", "2013A", "2013B", "2013C", "3013A", "3013B", "3013C", "4013A", "4013B", "4013C", "5013A", "5013B", "5013C", "6013A", "6013B", "6013C", "7013A", "7013B", "7013C", "8013A", "8013B", "8013C", "9013A", "9013B", "9013C"]);
          }

          inputValue = input.value;

          if (isInputsCheckValid(inputs)) {
            inputsValide = true;
            button.disabled = false;
          } else {
            button.disabled = true;
          }
        } else if (input.value === '') {
          inputsValide = false;

          if (!isInputsCheckValid(inputs)) {
            button.disabled = true;
          }
        }
      });
    });
  }
}); //Autocomplete functions with api access

function autocomplete(_x, _x2) {
  return _autocomplete.apply(this, arguments);
} //Autocomplete functions with no api (array data)


function _autocomplete() {
  _autocomplete = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inp, arr) {
    var addActive, removeActive, closeAllLists;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            closeAllLists = function _closeAllLists(elmnt) {
              /*close all autocomplete lists in the document,
              except the one passed as an argument:*/
              var x = document.getElementsByClassName("autocomplete-items");

              for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                  x[i].parentNode.removeChild(x[i]);
                }
              }
            };

            removeActive = function _removeActive(x) {
              /*a function to remove the "active" class from all autocomplete items:*/
              for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
              }
            };

            addActive = function _addActive(x) {
              /*a function to classify an item as "active":*/
              if (!x) return false;
              /*start by removing the "active" class on all items:*/

              removeActive(x);
              if (currentFocus >= x.length) currentFocus = 0;
              if (currentFocus < 0) currentFocus = x.length - 1;
              /*add class "autocomplete-active":*/

              x[currentFocus].classList.add("autocomplete-active");
            };

            axios({
              method: 'get',
              url: arr
            }).then(function (response) {
              var items = [];

              if (response.data.length) {
                response.data.forEach(function (r) {
                  items.push(r.nom);
                  var currentFocus;
                  inp.addEventListener("input", function (e) {
                    var a,
                        b,
                        i,
                        val = this.value;
                    closeAllLists();

                    if (!val) {
                      return false;
                    }

                    currentFocus = -1;
                    a = document.createElement("ul");
                    a.setAttribute("id", this.id + "autocomplete-list");
                    a.setAttribute("class", "autocomplete-items");
                    this.parentNode.appendChild(a);

                    for (i = 0; i < items.length; i++) {
                      if (items[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        b = document.createElement("li");
                        b.innerHTML = "<strong>" + items[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += items[i].substr(val.length);
                        b.innerHTML += "<input type='hidden' value='" + items[i] + "'>";
                        b.addEventListener("click", function (e) {
                          inp.value = this.getElementsByTagName("input")[0].value;
                          closeAllLists();
                        });
                        a.appendChild(b);
                      }
                    }
                  });
                  /*execute a function presses a key on the keyboard:*/

                  inp.addEventListener("keydown", function (e) {
                    var x = document.getElementById(this.id + "autocomplete-list");
                    if (x) x = x.getElementsByTagName("div");

                    if (e.keyCode == 40) {
                      /*If the arrow DOWN key is pressed,
                      increase the currentFocus variable:*/
                      currentFocus++;
                      /*and and make the current item more visible:*/

                      addActive(x);
                    } else if (e.keyCode == 38) {
                      //up

                      /*If the arrow UP key is pressed,
                      decrease the currentFocus variable:*/
                      currentFocus--;
                      /*and and make the current item more visible:*/

                      addActive(x);
                    } else if (e.keyCode == 13) {
                      /*If the ENTER key is pressed, prevent the form from being submitted,*/
                      e.preventDefault();

                      if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                      }
                    }
                  });
                });
              }
            }); //execute a function when someone clicks in the document:

            document.addEventListener("click", function (e) {
              closeAllLists(e.target);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _autocomplete.apply(this, arguments);
}

function autocompleteNoApi(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/

  inp.addEventListener("input", function (e) {
    var a,
        b,
        i,
        val = this.value;
    /*close any already open lists of autocompleted values*/

    closeAllLists();

    if (!val) {
      return false;
    }

    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/

    a = document.createElement("ul");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/

    this.parentNode.appendChild(a);
    /*for each item in the array...*/

    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("li");
        /*make the matching letters bold:*/

        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/

        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");

    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/

      addActive(x);
    } else if (e.keyCode == 38) {
      //up

      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/

      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();

      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/

    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");

    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/


  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\laragon\\www\\sarbacane\\node_modules\\css-loader\\lib\\css-base.js'\n    at C:\\laragon\\www\\sarbacane\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\laragon\\www\\sarbacane\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\laragon\\www\\sarbacane\\node_modules\\loader-runner\\lib\\LoaderRunner.js:203:19\n    at C:\\laragon\\www\\sarbacane\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./resources/scripts/main.js ./resources/styles/app.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\sarbacane\resources\scripts\main.js */"./resources/scripts/main.js");
module.exports = __webpack_require__(/*! C:\laragon\www\sarbacane\resources\styles\app.scss */"./resources/styles/app.scss");


/***/ })

},[[0,"/public/assets/scripts/manifest"]]]);