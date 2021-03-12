<template>
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
        </head>
        <body @click="checkTarget">
            <h3>{{Version}}</h3>
            <nav >
                <ul class="css-menu" >
                    <li class="logo"><a href="#">Creative Mind Agency</a></li>
                    <li class="toggle" @click="toggleMenu"><a href="#"><i :class=htmlclass.innerhtml></i></a></li>
                        <li class="item button" v-if="htmlclass.active"><a href="#">Log In</a></li>
                        <li class="item button secondary" v-if="htmlclass.active"><a href="#">Sign Up</a></li>
                        <li class="item" v-if="htmlclass.active"><a href="#">Home</a></li>
                        <li class="item" v-if="htmlclass.active"><a href="#">About</a></li>
                        <li class="item has-submenu" v-if="htmlclass.active">
                            <a @click="toggleServices" tabindex="0">Services</a>
                            <ul class="css-submenu" v-if="htmlclass.activeservices">
                                <li class="subitem"><a href="#">One</a></li>
                                <li class="subitem"><a href="#">Two</a></li>
                                <li class="subitem"><a href="#">Three</a></li>
                                <li class="subitem"><a href="#">Four</a></li>
                            </ul>
                        </li>
                        <li class="item has-submenu" v-if="htmlclass.active">
                            <a @click="togglePlans" tabindex="0">Plans</a>
                            <ul class="css-submenu" v-if="htmlclass.activeplans">
                                <li class="subitem"><a href="#">Plan One</a></li>
                                <li class="subitem"><a href="#">Plan Two</a></li>
                                <li class="subitem"><a href="#">Plan Three</a></li>
                            </ul>
                        </li>
                        <li class="item" v-if="htmlclass.active"><a href="#">Blog</a></li>
                        <li class="item" v-if="htmlclass.active"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </body>
    </html>
</template>

<script>

import { onMounted, reactive } from "@vue/composition-api";

export default {
    setup(props) {
        const Version = 'menu: 1.59, Mar 12 2021 ';

        const desktopwidth = 980;
        const tabletwidth = 700;
        const inactivebar = "fas fa-bars";
        const activebar = "fas fa-times";

        let htmlclass = reactive( {
            innerhtml: 'fas fa-bars',
            active: false,
            activeservices: false,
            activeplans: false
        });

        let thewindow = { 
            width: window.innerWidth,
            height: window.innerHeight
        }
        // Set initial display
        if(thewindow.width >= desktopwidth) {
            htmlclass.active = true;
        }
        else {
            if(thewindow.width >= tabletwidth) {
                htmlclass.active = false;
            }
        }

        console.clear();
        console.log(Version);
        console.log('Width: ' + thewindow.width);

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
        // Close drop down menus if clicked outside
        // See above, drop down are Services and plans
        function checkTarget ( event ) {
            console.log(event.target.innerText);
            let url = event.target;
            if(event.target.innerText.indexOf('Plans') == -1)
                htmlclass.activeplans = false;
            if(event.target.innerText.indexOf('Services') == -1)
                htmlclass.activeservices = false;
        }
        onMounted(() => 
        {
            // Track window width
            window.addEventListener('resize', () => {
                thewindow.width = window.innerWidth;
                // Desktop minimum screen width currently set to 980
                if (thewindow.width > 979) {
                    htmlclass.active = true;
                    htmlclass.innerhtml = activebar;
                }
            })
        })
        return {
            Version, 
            toggleMenu,
            toggleServices,
            togglePlans,
            checkTarget,
            htmlclass
        }
    }
}
</script>