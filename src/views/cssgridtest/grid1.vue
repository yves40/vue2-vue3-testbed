<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Grid test 1</title>
        </head>
        <body>
            <div class="grid">
                <div class="title">{{Version}}</div>
                <div class="header">Header</div>
                <div class="sidebar">Side bar</div>
                <div class="content">
                    <p>A</p>
                    <p>B</p>
                </div>
                <div class="footer">Footer</div>
            </div>
        </body>
    </html>
</template>
<script>
export default {
    setup() {

        let Version = "grid1, 1.00 Feb 18 2021";

        return {
            Version
        }
    }
}
</script>