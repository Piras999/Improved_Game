/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../scss/stye.scss */ "./scss/stye.scss");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Wszystko działa!");
    var score = document.querySelector("#score div strong");
    var xxx = document.querySelector(".endWindow h3");
    var levelDiv = document.querySelector("#level div strong");

    //constructors
    function Furry() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
        this.timing = 300;
        this.life = 3;
    }

    function Coin() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    function Bomb() {
        this.x = 99;
        this.y = 0;
        this.direction = "left";
    }

    ///////////////////////////////////CAŁA GRA!!!!!!!!!!!//////////////////////////////////////////

    function Game() {
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.bomb = new Bomb();
        this.index = function (x, y) {
            return x + y * 10;
        };

        var furryChracter = document.querySelector(".furry");
        var pipBoyChracter = document.querySelector(".pip-boy");
        var gokuChracter = document.querySelector(".goku");

        //Zaznaczanie swojego Avatara!!!

        var charactersMenu = document.querySelector(".charactersMenu").children;

        var _loop = function _loop(i) {
            charactersMenu[i].addEventListener("click", function () {
                for (var j = 0; j < charactersMenu.length; j++) {
                    if (charactersMenu[j].className.indexOf("choose") > -1) {
                        charactersMenu[j].classList.remove("choose");
                    }
                }
                this.classList.add("choose");

                //Prototyp znikania opisu starego awatara! działa ale do ulepszenia!!

                if (charactersMenu[i].classList.contains("furry")) {
                    document.querySelector(".furry-info").classList.remove("invisible");
                    document.querySelector(".pip-boy-info").classList.add("invisible");
                    document.querySelector(".goku-info").classList.add("invisible");
                } else if (charactersMenu[i].classList.contains("pip-boy")) {
                    document.querySelector(".pip-boy-info").classList.remove("invisible");
                    document.querySelector(".furry-info").classList.add("invisible");
                    document.querySelector(".goku-info").classList.add("invisible");
                } else if (charactersMenu[i].classList.contains("goku")) {
                    document.querySelector(".goku-info").classList.remove("invisible");
                    document.querySelector(".furry-info").classList.add("invisible");
                    document.querySelector(".pip-boy-info").classList.add("invisible");
                }
            });
        };

        for (var i = 0; i < charactersMenu.length; i++) {
            _loop(i);
        }

        this.showFurry = function () {
            if (furryChracter.className.indexOf("choose") > -1) {
                this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
            } else if (pipBoyChracter.className.indexOf("choose") > -1) {
                this.board[this.index(this.furry.x, this.furry.y)].classList.add('pip-boy');
            } else if (gokuChracter.className.indexOf("choose") > -1) {
                this.board[this.index(this.furry.x, this.furry.y)].classList.add('goku');
            }
        };

        //Należy uważać i nie dodawać już nigdzie w index.html klasy  furry!!! bo sie skopie!! Dodawać np furryBackground i bedzie git!
        //To jest zrobione dobrze i diała, nie ruszać!

        this.hideVisibleFury = function () {
            if (furryChracter.className.indexOf("choose") > -1) {
                document.querySelector(".furry").classList.remove("furry");
            } else if (pipBoyChracter.className.indexOf("choose") > -1) {
                document.querySelector(".pip-boy").classList.remove("pip-boy");
            } else if (gokuChracter.className.indexOf("choose") > -1) {
                document.querySelector(".goku").classList.remove("goku");
            }
        };

        this.hideVisibleBomb = function () {
            document.querySelector(".bomb").classList.remove("bomb");
        };

        this.showCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        };

        this.showBomb = function () {
            this.board[this.index(this.bomb.x, this.bomb.y)].classList.add('bomb');
        };

        this.startGame = function () {
            var self = this;

            this.setBombInterval = setInterval(function () {
                self.hideVisibleBomb();
                self.moveBomb();
            }, 300);

            this.idSetinterval = setInterval(function () {
                self.hideVisibleFury();
                self.moveFury();
            }, self.furry.timing);
            function stopInt() {
                clearInterval(this.idSetinterval);
            }
            if (score.innerText > 1 && score.innerText < 3) {
                stopInt();
            }
        };

        this.iterStupid = function () {
            var self = this;
            if (score.innerText > 1 && score.innerText < 3 && self.furry.timing !== 250) {
                self.furry.timing = 250;
                console.log(self.furry.timing);
                self.startGame();
            }
        };

        //Move Furry! Poruszanie w lewo i w prawo itp.
        this.moveFury = function () {
            if (this.furry.direction === "right") {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === "left") {
                this.furry.x = this.furry.x - 1;
            } else if (this.furry.direction === "top") {
                this.furry.y = this.furry.y + 1;
            } else if (this.furry.direction === "bottom") {
                this.furry.y = this.furry.y - 1;
            }

            this.gameOver();
            this.showFurry();
            this.checkCoinCollision();
            this.checkBombCollision();
        };

        this.moveBomb = function () {
            if (this.bomb.direction === "left") {
                this.bomb.x = this.bomb.x - 1;
                if (this.bomb.x === 1) {
                    this.bomb.x = 99;
                }
            }
            this.showBomb();
            this.checkBombCollision();
            this.gameOver();
        };

        //change Furry move direction
        this.turnFury = function (event) {
            switch (event.which) {
                case 37:
                    this.furry.direction = 'left';
                    break;
                case 38:
                    this.furry.direction = 'bottom';
                    break;
                case 39:
                    this.furry.direction = 'right';
                    break;
                case 40:
                    this.furry.direction = 'top';
            }
        };

        var newScore = 0;
        //można zrobić takie samo checkcollision tylko dla bomby i np po wjechaniu zabierac jedno zycie postaci :)
        this.checkCoinCollision = function () {
            if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
                this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
                newScore += 1;
                score.innerText = newScore;
                xxx.innerText = newScore;
                this.levels();
                this.coin = new Coin();
                this.showCoin();
            }
        };

        this.checkBombCollision = function () {
            if (document.querySelector(".furry") === document.querySelector(".bomb") || document.querySelector(".pip-boy") === document.querySelector(".bomb") || document.querySelector(".goku") === document.querySelector(".bomb")) {
                this.furry.life = this.furry.life - 1;
                console.log(this.furry.life);
            }
        };

        //What happened on the end of game

        this.gameOver = function () {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9 || this.furry.life === 0) {
                clearInterval(this.idSetinterval);
                clearInterval(this.setBombInterval);
                var over = document.querySelector("body");
                over.classList.add("endGame");
                document.querySelector('.bomb').classList.remove("bomb");
                document.querySelector('.coin').classList.remove("coin");
                var scoreDiv = document.querySelector("#score div");
                scoreDiv.innerText = "";
                scoreDiv.style.backgroundColor = "lightgray";
                scoreDiv.style.boxShadow = "none";
                scoreDiv.style.border = "none";
                document.getElementById('level').removeChild(document.getElementById('level').children[0]);
                document.getElementById('avatar-info').removeChild(document.getElementById('avatar-info').children[0]);
                document.querySelector(".endWindow").classList.remove("invisible");
                var buttonNewGame = document.querySelector(".endWindow button");
                buttonNewGame.addEventListener("click", function () {
                    window.location.reload();
                });
            }
        };

        // //Game levels
        this.levels = function () {
            if (score.innerText > 1 && score.innerText < 3) {
                levelDiv.innerText = 2;
            } else if (score.innerText > 9 && score.innerText < 11) {
                console.log("dupa2");
                levelDiv.innerText = 3;
            } else if (score.innerText > 19 && score.innerText < 21) {
                console.log("dupa3");
                levelDiv.innerText = 4;
            }
        };
    }

    //////////////////////////////////////////////////Koniec Gry!!!////////////////////////////////////////////////

    var newGame = new Game();
    newGame.showFurry();
    newGame.showCoin();
    newGame.showBomb();

    //Rozpoczynanie gry na "enter"

    // document.addEventListener('keypress', function (event) {
    //     var b = event.which;
    //     var start = document.getElementById("start");
    //     if (b === 13) {
    //         newGame.startGame();
    //         start.classList.add('invisible');
    //     }
    // });


    ///////////////////////////////////Rozpoczynanie gry na kliknięcie myszką///////////////////////////////////


    var startNewGame = document.querySelector(".btn-start");
    console.log(startNewGame);

    var charactersMenu = document.querySelector(".charactersMenu").children;
    startNewGame.addEventListener('click', function () {

        //BEZ WYBRANEJ KLASY WYSWIETLI SIE ALERT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        if (charactersMenu[0].className.indexOf("choose") === -1 && charactersMenu[1].className.indexOf("choose") === -1 && charactersMenu[2].className.indexOf("choose") === -1) {
            alert("Wybierz Postać!!");
        } else {
            var startWindow = document.querySelector(".startWindow");
            startWindow.classList.add("invisible");
            newGame.startGame();
        }
    });

    // Poruszanie furrym strzałkami

    document.addEventListener('keydown', function (event) {
        newGame.turnFury(event);
    });

    document.addEventListener("keydown", function () {
        newGame.iterStupid();
    });
});

/***/ }),

/***/ "./scss/stye.scss":
/*!************************!*\
  !*** ./scss/stye.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=out.js.map