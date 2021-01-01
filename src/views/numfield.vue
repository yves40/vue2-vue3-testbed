<template >
  <div>
    <div class="grid2-60 viewframe">
      <span>{{msg}}</span>
      <div>
        <input class="field" :class="theclass" type="text" v-model="thenumber"/>
      </div>
    </div>
  </div>
</template>

<script>

import { onMounted, onUnmounted, ref, watch, computed } from "@vue/composition-api";
import { modelNumberWrapper } from "../wrappers/modelNumberWrapper";

export default {
  props: {
    value: Number,
    maxvalue: String,
    minvalue: String,
    message: String
  },
  name: 'numfield',
  //-----------------------------------------------------------------------
  // Boot time ==> Setup
  //-----------------------------------------------------------------------
  setup(props, {emit} ) {

    let Version = 'numfield: 2.09, Dec 31 2020 '
    const thenumber = modelNumberWrapper(props, emit, 'value');
    const min = props.minvalue;
    const max = props.maxvalue;
    let error = "None";
    let msg;
    let valid = ref(false);
    let minmaxcheck = false;
    let mincheck = false;
    let maxcheck = false;
    let theclass = computed( 
       () => {
         if (!valid.value) {
            emit('isvalid', false);
            return 'isko'
         }
        else {
            emit('isvalid', true);
            return 'isok'
        }
      }
    )

    msg = props.message;
    // Check min max if specified 
    if(!isNaN(min)&&!isNaN(max)) {
      msg = props.message + ' ' + min + ' to ' + max;
      minmaxcheck = true;
    }
    else{ 
      if(!isNaN(min)) { msg = props.message + ' Min:' + min; mincheck = true };
      if(!isNaN(max)) { msg = props.message + ' Max:' + max; maxcheck = true };
    }
    valid.value = setInputColor(thenumber.value);

    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [thenumber], ([ckey], [pkey]) => {
      let trackchange = check(thenumber, ckey, pkey);
    })
    onMounted( () => {
    })

    //-----------------------------------------------------------------------
    // Manage field color indicator
    //-----------------------------------------------------------------------
    function setInputColor(currentvalue) {
      let testresult = true;
      let curr = parseInt(currentvalue);
      if( minmaxcheck) {
        if(curr < min || curr > max) testresult = false;
      }
      else {
        if(mincheck) {
          if(curr < min) testresult = false;
        }
        else {
          if (maxcheck)
            if(curr > max) testresult = false;
        }
      }
      console.log('Valid ? ' + testresult);
      return testresult;
    }
    //-----------------------------------------------------------------------
    // Handle any field content modification
    //-----------------------------------------------------------------------
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
          //console.log(Version + 'watch handler: change from: ' + (pkey===""? 'Nothing': pkey) + ' to ' + ckey);
          if(ckey !== "0") field.value = parseInt(ckey);
          status = true;
        }
      }
      valid.value = setInputColor(field.value);
      return status;
    }
    //-----------------------------------------------------------------------
    // Just version
    //-----------------------------------------------------------------------
    function getVersion() { return  Version;}

    return { 
      thenumber,
      msg,
      theclass,
      error,
      Version,
    }
  }
}

</script>

<style scoped>

.isok {color:green; }
.isko { color:red; }

</style>
