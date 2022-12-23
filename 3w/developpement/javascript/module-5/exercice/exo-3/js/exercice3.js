"use strict";

import Forum from './module/Forum.js';
import SubjectList from "./module/SubjectList.js";

new Vue({
    
    el:'#app',
    
    // récupérer les composants utilisés par la vue principale 
    components: {Forum, SubjectList},
    // components: {SubjectList},
    
    data:{
        
    }
});
