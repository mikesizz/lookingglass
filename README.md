# Lookingglass JS <br> ### javascript x-ray image filter

Take one image, stack another image below it.
Look "through" the first image and view the second image.
Simple.

/* lookingglass.js is a project that is still in the works. though it is fully functional in its current state, it is missing quite a few intended features/additions */

###_Currently in the Works:

* Support for various background sizes. Currently confined to "100% auto" or "auto 100%" sizing for your selected images.
* Support for content within the lookingglass viewport
* Overall optimization


###_Use

* Create a container that you would like to hold your images, giving it an ID of your choosing.
* Create 2 divs inside your container and name them lg-top-image and lg-bottom-image.
* Using the data attribute 'src', supply urls to each div created in the previous step. These are the actual images to be layered and viewed.
* Optionally, you may supply an option object as a second argument to the lookingglass initialization function. Read about customization soon.
