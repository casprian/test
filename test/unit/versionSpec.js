describe('version', function() {
  beforeEach(module('myApp.services'));

  it('should return current version', inject(function(version) {
    expect(version).toEqual('0.1');
  }));
  
   it('should return right value', inject(function(version) {
    expect(3).toEqual(3);
  }));

  it('should return wrong value', inject(function(version) {
    expect(3).toEqual(4);
  }));
  
  
});
