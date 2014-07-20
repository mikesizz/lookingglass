# Lookingglass JS
### javascript x-ray image filter

Take one image, stack another image below it.
Look "through" the first image and view the second image.
Simple.

lookingglass.js is a project that is still in the works. though it is fully functional in its current state, it is missing quite a few intended features/additions

##Currently in the Works:

* support for various background sizes. currently confined to "100% auto" or "auto 100%" sizing for your selected images.
* support for content within the lookingglass viewport


## Use

* create a container that you would like to hold your images, giving it an ID of your choosing
'''html
<div id="my-container">
</div>
'''
* create 2 divs inside your container and name them lg-top-image and lg-bottom-image.
'''html
<div id="my-container">
<div id="lg-top-image"></div>
<div id="lg-bottom-image"></div>
</div>
'''
* using the data attribute 'src', supply urls to each div created in the previous step. these are the actual images to be layered and viewed
'''html
<div id="my-container">
<div id="lg-top-image" data-src="IMAGE SOURCE"></div>
<div id="lg-bottom-image" data-src="IMAGE SOURCE"></div>
</div>
'''
* call the lookingglass initialization function, passing your container's ID in as the first argument.
'''javascript
<script type="text/javascript">

	window.onload=function(){
		
		lookingglass("my-container");

	};

</script>
'''
* optionally, you may supply an option object as a second argument to the lookingglass initialization function. read about customization below.
