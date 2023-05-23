const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Form Submitted ");
    },
  },
  // computed: {
  //   fullName() {
  //     if (this.name === "") {
  //       return "";
  //     }
  //     return this.name + " " + "Naseer";
  //   },
  // },
  watch: {
    name(value) {
      console.log(value);
      if (value === " ") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === " ") {
        this.fullName = "";
      } else {
        this.fullName = this.name + " " + value;
      }
    },
  },
});
app.mount("#events");
