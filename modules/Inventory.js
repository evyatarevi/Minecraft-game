export default class Inventory {
    #element;
    #stock;

    constructor() {
        this.#element = document.querySelector('.inventory')
        this.#stock = [];
    }

    getLastElementType() {
        return this.#stock.pop();
    }

    add(elementType) {
        this.#stock.push(elementType);
        console.log('inventory stock: ' + this.#stock);
    }

    displayLastItem() {
        this.#element.dataset.type = this.#stock[this.#stock.length - 1];
    }

    removeLastItem() {
        this.#stock.pop();
    }
}