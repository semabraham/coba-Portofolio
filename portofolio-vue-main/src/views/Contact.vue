<template>
  <div>
    <!-- Import component with 'the-name' -->
    <the-form></the-form>
  </div>
</template>

<script>
// import component with format 'the-name'
// import named component 'the-form' with 'TheForm'

// import as local package
import dayjs from 'dayjs';

import TheForm from '../components/Forms';

export default {
  name: 'Contact',
  // declare imported component
  data: () => ({
    date: dayjs().format('YYYY-MM-DD'),
  }),
  components: {
    // from import ES Module
    TheForm,
  },
};
</script>
