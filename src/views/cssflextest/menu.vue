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
                    <li @click="toggleMenu" ref="togglebutton" class="toggle"><a href="#"><i :class=htmlclass.innerhtml></i></a></li>
                </ul>
            </nav>
        </body>
    </html>
</template>

<script>

import { ref, reactive } from "vue";

export default {
    setup(props) {
        const Version = 'menu: 1.19, Mar 10 2021 '

        let htmlclass = reactive( {
            innerhtml: 'fas fa-bars'
        });
        const inactivebar = "fas fa-bars";
        const activebar = "fas fa-times";
        let active = false;


        console.clear();
        console.log(Version);

        function toggleMenu() {
            if (!active) {
                active = true;
                console.log('Set innerhtml to ' + activebar);
                htmlclass.innerhtml = activebar;
            }
            else {
                active = false;
                console.log('Set innerhtml to ' + inactivebar);
                htmlclass.innerhtml = inactivebar;
            }
        }
        // toggle.addEventListener('click', toggleMenu, false);

        return {
            Version, 
            toggleMenu,
            htmlclass
        }
    }
}
</script>