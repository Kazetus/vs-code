<?php

require "connexion.php";

$query = $connexion -> prepare('
                                SELECT
                                    `orderNumber`,
                                    `orderDate`,
                                    `shippedDate`,
                                    `status`,
                                    orders.`customerNumber`,
                                    `customerName`
                                FROM
                                    orders
                                INNER JOIN
                                    customers
                                ON orders.customerNumber = customers.customerNumber
                                ');
$query -> execute();
$orders = $query -> fetchAll();
require "index.phtml";