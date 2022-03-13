<template>
  <div>
    <p class="paragraph">Forms</p>
    <p class="paragraph blue">Blue</p>
    <form @submit.prevent="submitForms()">
      <input type="text" v-model.lazy="input.name">
      <br>
      <input type="text" v-model="input.email">
      <br>
      <textarea v-model="input.message" id="" cols="30" rows="10"></textarea>
      <br>
      <button type="submit">Submit</button>
    </form>
    <hr>
    <ol>
      <li v-for="(item, idx) in forms" :key="idx">{{item.name}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  // format for named components 'the-name'
  name: 'the-form',
  data: () => ({
    input: {
      name: '',
      email: '',
      message: '',
    },
    forms: [],
  }),
  methods: {
    submitForms() {
      this.forms.push(this.input);
      this.input = {
        name: '',
        email: '',
        message: '',
      };
    },
  },
  // watch
  watch: {
    // with nested object
    'input.name': (newValue, oldValue) => {
      if (newValue !== '') {
        console.log(oldValue);
      } else if (newValue !== oldValue) {
        console.log(newValue);
      } else {
        console.log('no change');
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.paragraph
  color: red
  &.blue
    color: blue
</style>
