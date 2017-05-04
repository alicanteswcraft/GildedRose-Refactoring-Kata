describe('Gilded Rose updates', function() {

  describe('normal Item', function () {
    it('should decrease quality', function() {
      initialItems = [ new Item('General object', 1, 1) ];
      const gildedRose = new Shop(initialItems);
      
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });

    it('should decrease sell in', function() {
      initialItems = [ new Item('General object', 1, 1) ];
      const gildedRose = new Shop(initialItems);
      
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toEqual(0);
    });

    it('should decrease twice as fast once the sell date passed', function() {
      initialItems = [ new Item('General object', 0, 2) ];
      const gildedRose = new Shop(initialItems);
      
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });

    it('should never decrease quality to a negative value', function () {
      initialItems = [ new Item('General object', 0, 0) ];
      const gildedRose = new Shop(initialItems);
      
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', function () {
    it('should increase its quality by 1', function () {
      initialItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 2) ];
      const gildedRose = new Shop(initialItems);
      
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(3);
    });

    it('should drops quality to 0 after the concert', function () {
      initialItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50) ];
      const gildedRose = new Shop(initialItems);
      
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });

    it('should keep quality at 50 tops', function() {
      initialItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50) ];
      const gildedRose = new Shop(initialItems);
      
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(50);
  });

    describe('with sell in less or equal to 10', function () {
      it('should increase its quality by 2', function () {
        initialItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2) ];
        const gildedRose = new Shop(initialItems);
        
        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(4);
      });
    });

    describe('with sell in is less or equal to 5', function () {
      it('should increase by 3 when sell in is less or equal to 5', function () {
          initialItems = [ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2) ];
          const gildedRose = new Shop(initialItems);

          const items = gildedRose.updateQuality();

          expect(items[0].quality).toEqual(5);
      });
    });
  });

  describe('Aged Brie', function() {
    it('should keep quality at 50 tops', function() {
        initialItems = [ new Item('Aged Brie', 10, 50) ];
        const gildedRose = new Shop(initialItems);
      const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it('should increase quality', function() {
        initialItems = [ new Item('Aged Brie', 10, 10) ];
        const gildedRose = new Shop(initialItems);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(11);
    });
  });

  describe('Sulfuras', function () {
    it('should never decrease quality', function () {
      const initialItems = [ new Item('Sulfuras, Hand of Ragnaros', 10, 80) ];
      const gildedRose = new Shop(initialItems);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(80);
    });

    it('should never decrease sellin', function () {
      const initialItems = [ new Item('Sulfuras, Hand of Ragnaros', 10, 80) ];
      const gildedRose = new Shop(initialItems);

      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toEqual(10);
    });
  });
});

