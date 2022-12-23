"use strict"

export default Vue.component('TableauFacture',{
    template:`
        <table>
        <thead>
            <tr>
                <td>Numéro de facture</td>
                <td> Montant total</td>
                <td> montant reçu</td>
                <td> Validé ?</td>
                <td colspan="2"> Ecart</td>
            </tr>
        </thead>
            <tbody>
                <tr v-for="item in invoices">
                    <td v-for="value in item"> {{ value }} </td>
                    <td v-if="item.totalAmount-item.paidAmount == 0" class="valid"> OK</td>
                    <td v-else class="error"> ERROR</td>
                    <td v-if="item.totalAmount-item.paidAmount == 0"> / </td>
                    <td v-else> {{ item.paidAmount - item.totalAmount }} € </td>
                    <td @click="adjustAmount(item)" class="bouton">Valider</td> 
                </tr>
            </tbody>
        </table>
    `,
    data(){
        return{
            invoices: [
                {orderNumber:1001,totalAmount:198,paidAmount:198},
                {orderNumber:1002,totalAmount:105,paidAmount:106},
                {orderNumber:1003,totalAmount:356,paidAmount:356},
                {orderNumber:1004,totalAmount:259,paidAmount:250},
                {orderNumber:1005,totalAmount:54,paidAmount:52},
                {orderNumber:1006,totalAmount:241,paidAmount:241},
                {orderNumber:1007,totalAmount:27,paidAmount:26}
            ]
        
    };
    },
    methods:{
        adjustAmount(item){
            item.paidAmount=item.totalAmount;
        }
    }
})