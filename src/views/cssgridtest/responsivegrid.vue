<template>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Responsive Grid by Traversy</title>
    </head>
    <body>
        <!-- Header -->
        <header id="showcase" class="rgrid">
            <div class="bg-image"></div>
            <div class="content-wrap">
                <h1>Welcome to Acme web solutions</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, veritatis! Odio architecto iste facere, minima amet eius quod magnam vero.</p>
                <a href="#section-b" class="btn">Read more</a>
            </div>
        </header>
        <!-- Main area --> 
        <main id="rmain">
            <!-- section A -->
            <section id="section-a" class="rgrid">
                <div class="content-wrap">
                    <h2 class="content-title">Web application Development</h2>
                    <div class="content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim amet magnam ipsam corrupti. Modi repellendus deleniti sint ipsum. Odio incidunt libero aperiam perspiciatis numquam corrupti nobis laudantium officiis, voluptatum ipsa qui optio, provident rem iure quae, ea dignissimos ut veniam.</p>
                    </div>
                </div>
            </section>
            <!-- Section b --> 
            <section id="section-b" class="rgrid">
                <ul>
                    <li>
                        <div class="card">
                            <img src="../../assets/programming.jpg" alt="Programming Image">
                            <div class="card-content">
                                <h3 class="card-title">Web Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quo nemo iure laudantium ipsum quam quasi. Fuga voluptas quo aperiam?</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img src="../../assets/mobile.jpg" alt="Mobile Image">
                            <div class="card-content">
                                <h3 class="card-title">Mobile Application</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quo nemo iure laudantium ipsum quam quasi. Fuga voluptas quo aperiam?</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img src="../../assets/marketing.jpg" alt="Marketing Image">
                            <div class="card-content">
                                <h3 class="card-title">Tech Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quo nemo iure laudantium ipsum quam quasi. Fuga voluptas quo aperiam?</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <!-- Section C --> 
            <section id="section-c" class="rgrid">
                <div class="content-wrap">
                    <h2 class="content-title">We handle all of your digital needs</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur natus nulla aspernatur odit ratione velit cum suscipit esse obcaecati aliquid blanditiis, eaque ducimus dolorem voluptate veritatis ipsam sit dicta?</p>
                </div>
            </section>
            <!-- Section D -->
            <section id="section-d" class="rgrid">
                <div class="box">
                    <h2 class="content-title">Contact Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem laborum possimus porro reiciendis nisi recusandae debitis error ut incidunt.</p>
                    <p>contact@acmewebsolutions.test</p>
                </div>
                <div class="box">
                    <h2 class="content-title">About our company</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nisi. Rem tempora reprehenderit qui ad eum. Qui dolorem sed quasi ullam aperiam tenetur harum dolores consectetur. Quis nobis maxime odit aperiam excepturi nostrum recusandae voluptatibus.</p>
                </div>
            </section>
        </main>
        <!-- Footer -->
        <footer id="main-footer" class="rgrid">
            <div>Acme Web solutions</div>
            <div>Project by <a href="http://traversymedia.com" target="_blank">Traversy Media</a></div>
        </footer>
    </body>
</html>
</template>