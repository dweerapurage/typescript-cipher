"use strict";
/**
Caesar Cipher, by Al Sweigart al@inventwithpython.com
Do you want to (e)ncrypt or (d)ecrypt?
> e
Please enter the key (0 to 25) to use.
> 4
Enter the message to encrypt.
> Meet me by the rose bushes tonight.4
QIIX QI FC XLI VSWI FYWLIW XSRMKLX.
Full encrypted text copied to clipboard.

Caesar Cipher, by Al Sweigart al@inventwithpython.comgit branch -M main
git push -u origin main
Do you want to (e)ncrypt or (d)ecrypt?
> d
Please enter the key (0 to 26) to use.
> 4
Enter the message to decrypt.
> QIIX QI FC XLI VSWI FYWLIW XSRMKLX.
MEET ME BY THE ROSE BUSHES TONIGHT.
Full decrypted text copied to clipboard.
**/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var Cipher = /** @class */ (function () {
    function Cipher() {
    }
    Cipher.prototype.encryptInput = function () {
        var newSymbols = new Map();
        var encryptedString = [];
        for (var i = 65; i <= 90; i++) {
            var newNumber = i + this.key;
            if (newNumber > 90) {
                newNumber = newNumber - 26;
            }
            newSymbols[String.fromCharCode(i)] = String.fromCharCode(newNumber);
        }
        // console.log(newSymbols);
        for (var _i = 0, _a = this.userString.toUpperCase(); _i < _a.length; _i++) {
            var c = _a[_i];
            if (newSymbols[c]) {
                encryptedString.push(newSymbols[c]);
            }
            else {
                encryptedString.push(c);
            }
        }
        return encryptedString.join('');
    };
    Cipher.prototype.decryptInput = function () {
        var newSymbols = new Map();
        var decryptedString = [];
        for (var i = 65; i <= 90; i++) {
            var newNumber = i + this.key;
            if (newNumber > 90) {
                newNumber = newNumber - 26;
            }
            newSymbols[String.fromCharCode(newNumber)] = String.fromCharCode(i);
        }
        for (var _i = 0, _a = this.userString.toUpperCase(); _i < _a.length; _i++) {
            var c = _a[_i];
            if (newSymbols[c]) {
                decryptedString.push(newSymbols[c]);
            }
            else {
                decryptedString.push(c);
            }
        }
        return decryptedString.join('');
    };
    return Cipher;
}());
function getInput() {
    return __awaiter(this, void 0, void 0, function () {
        var rl, readyToExit, cipher, answer, _a, _b, userKey, _c, userDKey;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
                    readyToExit = false;
                    cipher = new Cipher();
                    _d.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 11];
                    return [4 /*yield*/, rl.question('Do you want to (e)ncrypt or (d)crypt ? ')];
                case 2:
                    answer = _d.sent();
                    _a = answer.toLowerCase();
                    switch (_a) {
                        case 'e': return [3 /*break*/, 3];
                        case 'd': return [3 /*break*/, 6];
                        case 'exit': return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 10];
                case 3:
                    _b = cipher;
                    return [4 /*yield*/, rl.question('Please enter the message to encrypt \n')];
                case 4:
                    _b.userString = _d.sent();
                    return [4 /*yield*/, rl.question('Please enter the key (0 to 25) to use \n')];
                case 5:
                    userKey = _d.sent();
                    cipher.key = parseInt(userKey);
                    console.log(cipher.encryptInput());
                    return [3 /*break*/, 10];
                case 6:
                    _c = cipher;
                    return [4 /*yield*/, rl.question('Please enter the key (0 to 25) to use \n')];
                case 7:
                    _c.userString = _d.sent();
                    return [4 /*yield*/, rl.question('Please enter the message to dencrypt \n')];
                case 8:
                    userDKey = _d.sent();
                    cipher.key = parseInt(userDKey);
                    console.log(cipher.decryptInput());
                    return [3 /*break*/, 10];
                case 9:
                    readyToExit = true;
                    return [3 /*break*/, 10];
                case 10:
                    if (readyToExit) {
                        return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 1];
                case 11:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInput()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();
