<template>
  <div class="about">
    <h1>{{ this.message }}</h1>
    <button @click="toUppercase()">Capitalize</button>
    <button @click="toLowercase()">Lowerize</button>
    <p>{{ this.newMessage }}</p>
    <hr>
    <h3>{{ this.getName }}</h3>
    <button @click="setUser">Set User</button>
  </div>
</template>

<style>

</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'About',
  // data Tag
  data: () => ({
    message: 'Welcome to Your Portfolio Vue.js App',
    label: 'Capitalize',
  }),
  // methods Tag
  methods: {
    ...mapActions(['callSetUser']),
    toUppercase() {
      this.message = this.message.toUpperCase();
    },
    toLowercase() {
      this.message = this.message.toLowerCase();
    },
    // set user to 'Jane'
    setUser() {
      const payload = {
        name: 'Jane',
      };
      // sent payload to action callSetUser
      this.callSetUser(payload);
    },
  },
  // computed Tag
  computed: {
    ...mapGetters(['getUser', 'getName']),
    newMessage() {
      return this.message.toUpperCase();
    },
  },
  // watch Tag
  watch: {
    // with value from non nested object
    message() {
      console.log('watch');
    },
  },
};
</script>
