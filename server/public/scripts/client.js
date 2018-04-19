console.log('client side up');

$(document).ready(onReady);
console.log('JS');

function onReady() {
    console.log('jquery loaded');
    $.ajax({
        type: 'GET',
        url: '/monster'
    })
    .then(function (response) {
        console.log(response);
        for (i = 0; i < response.length; i++) {
        $("#pushMonster").append(`<li>${response[i]}</li>`);
        }
    });
}
