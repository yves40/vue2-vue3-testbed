<template>
<div>
    <div class="moduletitle">{{Version}}</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <!-- For params to be passed, need to set props:true in router/index.js-->
    <div class="menu" id="nav">
      <div><router-link :to="{name: 'calcref',      params: { preset1: 12, preset2: 87}}">Calculator Ref</router-link></div>
      <div><router-link :to="{name: 'calcreactive', params: { preset1: 98, preset2: 1 }}">Calculator Reactive</router-link></div>
      <div><router-link :to="{name: 'calccomputed', params: { preset1: 1, preset2: 98 }}">Calculator Computed</router-link></div>
      <div><router-link :to="{name: 'calctorefs',   params: { preset1: 99, preset2: 99 }}">Calculator ToRefs</router-link></div>
      <div><router-link :to="{name: 'ddeu' }">Data Down Events up</router-link></div>
      <div><router-link :to="{name: 'TesterNumfield', params: { maxvalue: 99, minvalue: 1 } }">Test numeric field</router-link></div>
      <div class="submenu">
        <div class="menuleft"><router-link :to="{name: 'grid1' }">Grid 1st</router-link></div>
        <div class="menucenter"><router-link :to="{name: 'grid2' }">Grid 2nd</router-link></div>
        <div class="menuright"><router-link :to="{name: 'grid3' }">Grid 3rd</router-link></div>
      </div>
      <div class="submenu">
        <div><router-link :to="{name: 'flex1' }">Flex1</router-link></div>
        <div>Flex2</div>
        <div>Flex3</div>
        <div>Flex4</div>
        <div><router-link :to="{name: 'responsive' }">Responsive CSS</router-link></div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  setup(props, context) {
    const Version = 'topmenu 1.15: Mar 08 2021'
    return {
      Version
    }
  }
}
</script>
