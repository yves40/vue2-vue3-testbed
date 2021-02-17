//import Vue from "Vue";
import Router from 'vue-router';
import Home from '../views/Home.vue'
import calculatorRef from "../views/calculatorRef"
import calculatorReactive from "../views/calculatorReactive"
import calculatorComputed from "../views/calculatorComputed"
import calculatorToRefs from "../views/calculatorToRefs"
import about from "../views/About"
import DatadownEventsup from "../views/DatadownEventsup"
import TesterNumfield from "../views/TesterNumfield"
import grid1 from "../views/grid1"

const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/calcref', name: 'calcref',           component: calculatorRef, props: true},
  { path: '/calcreactive', name: 'calcreactive', component: calculatorReactive, props: true},
  { path: '/calccomputed', name: 'calccomputed', component: calculatorComputed, props: true},
  { path: '/calctorefs', name: 'calctorefs', component: calculatorToRefs, props: true},
  { path: '/about',name: 'about', component: about},
  { path: '/ddeu',name: 'ddeu', component: DatadownEventsup},
  { path: '/TesterNumfield',name: 'TesterNumfield', component: TesterNumfield},
  { path: '/grid1',name: 'grid1', component: grid1}
]

//Vue.use(Router);
let router = new Router();
router.addRoutes(routes)

export default router
