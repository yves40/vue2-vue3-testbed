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
            <div class="box box1">Box1</div>
            <div class="box box2">Box2</div>
            <div class="box box3">Box3</div>
            <div class="box box4">Box4</div>
        </div>
    </body>
    </html>
</template>

<script>
export default {
    setup() {

        let Version = "grid3, 1.00 Feb 18 2021";

        return {
            Version
        }
    }
}
</script>