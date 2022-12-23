"use strict";
/**
 * Discount
 */
// Commande
const ORDERS = [
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
// Timpestamp Juillet 2020 + réduction
const DEBUTJUILLET = Date.parse('01 Jul 2020 00:00:00 GMT');
console.log(DEBUTJUILLET);
const FINJUILLET = Date.parse('31 Jul 2020 23:59:59 GMT');
const REM=0.2;
//Variables
let timestamp;
let price = [];
let pricecut;
let j=0;
let date;
let month;
let neworder=ORDERS;
let change;
//Extraction des ventes Juillet 2020
for (let i=0 ;i < ORDERS.length ; i++) {
    timestamp = parseInt(ORDERS[i].timestamp*1000, 10);
  if (DEBUTJUILLET < timestamp && timestamp < FINJUILLET) {
// On récupère les commandes à modifier
     price.push(ORDERS[i]);                    
// Application des 20% de réduction
     pricecut = parseFloat(price[j].price,10); 
     pricecut = pricecut - pricecut*REM;       
     pricecut= pricecut.toFixed(2);            
     pricecut.toString();                      
     price[j].price = pricecut;               
// Retour des nouveaux prix dans un nouveau tableau complet
     neworder[i]=price[j];                    
     j++;
     change= "La réduction <strong class=\"red\">a été appliquée</strong>.";
     addInDocument(i);
  }
// On envoie dans le document le détail de toutes les commandes
    else {
      change= "La réduction <strong class=\"green\">n'a pas été appliquée</strong>";
      addInDocument(i);
    }
}
console.log(neworder);
//Retour des ventes avec la promotion
function addInDocument(n) {
    date =new Date(parseInt(neworder[n].timestamp, 10)*1000);
    month= date.getMonth()+1;
    document.write("<section>");
    document.write("<h2>" + neworder[n].id + "</h1>");
    document.write("<ul>");
    document.write("<li>Customer : "+neworder[n].customer+"</li>");
    document.write("<li>Produit : "+neworder[n].product+"</li>");
    document.write("<li>Timestamp : "+neworder[n].timestamp+"</li>");
    document.write("<li>Prix : "+neworder[n].price+" €</li>");
    document.write("<li>Date de vente : "+date.getDate()+"/"+ month+"/"+date.getFullYear()+"  "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"</li>");
    document.write("<li>" + change +" </li>");
    document.write("</ul>");
    document.write("</section>");
}
