// script.js

document.getElementById('formularz-zapisu').addEventListener('submit', function(e) {
    e.preventDefault();
    let imie = document.getElementById('imie').value;
    let email = document.getElementById('email').value;
    let telefon = document.getElementById('telefon').value;

    // Tutaj można dodać kod do zapisania danych klienta, np. wysłanie ich na serwer lub zapisanie w bazie danych.
    alert('Dziękujemy za zapisanie się!');
});

paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '50.00' // Tutaj można ustawić wartość płatności
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Płatność została zrealizowana. Dziękujemy!');
        });
    }
}).render('#paypal-button');