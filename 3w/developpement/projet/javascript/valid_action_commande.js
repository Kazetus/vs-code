"use strict";
let cart = [];
let display = [];
let details;

function loadDetails() {
    let id = $('#choice').val();
    $.get('index.php','action=order&id='+id,affDetails);
}

function affDetails(detail) {
    details = JSON.parse(detail);
    if (details !== false){
        $('#afficheur').empty();
        $('#afficheur').append('<img class="form__order" src="img/'+details.Photos+'">');
        $('#afficheur').append('<p class="dish__name">'+details.DishName+'</p>');
        $('#afficheur').append('<p class="dish__price">'+details.Price.toFixed(2)+' €</p>');
    }
    else {
        $('#afficheur').empty();
    }
}

function addCart(event) {
    event.preventDefault();
    details.quantity = parseInt($('#quantity').val(), 10);
    let check = false;
    let id = 0;
    if (cart === null) {
        cart = [];
    }
    else {}
    if (cart.length === 0) {
        cart.push(details);
    }
    else {
        for (let i = 0;i < cart.length; i++) {
            if (cart[i].DishName === details.DishName) {
                check = true;
                id= i;
            }
        }
        if (check) {
            cart[id].quantity += details.quantity;
        }
        else {
            cart.push(details);
        }
    }
    actualiseDisplay();
}

function placeOrder(event) {
    event.preventDefault();
    cart = JSON.stringify(cart);//js --> json 
    $.post('index.php?action=order', 'cart='+cart,orderPlaced);
}
function orderPlaced(validation) {
    let facture = JSON.parse(cart);
    emptyTheCart();
    $('#basket').empty();
    display = facture;
    affichageContenu();
    $('#basket').append('<p>'+validation+'</p>');
}
function decreaseQuantity() {
    if (cart[this.dataset.id].quantity <= 1) {
        cart[this.dataset.id].quantity = 10;
    }
    else {
        cart[this.dataset.id].quantity--;
    }
    actualiseDisplay();
}
function increaseQuantity() {
    if (cart[this.dataset.id].quantity >= 10) {
        cart[this.dataset.id].quantity = 1;
    }
    else {
        cart[this.dataset.id].quantity++;
    }
    actualiseDisplay();
}
function deleteProduct() {
    cart.splice(this.dataset.id, 1);
    actualiseDisplay();
}
function emptyTheCart() {
    window.localStorage.clear();
    cart = loadLocal();
    affichage();
}
function affichage() {
    display = loadLocal();
    $('#basket').empty();
    let total = 0;
    if(display === null) {
        $('#basket').append('<p>Please start adding product to your cart.</p>');
    }
    else {
        $('#basket').append('<thead><tr><th>Quantity</th><th>Product</th><th>Price</th><th>Total</th><tr><thead><tbody>');
        for (let i=0;i < display.length;i++) {
            $('#basket').append('<tr><td>'+display[i].quantity+'</td><td>'+display[i].DishName+'</td><td class="table__price">'+display[i].Price.toFixed(2)+'</td><td class="table__price">'+(display[i].Price*display[i].quantity).toFixed(2)+'</td><td><button type="button" class="minus" data-id="'+i+'"><i class="fa-solid fa-minus"></i></button></td><td><button type="button" class="plus" data-id="'+i+'"><i class="fa-solid fa-plus"></i></button></td><td><button type="button" class="deleteproduct" data-id="'+i+'"><i class="fa-solid fa-trash-can"></i></button></td></tr>');
            total += display[i].Price*display[i].quantity;
        }
        total = total.toFixed(2);
        $('#basket').append('<tr><td class="table__price nobot" colspan="3">Total</td><td class="table__price nobot">'+total+'</td></tr>');
        $('#basket').append('</tbody>');
        $('.minus').on('click', decreaseQuantity);
        $('.plus').on('click',increaseQuantity);
        $('.deleteproduct').on('click',deleteProduct);
    }
}
function affichageContenu() {
    let total = 0;
    if(display === null) {
        $('#basket').append('<p>Please start adding product to your cart.</p>');
    }
    else {
        $('#basket').append('<thead><tr><th>Quantity</th><th>Product</th><th>Price</th><th>Total</th><tr><thead><tbody>');
        for (let i=0;i < display.length;i++) {
            $('#basket').append('<tr><td>'+display[i].quantity+'</td><td>'+display[i].DishName+'</td><td class="table__price">'+display[i].Price.toFixed(2)+'</td><td class="table__price">'+(display[i].Price*display[i].quantity).toFixed(2)+'</td><td><button type="button" class="minus" data-id="'+i+'"><i class="fa-solid fa-minus"></i></button></td><td><button type="button" class="plus" data-id="'+i+'"><i class="fa-solid fa-plus"></i></button></td><td><button type="button" class="deleteproduct" data-id="'+i+'"><i class="fa-solid fa-trash-can"></i></button></td></tr>');
            total += display[i].Price*display[i].quantity;
        }
        total = total.toFixed(2);
        $('#basket').append('<tr><td class="table__price nobot" colspan="3">Total</td><td class="table__price nobot">'+total+'</td></tr>');
        $('#basket').append('</tbody>');
    }
}
function actualiseDisplay() {
    saveLocal(cart);
    affichage();
}
function loadLocal() {
    let target = window.localStorage.getItem('cart');
    target = JSON.parse(target);
    return target;
}

function saveLocal(target) {
    target = JSON.stringify(target);
    window.localStorage.setItem('cart', target);
    target = JSON.parse(target);
}

function boot() {
    cart = loadLocal();
    affichage();
}

function loadEditDetails() {
    let id = $('#editChoice').val();
    $.get('index.php','action=order&id='+id,affEditableDetails);
}
function affEditableDetails(detail) {
    console.log(detail);
    details = JSON.parse(detail);
    if (details !== false){
        $('#editeur').empty();
        $('#editeur').append('<form action="index.php?action=admin&content=editon" method="POST" enctype="multipart/form-data"><fieldset class="register__field"><legend>Informations</legend><div id="editeurIn" class="row field__div"></div></fieldset></form>');
        $('#editeurIn').append('<input type="hidden" name="id" value="'+details.ID_dish+'"/><input type="hidden" value="'+details.Photos+'" name="photos"/><label class="col-3" for="dishName">Name :</label><input class="col-9" type="text" id="dishName" name="dishName" value="'+details.DishName+'"/>');
        $('#editeurIn').append('<label class="col-3" for="categorie">Categorie :</label><input class="col-9" type="text" id="categorie" name="categorie" value="'+details.Categorie+'"/>')
        $('#editeurIn').append('<label class="col-3" for="price">Price :</label><input class="col-9" type="text" id="price" name="price" value="'+details.Price+'"/>');
        $('#editeurIn').append('<label class="col-3" for="image">Photos :</label><input class="col-9" type="file" id="image" name="image"/>');
        $('#editeurIn').append('<button type="submit" class="btn btn-success">Modify</button>');
        $('#editeur').append('<form method="POST" action="index.php?action=admin&content=delete&id='+details.ID_dish+'"><fieldset class="register__field"><legend>Delete Dish</legend><button type="submit" class="btn btn-danger">Delete</button></fieldset></form>');
    }
    else {
        $('#editeur').empty();
    }
}
document.addEventListener('DOMContentLoaded', function(){
    boot();
    $('#choice').on('change', loadDetails);
    $('#adding').on('click', addCart);
    $('#validate').on('click', placeOrder);
    $('#emptyIt').on('click', emptyTheCart);
    $('#editChoice').on('change', loadEditDetails);
});