<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
      <input type="text" class="field" v-model="num1" maxlength="2"/>
      <span class="operator"> + </span>
      <input type="text" class="field" v-model="num2" maxlength="2"/>
      <span class="operator"> = </span>
      <span class="result">{{result}}</span>
    </form>
    <div class="moduletitle">Modified {{modifications}} time(s)</div>
    <div>
      <DatadownEventsup v-model="message" v-model:payload="datapayload.checker" />
    </div>    
  </div>
</template>

<script>

import DatadownEventsup from "./DatadownEventsup";

import { onMounted, onBeforeUnmount, ref, watch, computed } from "@vue/composition-api";
// import { useRouter } from "vue-router";
// import { useStore } from "vuex"

export default {
  props: {
    msg: String,
    preset1: { 
      type: String,
      required: false,
      default: ''
    },
    preset2: String,
  },
  components: {
    DatadownEventsup,
  },
  name: 'calculatorRef',
  setup(props, context) {

    //const store = useStore();
    //const router = useRouter();
    //router.getRoutes().forEach( rt => console.info(rt.path));
    console.log(context);
    
    let Version = 'calculatorRef: 2.32, Sep 25 2020 '
    let Header = props.msg;
    let num1 = ref(0);
    let num2 = ref(0);
    let result = computed( () => store.state.result );
    let modifications = computed( () => store.getters.getModificationsNumber);
    let message = ref("Yves Isabelle");
    let datapayload = {
      checker: ref(false),
      minvalue: 10,
      maxvalue: 20,
    }

    // Initial load.
    // Have a look at passed parameters if any
    if(!isNaN(parseInt(props.preset1))) {
       num1 = ref(parseInt(props.preset1));
    }
    // Update the store
    store.dispatch('updateNum1', { num1: num1 })
    if(!isNaN(parseInt(props.preset2))) {
       num2 = ref(parseInt(props.preset2));
    }
    // Update the store
    store.dispatch('updateNum2', { num2: num2 })

    // Test lifecycle handlers
    onBeforeUnmount(() =>  { console.log(Version + 'UnMounted');})
    onMounted(() =>  {console.log(Version + 'Mounted');})
    


    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [num1, num2, message, datapayload.checker], ([c1, c2, m1, ck1], [p1, p2, m2, ck2]) => {
      console.log("**** " + c1 + "/" + c2 + "/" + message.value + "/" + datapayload.checker.value)
      let trackchange = check(num1, c1, p1);
      if(!trackchange) trackchange = check(num2, c2, p2)
      if(trackchange)
        store.dispatch('updateResult', { num1: num1.value, num2: num2.value} );
    })

    // Utilities
    function getVersion() { return  Version;}
    function check(field, ckey, pkey) {  // Get field, current and previous field value
      let status = false;
      // check we have a number, otherwise reset to previous value
      if ((ckey !== pkey)||(ckey === "")) {
        if(isNaN(ckey)||(ckey === ""))
        {
          console.log('Number please..., reset to zero' );
          field.value = 0;
          status = true;
        }
        else {
          console.log('watch handler: change from: ' + (pkey===""? 'Nothing': pkey) + ' to ' + ckey);
          //field.value = ckey.replace(/^[0\.]/, '');
          if(ckey !== "0") field.value = ckey.replace(/^0+/, '');
          status = true;
        }
      }
      return status;
    }

    return { 
      num1,
      num2,
      result,
      modifications,
      Version,
      Header,
      message,
      datapayload,
    }
  }
}

</script>

