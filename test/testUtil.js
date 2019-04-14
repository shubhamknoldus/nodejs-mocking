const {it} = exports.lab = require('lab').script();
const {expect} = require('code');
const sinon = require('sinon');

let util = require('../blog/util.js');

it("should add two int", () => {
    let res = util.addInt(3, 4);
    console.log('when result isn\'t mocked');
    console.log(res);
    expect(res === 7);
})

it("should subtract two int", () => {
    let res = util.subInt(3, 4);
    console.log('when result isn\'t mocked');
    console.log(res);
    expect(res === 1);
})

//lets add some mocking ~ stubbing

it("should mock add", () => {
    sinon.stub(util, 'addInt').returns(10); //whatever value i give for args of addInt, i would always get 10
    let res = util.addInt(3, 4);
    console.log('when result is mocked for add');
    console.log(res);
    expect(res === 10);
});

it("should divide valid inputs", () => {
    let res = util.divide(9, 3);
    console.log('when call back is not mocked');
});

it("should mock divide methods", () => {
    sinon.stub(util, 'divide').callsFake((op1, op2, callback) => {
        console.log('Its mocked')
    })
    let res = util.divide(9, 3);
    console.log('when call back is mocked');
});
