"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Product2 = void 0;
var productTemplate_1 = require("../templates/productTemplate");
var Product2 = /** @class */ (function (_super) {
    __extends(Product2, _super);
    function Product2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "TV";
        _this.Price = 23500;
        _this.Qty = 3;
        _this.CategoryName = "Electronics";
        return _this;
    }
    Product2.prototype.Total = function () {
        return this.Price * this.Qty;
    };
    Product2.prototype.Print = function () {
        console.log(this.Name + "  " + this.Price + "  " + this.Qty + "  " + this.Total());
    };
    return Product2;
}(productTemplate_1.Products));
exports.Product2 = Product2;
