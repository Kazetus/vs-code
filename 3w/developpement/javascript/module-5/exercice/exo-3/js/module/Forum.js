export default Vue.component('Forum',{
    
    template:`
    <div>
        <h1>Le forum</h1>
        <form action="" method="POST">
          <input type="text" v-model="pseudo" name="pseudo" placeholder="Votre pseudo"/>
          <input type="text" v-model="sujet" name="sujet" placeholder="Le sujet"/>
          <textarea v-model="detail" placeholder="De quoi traite le sujet ?">
          </textarea>
          <h2> {{ sujet }} </h2>
          <h3> {{ pseudo }} </h3>
          <p> {{ detail }} </p>
        </form>
    </div>
    `,
    data(){
        return{
            pseudo:"",
            sujet:"",
            detail:""
        };
    }
})