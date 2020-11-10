<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
      <input type="text" class="field" v-model="state.num1"  maxlength="2"/>
      <span class="operator"> + </span>
      <input type="text" class="field" v-model="state.num2"  maxlength="2"/>
      <span class="operator"> = </span>
      <span class="result">{{state.result}}</span>
    </form>
  </div>
</template>

<script>

import { reactive, computed } from "@vue/composition-api";

export default {
  name: 'calculatorComputed',
  props: {
    preset1: String,
    preset2: String,
  },
  setup(props) {
    let Version = 'calculatorComputed: 1.07, Nov 10 2020'
    console.clear();
    console.info(Version);
    let state = reactive( {
      num1: 0,
      num2: 0,
      result: computed( () => state.num1 + state.num2)
    })
    if(!isNaN(props.preset1)) {
       state.num1 = props.preset1;
    }
    else {
       state.num1 = 0;
    }
    if(!isNaN(props.preset2)) {
       state.num2 = props.preset2;
    }
    else {
       state.num2 = 0;
    }

    return { 
      Version,
      state,
    }
  }
}

</script>

