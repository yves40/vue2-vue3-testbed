<template>
<div>
    <div class="moduletitle">{{Version}}</div>
    <div>
      <!-- This code is vue2 specific. Things are different in vue3. No need to write @value... -->
      <numfield v-model="age" @value="age = $event"  @isvalid="agevalid = $event" minvalue="10" maxvalue="120" message="Age please:"/>
      <numfield v-model="size" @value="size = $event"  @isvalid="sizevalid = $event" maxvalue="200" message="Size please:"/>
      <numfield v-model="weight" @value="weight = $event"  @isvalid="weightvalid = $event" minvalue="30" message="Weight please:"/>
      <numfield v-model="freezone" @value="freezone = $event"  message="Free input please:"/>
      <button type="submit" :disabled='!buttonflag'>Ready to send</button>
      <div>
        <span>Result : </span>
        <span>{{ thesum }}</span>
      </div>     
    </div>
</div>

</template>

<script>

import numfield from "./numfield"

import { onMounted, ref, watch, computed, onUnmounted } from "@vue/composition-api";

export default {
  props: {
  },
  components: {
    numfield,
  },
  name: 'TesterNumfield',
  setup(props, context) {

    let Version = 'TesterNumfield: 1.83, Jan 05 2021 '

    let age = ref(5);
    let agevalid = ref(false);
    let size = ref(175);
    let sizevalid = ref(true);
    const weight = ref(100);
    let weightvalid = ref(true);
    let freezone = ref(100);
    let thesum = computed( () => age.value+size.value+weight.value+freezone.value);
    let buttonflag = computed( () => agevalid.value && sizevalid.value && weightvalid.value );

    // Test lifecycle handlers
    console.clear();
    onUnmounted(() =>  { console.log(Version + 'UnMounted');})
    onMounted(() =>  {console.info(Version + 'Mounted');})
    
    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [age, agevalid, size, sizevalid, weight, weightvalid], ([currentage, currentagevalid, currentsize, currentsizevalid, currentweight, currentweightvalid], 
                                              [prevage, prevagevalid, prevsize, prevsizevalid, prevweight, prevweightvalid]) => {
      console.log('-- 2');
      console.log(Version + currentage + "/" + prevage + ' Age valid:' + agevalid.value);
      console.log(Version + currentsize + "/" + prevsize + ' Size valid:' + sizevalid.value);
    })

    // Check button 
    function readyTogo() {
      console.log('****************** ' + agevalid.value);
      return agevalid.value;
    }

    // Utilities
    function getVersion() { return  Version; }

    return { 
      age,
      agevalid,
      size,
      sizevalid,
      weight,
      weightvalid,
      freezone,
      thesum,
      buttonflag,
      Version,
    }
  }
}

</script>

<style scoped>
#outer-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  grid-auto-flow: column;
}
#outer-grid > div {
  background-color: orangered;
  color: white;
  font-size: 4vw;
  padding: 8px;
}
#inner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}
#inner-grid > div {
  background: salmon;
  padding: 8px;
}
</style>

