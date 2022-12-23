export default Vue.component("addContact", {
  template: `
  <div class="container w-25">
    <h1>Ajouter un contact</h1>
    <form>
      <div class="form-group">
        <label for="lastname">Nom</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          name="lastname"
          v-model="activeContact.lastname"
        />
      </div>
      <div class="form-group">
        <label for="name">Prenom</label>
        <input type="text" class="form-control" id="name" name="name" v-model="activeContact.name"/>
      </div>
      <div class="form-group">
        <label for="phone">Telephone</label>
        <input type="phone" class="form-control" id="phone" name="phone" v-model="activeContact.phone"/>
      </div>
      <div class="form-group">
        <label for="Email">Email</label>
        <input type="email" class="form-control" id="email" name="email" v-model="activeContact.email"/>
      </div>
      <div class="form-group">
        <label for="birthday">Date de naissance</label>
        <input type="date" class="form-control" id="birthday" name="birthday" v-model="activeContact.birthday"/>
      </div>
      <button @click="readContact" type="submit" id="submit" class="btn btn-primary">
        Ajouter un contact
      </button>
    </form>
  </div>
  `,

  data() {
    return {
      activeContact: {
        lastname: "",
        name: "",
        phone: "",
        email: "",
        birthday: "",
        age: "",
        modified: false,
        happyBirthday: false,
      },
      timeDay: new Date(),
      timeCalc: "",
    };
  },

  props: ["contact"],

  methods: {
    readContact(event) {
      event.preventDefault();
      this.contact.push(this.activeContact);
      console.log(this.contact);
      this.$emit('save');
      this.$emit('birthday');
    },
    // setAge() {
    //   this.timeCalc = new Date(this.activeContact.birthday);
    //   if (this.timeCalc.getMonth() < this.timeDay.getMonth()) {
    //     this.activeContact.age =
    //       this.timeDay.getFullYear() - this.timeCalc.getFullYear();
    //     this.activeContact.happyBirthday = false;
    //   } else if (this.timeCalc.getMonth() == this.timeDay.getMonth()) {
    //     if (this.timeCalc.getDate() == this.timeDay.getDate()) {
    //       this.activeContact.age =
    //         this.timeDay.getFullYear() - this.timeCalc.getFullYear();
    //       this.activeContact.happyBirthday = true;
    //     } else if (this.timeCalc.getDate() < this.timeDay.getDate()) {
    //       this.activeContact.age =
    //         this.timeDay.getFullYear() - this.timeCalc.getFullYear();
    //       this.activeContact.happyBirthday = false;
    //     } else {
    //       this.activeContact.age =
    //         this.timeDay.getFullYear() - this.timeCalc.getFullYear() - 1;
    //       this.activeContact.happyBirthday = false;
    //     }
    //   } else {
    //     this.activeContact.age =
    //       this.timeDay.getFullYear() - this.timeCalc.getFullYear() - 1;
    //     this.activeContact.happyBirthday = false;
    //   }
    // },
  },
});
