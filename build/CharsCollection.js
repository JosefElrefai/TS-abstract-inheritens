"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharsCollection = /** @class */ (function (_super) {
    __extends(CharsCollection, _super);
    function CharsCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.isGreater = function (leftIndex, rightIndex) {
            return _this.data[leftIndex].toLowerCase() > _this.data[rightIndex].toLowerCase();
        };
        _this.swap = function (leftIndex, rightIndex) {
            var characters = _this.data.split('');
            var temp = characters[leftIndex];
            characters[leftIndex] = characters[rightIndex];
            characters[rightIndex] = temp;
            _this.data = characters.join('');
        };
        return _this;
    }
    ;
    Object.defineProperty(CharsCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return CharsCollection;
}(Sorter_1.Sorter));
exports.default = CharsCollection;
