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
                    <li class="item"><a href="#">Home</a></li>
                    <li class="item"><a href="#">About</a></li>
                    <li class="item has-submenu">
                        <a tabindex="0">Services</a>
                        <ul class="css-submenu">
                            <li class="subitem"><a href="#">Design</a></li>
                            <li class="subitem"><a href="#">Development</a></li>
                            <li class="subitem"><a href="#">SEO</a></li>
                            <li class="subitem"><a href="#">Copywriting</a></li>
                        </ul>
                    </li>
                    <li class="item has-submenu">
                        <a tabindex="0">Plans</a>
                        <ul class="css-submenu">
                            <li class="subitem"><a href="#">Freelancer</a></li>
                            <li class="subitem"><a href="#">Startup</a></li>
                            <li class="subitem"><a href="#">Enterprise</a></li>
                        </ul>
                    </li>
                    <li class="item"><a href="#">Blog</a></li>
                    <li class="item"><a href="#">Contact</a>
                    </li>
                    <li class="item button"><a href="#">Log In</a></li>
                    <li class="item button secondary"><a href="#">Sign Up</a></li>
                    <li @click="toggleMenu" ref="togglebutton" class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
                </ul>
            </nav>
        </body>
    </html>
</template>

<script>
import { onBeforeUpdate } from '@vue/composition-api';

import ref from "vue";

export default {
    setup(props) {
        const Version = 'menu: 1.06, Mar 10 2021 '
/*
        const toggle = document.querySelector('.toggle');
        const menu = document.querySelector('.css-menu');
*/

        console.clear();
        console.log(Version);
        // let doclist = ref([]);

        function toggleMenu() {
            console.log('Toggle....');
            // console.log(doclist);
            // let classlist = $refs.togglebutton.classList;
            /*
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                toggle.querySelector("a").innerHTML = "<i class='fas fas-bars'></i>";
            }
            else {
                menu.classList.add("active");
                toggle.querySelector("a").innerHTML = "<i class='fas fas-times'></i>";
            }
            */
        }
        // toggle.addEventListener('click', toggleMenu, false);

        return {
            Version, 
            toggleMenu,
            //doclist
        }
    }
}
</script>