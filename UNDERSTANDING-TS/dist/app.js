"use strict";
const form = document.querySelector('form');
const addressInput = document.getElementById('address');
function searchAddressHandler(event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', searchAddressHandler);
//# sourceMappingURL=app.js.map