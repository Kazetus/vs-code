"use strict";


new Vue({
    
    el:'#app',
    
    data:{
        cpt:0,
        x:0,
        y:0
    },
    methods:{
        cremente(){
            this.cpt++;
        },
        decremente() {
            if (this.cpt==0) {
                
            }
            else {
            this.cpt--;
            }
        },
        cliqueOnPage(event){
            this.x = event.pageX;
            this.y = event.pageY;
        }
    }
});
