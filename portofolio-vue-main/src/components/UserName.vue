<template>
  <div>
    <h1>Dynamic Route</h1>
    <h1>{{user}}</h1>
  </div>
</template>

<script>
export default {
  name: 'user-name',
  computed: {
    user() {
      // extract user from route params
      return this.$route.params.user || 'name undefined';
    },
  },
};
</script>
