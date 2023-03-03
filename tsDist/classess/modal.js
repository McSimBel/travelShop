"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
function openModal(id) {
    if (id === void 0) { id = null; }
    // const findModal = Modal.modals.find(x => x.id === id);
    // if (!findModal){}
    var template = "<div>MyModal</div>";
    var modal = new Modal(id);
    modal.open(template);
}
function removeModal() {
    Modal.removeById();
}
function openModalSecond(id) {
    if (id === void 0) { id = null; }
    var template = "<div>MyModal 2</div>";
    var modal = new Modal(id);
    modal.open(template);
}
function removeAll(id) {
    if (id === void 0) { id = null; }
    Modal.removeAll();
}
// создать в разделе models интерфейс для класса и  применить реализацию к этому классу
var Modal = /** @class */ (function () {
    function Modal(id) {
        if (id === void 0) { id = null; }
        var findModal = Modal.modals.find(function (x) { return x.id === id; });
        if (!findModal) {
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        console.log("Modal.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length).toString();
    }
    Modal.prototype.open = function (template) {
        // check if element exists in dom
        var divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add("modal-element");
        document.body.appendChild(divWrap);
    };
    Modal.prototype.remove = function () {
        var modalEl = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    };
    // static method
    Modal.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        //remove modal from array of active modals
        var findEl = Modal.modals.find(function (x) { return x.id === modalId; });
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            if (Array.isArray(Modal.modals)) {
                var lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    };
    Modal.removeAll = function () {
        if (Array.isArray(Modal.modals)) {
            Modal.modals.forEach(function (el) {
                Modal.removeById(el.id);
            });
        }
    };
    //static field
    Modal.modals = [];
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map