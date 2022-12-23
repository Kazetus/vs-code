<?php

require "connexion.php";

if(array_key_exists('id_customer',$_GET) && is_numeric($_GET['id_customer']))
{
    $id = $_GET['id_customer'];

}

$query = $connexion -> prepare('
                                SELECT
                                    `customerName`,
                                    `contactLastName`,
                                    `contactFirstName`,
                                    `addressLine1`,
                                    `addressLine2`,
                                    `city`,
                                    customers.`customerNumber`
                                FROM customers
                                INNER JOIN orders 
                                ON customers.customerNumber = orders.customerNumber
                                WHERE
                                    customers.customerNumber = ?
                                ');
$query -> execute([$id]);
$customer = $query -> fetch();

$queryOrders = $connexion -> prepare('
                                SELECT
                                    `customerNumber`,
                                    `orderNumber`,
                                    `orderDate`,
                                    `shippedDate`,
                                    `status`
                                FROM orders
                                WHERE
                                    customerNumber = ?
                                ');
$queryOrders -> execute([$id]);
$customer_orders = $queryOrders -> fetchAll();

require "detail_client.phtml";