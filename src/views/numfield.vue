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
  emits: 'isvalid',
  //-----------------------------------------------------------------------
  // Boot time ==> Setup
  //-----------------------------------------------------------------------
  setup(props, {emit} ) {

    let Version = 'numfield: 2.38, Jan 05 2021 '
    const thenumber = modelNumberWrapper(props, emit, 'value');
    const min = props.minvalue;
    const max = props.maxvalue;
    let error = "None";
    let msg;
    let valid = ref(inRangeCheck(thenumber.value));

    msg = props.message;
    // Check min max if specified 
    if(!isNaN(min)&&!isNaN(max)) {
      msg = props.message + ' ' + min + ' to ' + max;
    }
    else{ 
      if(!isNaN(min)) { msg = props.message + ' Min:' + min; };
      if(!isNaN(max)) { msg = props.message + ' Max:' + max; };
    }
    // Control display class to be used 
    let theclass = computed( 
       () => {
        console.log(Version + ' Valid flag emitted : ' + valid.value);
        emit('isvalid', valid.value);
         if (!valid.value) {
            return 'isko'
         }
        else {
            return 'isok'
        }
      }
    )

    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [thenumber], ([ckey], [pkey]) => {
      valid.value = inRangeCheck(thenumber.value)
      console.log('--');
      console.log(Version + 'Valid ? ' + valid.value);
    })
    //-----------------------------------------------------------------------
    // Check boundaries
    // Called on 1st load and then for each key input
    //-----------------------------------------------------------------------
    function inRangeCheck(number) {
      let isvalid = true;
      if(!isNaN(min)&&!isNaN(max)) {
        console.log(Version + ' ' + number);
        if(number < min || number > max) isvalid = false;
      }
      else {
        if(!isNaN(min)) {
          if(number < min) isvalid = false;
        }
        else {
          if(!isNaN(max))
            if(number > max) isvalid = false;
        }
      }
      return isvalid;
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
