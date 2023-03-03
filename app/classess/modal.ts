
// создать в разделе models интерфейс для класса и  применить реализацию к этому классу



export class Modal {
    private readonly id: string;

    //static field
    public static modals: Modal[] = [];

    constructor(id:string = null) {
        const findModal: Modal = Modal.modals.find((el) => {
            return el.id === id;
        })

        if (findModal){
            Modal.removeById(id);
        }

        Modal.modals.push(this);

        this.id = id || (Math.random() + Modal.modals.length).toString();
    }

    public open (template: string): void {
        const divWrap: HTMLDivElement = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add("modal-element");

        divWrap.addEventListener('click', this.closeModalHandler);

        document.body.appendChild(divWrap);
    }

    public remove():void {
        const modalEl: HTMLElement = document.getElementById(this.id) as HTMLElement;
        if (modalEl) {
            modalEl.removeEventListener('click', this.closeModalHandler);
            modalEl.parentNode.removeChild(modalEl);
        }
    };

    // static method

    public static removeById(id: string): void {
        let modalId: string = id;
        const findEl: Modal = Modal.modals.find((el) => {
            return el.id === modalId;
        })
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter((el) => {
                return el.id !== modalId;
            })
        }
    }

    private closeModalHandler = (ev: Event): void => {
        const target: HTMLElement = ev.target as HTMLElement;
        if (target.classList.contains('close-modal')) {
            this.remove();
        }
    }
}