<template>
  <div id="app">
    <div id="header">{{Topmessage}}</div>
    <topmenu/>
    <div id="appzone">
      <router-view/>
    </div>
    <div id="footer">
      {{Version}}
    </div>
  </div>
</template>

<script>
  import topmenu from "./views/topmenu";

  export default {
    components: {
      topmenu
    },
    setup() {
      const Version = "App 1.41, Sep 20 2020";
      const Topmessage = "Vue3 integration test in Vue2"

      return { Version, Topmessage }
    }  
  }
</script>
