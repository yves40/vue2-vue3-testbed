<template>
<div>
  <div class="moduletitle">{{Version}}</div>
  <div class="home">
    <numbers/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import numbers from './numbers';

export default {
  name: 'Home',
  components: {
    numbers
  },
  setup() {
    const Version = 'Home.vue 1.13, Dec 21 2020'

    return { Version };
  }
}
</script>
