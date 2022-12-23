export default Vue.component('SubjectList', {
       
    template:`
    <div>
        <div v-for="item in content">
            <h1> {{ item.sujet }} </h1>
            <p><em> {{ item.date }} </em></p>
            <p> {{ item.detail }} </p>
        </div>
    </div>
    `,
    data(){
        return{
            content:{
                un:{sujet:"Installer un certificat Let's Encrypt", date:"2021-06-23", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, vero."},
                deux:{sujet:"Comment utiliser Vue.js ?", date:"2021-02-02", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit debitis ducimus saepe reprehenderit esse architecto molestiae iste enim reiciendis!"},
                trois:{sujet:"Le père Noël existe-t-il ?", date:"2020-12-24", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quidem iste perferendis provident quos reprehenderit?"}
            }
        };
    }
})