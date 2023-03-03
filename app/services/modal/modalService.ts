
import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index"; // ссылка на массив с данными


// Определить типы для метода (возвращающие и для переменных в теле функции)

export function openModal(type, i: number) {

    const data= toursDataArray[i];
    const tourId = data[i]?.id;

    let modalInfo = {};
    switch (type) {
        case "order":
            const modalTemplate = `
<div> 
    
    <svg width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg" data-moda-id="tour-modal" class="close-modal">
    <rect x="4.39648" y="3.57837" width="9.99117" height="0.624448" transform="rotate(45 4.39648 3.57837)" fill="#black"/>
    <rect x="11.103" y="4.05066" width="9.99117" height="0.624448" transform="rotate(135 11.103 4.05066)" fill="#black"/>
    </svg>
    
    <img class="modal-tour-img" src="../dist/${data.img}"/>
    <p class="modal-tour-name">${data.name}</p>
    <p class="modal-description">${data.description}</p>
       
    <div data-tour-id=${tourId} class="ticket-submit">
        <a href="../ticket.html" class="buy-ticket">Купить билет</a>
    </div>
</div>
`
            const modal = new Modal('tour-modal');
            modal.open(modalTemplate);
            break;
    }
}


