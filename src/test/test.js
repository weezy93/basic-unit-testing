var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Compare Numbers', function() {
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
});

describe('Intersecting numbers', function(){
	it('returns an array of items that is in both input arrays', function(){
		expect(intersection([1,2,3],[1,3,5])).to.deep.equal([1,3]);
	});
});