<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
        </head>
        <body>
            <h3>{{Version}}</h3>
            <nav>
                <ul class="css-menu">
                    <li class="logo"><a href="#">Creative Mind Agency</a></li>
                    <li @click="toggleMenu" ref="togglebutton" class="toggle"><a href="#"><i :class=htmlclass.innerhtml></i></a></li>
                </ul>
                <li class="item button"><a href="#">Log In</a></li>
                <li class="item button secondary"><a href="#">Sign Up</a></li>
                <div v-if="htmlclass.active">
                    <li class="item"><a href="#">Home</a></li>
                    <li class="item"><a href="#">About</a></li>
                    <li class="item has-submenu">
                        <a @click="toggleServices" tabindex="0">Services</a>
                        <div v-if="htmlclass.activeservices">
                            <ul class="css-submenu">
                                <li class="subitem"><a href="#">Service 1</a></li>
                                <li class="subitem"><a href="#">Service 2</a></li>
                                <li class="subitem"><a href="#">Service 3</a></li>
                                <li class="subitem"><a href="#">Service 4</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="item has-submenu">
                        <a @click="togglePlans" tabindex="0">Plans</a>
                        <div v-if="htmlclass.activeplans">
                            <ul class="css-submenu">
                                <li class="subitem"><a href="#">Plan One</a></li>
                                <li class="subitem"><a href="#">Plan Two</a></li>
                                <li class="subitem"><a href="#">Plan Three</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="item"><a href="#">Blog</a></li>
                    <li class="item"><a href="#">Contact</a></li>
                 </div>
            </nav>
        </body>
    </html>
</template>

<script>

import { reactive, computed } from "@vue/composition-api";

export default {
    setup(props) {
        const Version = 'menu: 1.30, Mar 10 2021 '

        let htmlclass = reactive( {
            innerhtml: 'fas fa-bars',
            active: false,
            activeservices: false,
            activeplans: false
        });
        const inactivebar = "fas fa-bars";
        const activebar = "fas fa-times";


        console.clear();
        console.log(Version);

        function toggleMenu() {
            if (!htmlclass.active) {
                htmlclass.active = true;
                htmlclass.innerhtml = activebar;
                htmlclass.activeservices = false;
            }
            else {
                htmlclass.active = false;
                htmlclass.innerhtml = inactivebar;
                htmlclass.activeservices = false;
            }
        }
        function toggleServices() {
            if(htmlclass.activeservices) {
               htmlclass.activeservices = false; 
            }
            else {
               htmlclass.activeservices = true; 
               htmlclass.activeplans = false;
            }
        }
        function togglePlans() {
            if(htmlclass.activeplans) {
               htmlclass.activeplans = false; 
            }
            else {
               htmlclass.activeplans = true; 
               htmlclass.activeservices = false;
            }
        }

        return {
            Version, 
            toggleMenu,
            toggleServices,
            togglePlans,
            htmlclass
        }
    }
}
</script>