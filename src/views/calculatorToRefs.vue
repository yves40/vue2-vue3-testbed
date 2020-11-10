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
    let Version = 'calculatorToRefs: 1.26, Nov 10 2020'
    console.clear();
    console.info(Version)
    let dummy = {
      num1: 0,
      num2: 0,
    }
    dummy.num1 = !isNaN(props.preset1) ? dummy.num1 = props.preset1: 0;
    dummy.num2 = !isNaN(props.preset2) ? dummy.num2 = props.preset2: 0;

    let { num1, num2, result } = useCalculator(dummy.num1, dummy.num2);
    return { 
      Version,
      num1, num2, result
    }
  }
}

</script>

