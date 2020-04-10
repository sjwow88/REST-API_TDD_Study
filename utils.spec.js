/*const utils = require('./utils');
const assert = require('assert'); //노드의 기본모듈

describe('utils.js모듈의 capitalize() 함수는',()=>{
   //it('어떤 테스트 케이스인지 설명',테스트코드)
   it('문자열의 첫번째 문자를 대문자로 변환한다', ()=>{
      const result = utils.capitialize('hello');
      assert.equal(result, 'Hello');
   })
});*/

const utils = require('./utils');
const assert = require('should'); //npm 설치

describe('utils.js모듈의 capitalize() 함수는',()=>{
   //it('어떤 테스트 케이스인지 설명',테스트코드)
   it('문자열의 첫번째 문자를 대문자로 변환한다', ()=>{
      const result = utils.capitialize('hello');
      result.should.be.equal('Hello'); //테스트의 가독성이 좋아짐
   })
});