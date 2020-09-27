<template>
<div>
  <br />
  <div class="moduletitle">{{Version}}</div>  <br />
  <div class="calc-form">
    <form>
      <input type="text" class="field" v-model="num1" maxlength="2" />
      <input type="text" class="field" v-model="num2" maxlength="2" />
    </form>
  </div>
</div>
</template>

<script>
import { reactive } from "@vue/composition-api";

export default {
  name: "numbers",
  setup() {
    let Version = "numbers: 1.05, Jul 21 2020";
    let num1 = 10;
    let num2 = 10;

    return {
      Version,
      num1,
      num2
    };
  }
};
</script>
