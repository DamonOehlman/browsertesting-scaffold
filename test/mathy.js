var mathy = require('../lib/mathy');
var test = require('tape');

test('two number add correctly', function(t) {
  t.plan(1);
  t.equal(mathy.add(5, 6), 11);
});

test('a number and a string number value add correctly', function(t) {
  t.plan(1);
  t.equal(mathy.add('5', 6), 11);
});
