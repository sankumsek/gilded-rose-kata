describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});
