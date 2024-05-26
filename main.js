import Board from "./modules/Board.js";
import Inventory from "./modules/Inventory.js";
import CurrentChoice from "./modules/CurrentChoice.js";

const checkMatch = (tool, elementType) => {
    if ((tool === 'Axe' && elementType === 'Leaves')
        || tool === 'Axe' && elementType === 'Trunk'
        || (tool === 'Pickaxe' && elementType === 'Rock')
        || (tool === 'Shovel' && elementType === 'Dirt')) {
        return true;
    }
    return false;
}



document.addEventListener('DOMContentLoaded', function (event) {

    const currentChoice = new CurrentChoice();
    const inventory = new Inventory();
    const board = new Board();

    board.element.addEventListener('click', (event) => {
        const clickedElement = event.target;
        const elementType = clickedElement.dataset.type;
        if (currentChoice.tool === 'inventory' && !elementType) {
            board.add(clickedElement, inventory.getLastElementType());
            inventory.displayLastItem();
            return;
        }

        if (checkMatch(currentChoice.tool, elementType)) {
            inventory.add(elementType);
            inventory.displayLastItem();
            board.remove(clickedElement);
            return;
        }

    })




});




