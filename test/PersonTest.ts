import {Person} from '../src/Person';
import * as chai from 'chai';
import * as mocha from 'mocha';

let assert = chai.assert;
let person=new Person('Shemeem',23,'bangalore');

describe('Person object creation should return corect values', function(){
  
  describe('getAge()',function(){
    it('getAge should return correct age', function(){
      assert.equal(person.getAge(), 23);
    });
    it('Age should be in number format', function(){
      assert.isNumber(person.getAge());
    });
  });
    describe('getName()',function(){
     it('getName should return correct name', function(){
        assert.equal(person.getName(), 'Shemeem');
     });
     it('Name should be in string format', function(){
      assert.isString(person.getName());
   });
    });
  });
