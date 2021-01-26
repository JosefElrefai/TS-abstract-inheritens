"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CharsCollection_1 = __importDefault(require("./CharsCollection"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var charsCollection = new CharsCollection_1.default('banana');
var numberCollection = new NumbersCollection_1.default([5, 2, 1, 400]);
numberCollection.sort();
charsCollection.sort();
console.log(numberCollection.data);
console.log(charsCollection.data);
