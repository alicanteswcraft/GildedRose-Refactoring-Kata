class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MAX_QUALITY = 50
const DOUBLE_INCREMENT_THRESHOLD = 10
const TRIPLE_INCREMENT_THRESHOLD = 5

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item, i) => {
      this.items[i] = this.updateItem(item)
    });

    return this.items;
  }

  isNotAgedBrie(item) {
    return item.name != 'Aged Brie';
  }

  isAgedBrie(item) {
    return item.name == 'Aged Brie';
  }

  isNotBackstagePasses(item) {
    return ! this.isBackstagePasses(item);
  }

  isBackstagePasses(item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
  }

  increaseQuality(item) {
    if (item.quality < MAX_QUALITY) {
      item.quality = item.quality + 1
    }
  }

  isNotSulfuras(item) {
    return item.name != 'Sulfuras, Hand of Ragnaros'
  }

  hasQuality(item) {
    return item.quality > 0
  }

  decreaseQuality(item) {
    if (this.hasQuality(item) && this.isNotSulfuras(item)) {
      item.quality = item.quality - 1
    }
  }

  dropQuality(item) {
    item.quality = 0
  }

  updateSellIn(item) {
    if (this.isNotSulfuras(item)) {
      item.sellIn = item.sellIn - 1;
    }
  }

  increaseQuality(item) {
    if (item.quality == MAX_QUALITY) {
      return;
    }
    
    item.quality = item.quality + 1
  }

  updateItem(item) {
    if (this.isAgedBrie(item)) {
      this.increaseQuality(item)
    } else if (this.isBackstagePasses(item)) {
      this.increaseQuality(item)
      if (item.quality < MAX_QUALITY) {
        if (this.isBackstagePasses(item)) {
          if (item.sellIn <= DOUBLE_INCREMENT_THRESHOLD) {
            this.increaseQuality(item)
          }
          if (item.sellIn <= TRIPLE_INCREMENT_THRESHOLD) {
            this.increaseQuality(item)
          }
        }
      }
    } else {
      this.decreaseQuality(item)
    }
    this.updateSellIn(item)
    if (item.sellIn < 0) {
      if (this.isAgedBrie(item)) {
        this.increaseQuality(item)
      } else {
        if (this.isBackstagePasses(item)) {
          this.dropQuality(item)
        } else {
          this.decreaseQuality(item)
        }
      }
    }

    return item;
  }
}
