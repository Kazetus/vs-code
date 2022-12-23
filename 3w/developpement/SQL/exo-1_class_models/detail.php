<?php

require "connexion.php";
$totalOrder = 0;
if(array_key_exists('id_order',$_GET) && is_numeric($_GET['id_order']))
{
    $id = $_GET['id_order'];

}

$queryClient = $connexion -> prepare('
                                SELECT
                                    `orderNumber`,
                                    orders.`customerNumber`,
                                    `customerName`,
                                    `contactLastName`,
                                    `contactFirstName`,
                                    `addressLine1`,
                                    `addressLine2`,
                                    `city`
                                FROM 
                                    orders
                                INNER JOIN 
                                    customers
                                ON orders.customerNumber = customers.customerNumber
                                WHERE
                                    orderNumber = ?
                                ');
$queryClient -> execute([$id]);
$customer = $queryClient -> fetch(); 

$queryOrderDetail = $connexion -> prepare('
                                    SELECT
                                        `orderNumber`,
                                        orderdetails.`productCode`,
                                        `quantityOrdered`,
                                        `priceEach`,
                                        (`quantityOrdered`*`priceEach`) as total,
                                        `productName`
                                    FROM
                                        orderdetails
                                    INNER JOIN
                                        products
                                    ON 
                                        orderdetails.productCode = products.productCode
                                    WHERE
                                        orderNumber = ?
                                    ORDER BY
                                        `quantityOrdered` DESC
                                    ');
$queryOrderDetail -> execute([$id]);
$orderDetails = $queryOrderDetail -> fetchAll();
foreach ($orderDetails as $orderDetail) {
    $totalOrder += $orderDetail["total"];
}
$tva = round($totalOrder*0.2, 2);
$totalTtc = $tva + $totalOrder;
require "detail.phtml";