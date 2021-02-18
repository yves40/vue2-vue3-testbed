<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h3>{{Version}}</h3>
        <div class="wrapper">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus omnis repellat hic alias amet, architecto perspiciatis incidunt, numquam aliquam iure! Suscipit quidem corrupti dolores, tempora iusto iure? Tempore, velit.</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aliquid explicabo suscipit provident corrupti doloremque, cumque in iusto minima veniam error delectus qui! Unde mollitia eligendi eum nisi odio repellat voluptas delectus dolorem asperiores iusto repudiandae ab molestiae quam, sunt cum nemo ullam atque suscipit, temporibus saepe! Eligendi, asperiores veniam!</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus omnis repellat hic alias amet, architecto perspiciatis incidunt, numquam aliquam iure! Suscipit quidem corrupti dolores, tempora iusto iure? Tempore, velit.</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aliquid explicabo suscipit provident corrupti doloremque, cumque in iusto minima veniam error delectus qui! Unde mollitia eligendi eum nisi odio repellat voluptas delectus dolorem asperiores iusto repudiandae ab molestiae quam, sunt cum nemo ullam atque suscipit, temporibus saepe! Eligendi, asperiores veniam!</div>
            <div class="nested">
                <div>Lorem ipsum dolor sit.</div>
                <div>Lorem ipsum dolor sit.</div>
                <div>Lorem ipsum dolor sit.</div>
                <div>Lorem ipsum dolor sit.</div>
                <div>Lorem ipsum dolor sit.</div>
                <div>Lorem ipsum dolor sit.</div>
            </div>
            <div>Lorem ipsum dolor sit amet.</div>
            <div>Lorem ipsum dolor sit amet.</div>
        </div>
    </body>
    </html>
</template>

<script>
export default {
    setup() {

        let Version = "grid2, 1.02 Feb 18 2021";

        return {
            Version
        }
    }
}
</script>