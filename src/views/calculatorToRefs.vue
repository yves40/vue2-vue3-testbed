<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
      <input type="text" class="field" v-model="num1"  maxlength="2"/>
      <span class="operator"> + </span>
      <input type="text" class="field" v-model="num2"  maxlength="2"/>
      <span class="operator"> = </span>
      <span class="result">{{result}}</span>
    </form>
  </div>
</template>

<script>

import { reactive, computed, toRefs } from "@vue/composition-api";


function useCalculator(n1, n2) {
    let state = reactive( {
      num1: n1,
      num2: n2,
      result: computed( () => parseInt(state.num1) + parseInt(state.num2))
    })
    console.log(JSON.stringify(state))
    return toRefs(state);
}

export default {
  props: {
    preset1: String,
    preset2: String,
  },
  name: 'calculatorToRefs',
  setup(props) {
    console.log(JSON.stringify(props))
    let Version = 'calculatorToRefs: 1.25, Jul 22 2020'
    let dummy = {
      num1: 0,
      num2: 0,
    }
    dummy.num1 = !isNaN(parseInt(props.preset1)) ? dummy.num1 = parseInt(props.preset1): 0;
    dummy.num2 = !isNaN(parseInt(props.preset2)) ? dummy.num2 = parseInt(props.preset2): 0;

    let { num1, num2, result } = useCalculator(dummy.num1, dummy.num2);
    return { 
      Version,
      num1, num2, result
    }
  }
}

</script>

