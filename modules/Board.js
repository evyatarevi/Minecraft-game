import { BOARD_SIZE } from '../models/size.js';

export default class Board {
    #element;
    #size;

    constructor() {
        this.#element = document.querySelector('.board-game');
        this.#size = BOARD_SIZE;
        this.fillBoard();

    }

    get element() {
        return this.#element;
    }

    add(element, elementType) {
        element.dataset.type = elementType;
    }

    remove(element) {
        console.log('element', element);
        element.dataset.type = '';
    }

    fillBoard() {
        for (let i = 0; i < this.#size; i++) {
            const div = document.createElement('div');
            //draw Tree
            if ((i >= 47 & i <= 49) || (i >= 37 & i <= 39)) {
                div.dataset.type = 'Leaves';
            }
            if (i === 68 || i === 58) {
                div.dataset.type = 'Trunk';
            }
            // draw Rock
            if (i > 60 && i <= 65) {
                div.dataset.type = 'Rock';
            }
            // draw Dirt
            if (i >= 70) {
                div.dataset.type = 'Dirt';
            }
            this.#element.appendChild(div);
        }
    }
}