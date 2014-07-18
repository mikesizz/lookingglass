<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <title>LookingGlass.js Demo</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
    <script type="text/javascript" src="js/jquery-1.6.1.min.js"></script>
    <script type="text/javascript" src="js/looking_glass.js"></script>

</head>
<body>
<div id="demo-container">
       
    <div id="my-container">

        <div id="lg-top-image"  data-src="/looker/img/image_above.jpg"></div>
        <div id="lg-bottom-image" data-src="/looker/img/image_below.jpg"></div>

    </div><!-- End lg-container  -->

</div><!-- End demo-container  -->

<!-- initalize looking glass by passing the desired container's id -->
<script type="text/javascript">

    $(document).ready(function(){

        lookingGlass("my-container");

    });

</script>

</body>
</html>
