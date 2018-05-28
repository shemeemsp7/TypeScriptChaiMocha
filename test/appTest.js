"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const app_1 = require("../src/app");
const assert = chai.assert;
let sayHelloResult = app_1.App.sayHello();
let addNumbersResult = app_1.App.addNumbers(5, 5);
describe('App', function () {
    describe('sayHello()', function () {
        it('sayHello should return hello', function () {
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
        it('sayHello should return type string', function () {
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    describe('addNumbers()', function () {
        it('addNumbers should be above 5', function () {
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        });
        it('addNumbers should return type number', function () {
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});
//# sourceMappingURL=appTest.js.map