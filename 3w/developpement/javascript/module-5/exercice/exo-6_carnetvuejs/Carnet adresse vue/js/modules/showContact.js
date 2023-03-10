export default Vue.component("showContact", {
  template: `
  <table class="table table-striped table-dark">
    <thead>
        <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Email</th>
            <th scope="col">Date de naissance</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in contact">
            <th scope="row" v-if="item.modified===true"><input type="text" class="form-control" id="lastname" name="lastname" v-model="contactModified.lastname" /></th>
            <th scope="row" v-else>{{ item.lastname }}</th>
            <td v-if="item.modified===true"><input type="text" class="form-control" id="name" name="name" v-model="contactModified.name" /></td>
            <td v-else>{{ item.name }}</td>
            <td v-if="item.modified===true"><input type="text" class="form-control" id="phone" name="phone" v-model="contactModified.phone" /></td>
            <td v-else>{{ item.phone }}</td>
            <td v-if="item.modified===true"><input type="text" class="form-control" id="email" name="email" v-model="contactModified.email" /></td>
            <td v-else>{{ item.email }}</td>
            <td v-if="item.modified===true"><input type="date" class="form-control" id="date" name="date" v-model="contactModified.birthday" /></td>
            <td v-else>{{ item.birthday }} ({{ item.age }} ans)<i v-if="item.happyBirthday===true" class="fas fa-birthday-cake"></i> </td>
            <td v-if="item.modified===true"><i @click="modifyContact(item)" class="fas fa-edit" v-on:click="$emit('save')"></i></td>
            <td v-else><i @click="modifyContact(item)" class="fas fa-edit"></i></td>
            <td><i @click="deleteContact(item)" class="fas fa-trash-alt"></i></td>
        </tr>
    </tbody>
</table>
  `,
  data() {
    return {
      contactModified: {
        lastname: "",
        name: "",
        phone: "",
        email: "",
        birthday: "",
        age: "",
        happyBirthday: "",
        modified: false,
      },
      timeDay: new Date(),
      timeCalc: "",
    };
  },
  props: ["contact"],
  methods: {
    modifyContact(item) {
      console.log(item);
      for (let i = 0; i < this.contact.length; i++) {
        if (this.contact[i] != item) {
          this.contact[i].modified = false;
        } else {
        }
      }
      if (item.modified === false) {
        item.modified = true;
        this.contactModified.lastname = item.lastname;
        this.contactModified.name = item.name;
        this.contactModified.phone = item.phone;
        this.contactModified.email = item.email;
        this.contactModified.birthday = item.birthday;
        this.contactModified.age = item.age;
      } else {
        item.modified = false;
        item.lastname = this.contactModified.lastname;
        item.name = this.contactModified.name;
        item.phone = this.contactModified.phone;
        item.email = this.contactModified.email;
        item.birthday = this.contactModified.birthday;
        this.$emit('birthday');
        item.age = this.contactModified.age;
        item.happyBirthday = this.contactModified.happyBirthday;
      }
      this.$emit('save');
    },
    deleteContact(item) {
      if (window.confirm("Voulez-vous supprimer le contact")) {
        for (let i = 0; i < this.contact.length; i++) {
          if (this.contact[i] == item) {
            this.contact.splice(i, 1);
          } else {
          }
        }
       this.$emit('save'); 
      } else {
      }
    },
  },
});
