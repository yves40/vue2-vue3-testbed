<template>
<div>
    <div class="moduletitle">{{Version}}</div>
    <div>
      <!-- This code is vue2 specific. Things are different in vue3. No need to write @value... -->
      <numfield v-model:age="age" @value="age = $event" minvalue="10" maxvalue="120" message="Age please:"/>
      <numfield v-model="size" @value="size = $event" maxvalue="210" message="Size please:"/>
      <numfield v-model="weight" @value="weight = $event" minvalue="50" message="Your weight:"/>
      <numfield v-model="freezone" @value="freezone = $event" message="Free number"/>
      <div>
        <span>Result : </span>
        <span>{{ thesum }}</span>
      </div>     
    </div>
</div>

</template>

<script>

import numfield from "./numfield"

import { onMounted, onBeforeUnmount, ref, watch, computed } from "@vue/composition-api";

export default {
  props: {
  },
  components: {
    numfield,
  },
  name: 'TesterNumfield',
  setup(props, context) {

    let Version = 'TesterNumfield: 1.30, Sep 27 2020 '

    let age = ref(45);
    let size = ref(175);
    const weight = ref(100);
    let freezone = ref(100);
    let thesum = computed( () => age.value+size.value+weight.value+freezone.value)

    // Test lifecycle handlers
    onBeforeUnmount(() =>  { console.log(Version + 'UnMounted');})
    onMounted(() =>  {console.log(Version + 'Mounted');})
    
    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [age], ([c1], [p1]) => {
      console.log("**** " + c1 + "/" + p1 )
    })

    // Utilities
    function getVersion() { return  Version; }

    return { 
      age,
      size,
      weight,
      freezone,
      thesum,
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

