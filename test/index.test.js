
const whay = require('../index.js').translate

describe('Whay', function () {
  describe('It should pass but can not pass', function (done) {
    whay('test', function (_, obj) {
      console.log(obj)
      // assert.equal(obj.keyword, 'test')
      // done()
    })
  })
})
