/*
classes:
1. board:
event listeners:
if (!img)
2. cli
3.inventory
4.game


-global-
const currentTool = false;
const currentImgItem = false;

existImg (element):
    if (!element.style.backgroundImage):
        return false;
    return true;


removeItemFromBoard(element){ --- board
    if (check tool vs img):
        const imgURL = element.img;
        element.img = null;
        return imgURL;
    else:
        return false;
}


addItemToBoard(element){  ----- board
    element.img = currentImgItem;
}


add item to inventory: ------ inventory


remove item from inventory: ------ inventory
    remove last item: arr.pop();

    
displayLastItemInventory(){ ------ inventory

}


-board-
create divs to all the grid.
event listener to each element / grid container

listener:
press div:
    const element = event.target;
    if(currentImgItem && !existImg(element)){
            addItemToBoard(element);
            remove item from inventory();
            displayLastItemInventory();
            return;
    }
    if(currentTool && existImg(element){
            const imgItemRemoved = removeItemFromBoard(element);
            if (imgItemRemoved):
                add imgItem to inventory();
                displayLastItemInventory();
        }
    }

-side-
side container: event listener ->
    if target tool:
        current tool = tool name;
        currentImgItem = false;

    if targe inventory:
        currentImgItem = last imag url;
        current tool = false;


-classes- 

class inventory{
    this.list = [];
    ?lastItem;


    func:
        displayLastItem();
        add(); -> add item to inventory
        remove(); -> remove item from inventory
}

-board-
    constructor(element):
        this.board = element;
    func:
        addItemToBoard(element);
        removeItemFromBoard(element);


*/