# Lookingglass JS 
### J.X.I.F. - Javascript X-Ray Image Filter

Take one image, stack another image below it.
Look "through" the first image and view the second image.
Simple.

*lookingglass.js is a project that is still in the works. though it is fully functional in its current state, it is missing quite a few intended features/additions*

###_Currently in the Works:

* Support for various background sizes. Currently confined to "100% auto" or "auto 100%" sizing for your selected images.
* Support for content within the lookingglass viewport
* Overall optimization

###_Use

* Create a container that you would like to hold your images, giving it an ID of your choosing.
```html
<div id="my-container">
</div>
```
* Create 2 divs inside your container and name them lg-top-image and lg-bottom-image.
```html
<div id="my-container">
	<div id="lg-top-image"></div> <!-- The image you see on the page -->
	<div id="lg-bottom-image"></div> <!-- The image you will "reveal" in the lookingglass -->
</div>
```
* Using the data attribute 'src', supply image locations to each div created in the previous step. These are the actual images to be layered and viewed.
```html
<div id="my-container">
	<div id="lg-top-image"  data-src="img/image_above.jpg"></div>
    <div id="lg-bottom-image" data-src="img/image_below.jpg"></div>
</div>
```
* Call the lookingglass initialization function when your page loads.
```javascript
window.onload = function(){
	
	lookingGlass("my-container");

};

//or if you prefer...

$(document).ready(function(){

    lookingGlass("my-container");

});
```
* Optionally, you may supply an object containing lookingglass customization options as a second argument to lookingglass(). Read about customization below.

###_Options

Lookingglass.js comes prepackaged with a few options to allow user customization. These options can be specified and enabled by passing them to lookingglass() via an Option Object.
```javascript
lookingGlass("my-container" , {
	
	option: value,
	option: value,
	// etc...

});
```
Customization Options Currently Available:

* viewportSize : "small" , "medium" , "large" 
* viewportShape : "circle" , "square" , "horizontal-rectangle" , "vertical-rectangle"
* viewportOrientation: 'N' , 'S' , 'W' , 'E'


