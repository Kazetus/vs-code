"use strict";
/**
 * Discount
 */
// Commande
const orders = [
  {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},
  {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},
  {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},
  {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},
  {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},
  {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
  {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
  {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
  {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
  {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
  {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
  {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
  {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
  {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
];
// Timpestamp Juillet 2020
const debutJuillet = Date.parse('01 Jul 2020 00:00:00 GMT');
const finJuillet = Date.parse('31 Jul 2020 23:59:59 GMT');
const TVA=0.2;
//Variables
let timestamp;
let price = [];
let pricecut;
let j=0;
let date;
let month;
//Extraction des ventes Juillet 2020
for (let i=0 ;i < orders.length ; i++) {
    timestamp = parseInt(orders[i].timestamp*1000, 10);
  if (debutJuillet < timestamp && timestamp < finJuillet) {
    price.push(orders[i]);
    console.log(price[j]);
    j++;
    }
    else {
    }
}
//Application des 20% de réduction
console.log(price);
for(let i=0; i < price.length; i++) {
  pricecut = parseFloat(price[i].price,10);
  //console.log(pricecut);
  pricecut = pricecut - pricecut*TVA;
  //console.log(pricecut);
  pricecut= pricecut.toFixed(2);
  pricecut.toString();
  //console.log(pricecut);
  price[i].price = pricecut;
}
console.log(price);
//Retour des ventes avec la promotion
for (let i=0; i < price.length; i++) {
  date =new Date(parseInt(price[i].timestamp, 10)*1000);
  month= date.getMonth()+1;
document.write("<h1>" + price[i].id + "</h1>");
document.write("<ul>");
document.write("<li>Customer : "+price[i].customer+"</li>");
document.write("<li>Produit : "+price[i].product+"</li>");
document.write("<li>Timestamp : "+price[i].timestamp+"</li>");
document.write("<li>Prix réduit : "+price[i].price+"</li>");
document.write("<li>Date de vente : "+date.getDate()+"/"+ month+"/"+date.getFullYear()+"  "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"</li>");
document.write("</ul>");
}