export default class CurrentChoice {
    #sidebar
    #tool;

    constructor() {
        this.#sidebar = document.querySelector('.sidebar');
        this.#tool = false;
        this.addEventListener();
    }

    get tool() {
        return this.#tool;
    }

    addEventListener() {
        this.#sidebar.addEventListener('click', (event) => {
            this.#tool = event.target.dataset.tool;
            console.log(this.#tool);
        });
    }
}