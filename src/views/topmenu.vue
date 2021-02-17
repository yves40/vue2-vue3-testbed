<template>
<div>
    <div class="moduletitle">{{Version}}</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <!-- For params to be passed, need to set props:true in router/index.js-->
    <div id="nav">
      <router-link :to="{name: 'calcref',      params: { preset1: 12, preset2: 87}}">Calculator Ref</router-link><br>
      <router-link :to="{name: 'calcreactive', params: { preset1: 98, preset2: 1 }}">Calculator Reactive</router-link><br>
      <router-link :to="{name: 'calccomputed', params: { preset1: 1, preset2: 98 }}">Calculator Computed</router-link><br>
      <router-link :to="{name: 'calctorefs',   params: { preset1: 99, preset2: 99 }}">Calculator ToRefs</router-link><br>
      <router-link :to="{name: 'ddeu' }">Data Down Events up</router-link><br>
      <router-link :to="{name: 'TesterNumfield', params: { maxvalue: 99, minvalue: 1 } }">Test numeric field</router-link><br>
      <router-link :to="{name: 'grid1' }">Grid 1st sample></router-link>
  </div>
</div>
</template>

<script>

export default {
  setup(props, context) {
    const Version = 'topmenu 1.06: Aug 28 2020'
    return {
      Version
    }
  }
}
</script>