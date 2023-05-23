const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
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
    confirmInput(event) {
      this.confirmedName = this.name;
      event.target.value = "";
    },
    submitForm() {
      alert("Form Submitted ");
    },
  },
});
app.mount("#events");
