<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
      <input type="text" class="field" v-model="state.num1" @keyup="addNumbers" maxlength="2"/>
      <span class="operator"> + </span>
      <input type="text" class="field" v-model="state.num2" @keyup="addNumbers" maxlength="2"/>
      <span class="operator"> = </span>
      <span class="result">{{state.result}}</span>
    </form>
  </div>
</template>

<script>

import { reactive } from "@vue/composition-api";

export default {
  props: {
    preset1: String,
    preset2: String,
  },
  name: 'calculatorreactive',
  setup(props) {
    console.log(JSON.stringify(props))
    let Version = 'calculatorReactive: 1.09, Jul 22 2020'
    let state = reactive( {
      num1: 0,
      num2: 0,
      result: 0
    })

    if(!isNaN(parseInt(props.preset1))) {
       state.num1 = parseInt(props.preset1);
    }
    else {
       state.num1 = 0;
    }
    if(!isNaN(parseInt(props.preset2))) {
       state.num2 = parseInt(props.preset2);
    }
    else {
       state.num2 = 0;
    }
    addNumbers();

    function addNumbers() {
      state.result = parseInt(state.num1) + parseInt(state.num2);
    }

    return { 
      Version,
      state,
      addNumbers
    }
  }
}

</script>

