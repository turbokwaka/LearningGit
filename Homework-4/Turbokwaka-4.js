class PaginationHelper {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length;
    }
    pageCount() {
        // returns the number of pages
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        let n = this.collection.length - this.itemsPerPage * (pageIndex);
        if (n <= 0 || pageIndex < 0) return -1
        if (n >= this.itemsPerPage) return this.itemsPerPage;
        if (n > 0 && n <= this.itemsPerPage) return n;
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        itemIndex = itemIndex - 1;
        if (itemIndex > this.collection.length || itemIndex < 0 || this.collection.length == 0) return -1;
        if (itemIndex < this.collection.length || itemIndex > 0) return Math.floor(itemIndex / this.itemsPerPage);
    }
}

