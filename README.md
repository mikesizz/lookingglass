# Lookingglass JS - Dev Branch
### les make some shi-

this is the dev branch for lookingglass.js. the issues listed below are the current goals and plans that i have in mind, but feel free to use [this issue](https://github.com/mikesizz/lookingglass/issues/5) to leave any new ideas, questions or criticisms.

##_On the Table

###The new Content Container Model

the biggest goals for lookingglass atm is to let the developer have the ability to use the other background-size values such as cover and contain, as well as the ability to have content inside the lookingglass "area" itself.

both of these goals can be achieved by using the new content model, which provides a new siblings to the top and bottom image elements, along with its important child element.

```html
<div id="my-container">

    <div id="lg-top-image"  data-src="img/top.jpg"></div>
    <div id="lg-bottom-image" data-src="img/bottom.jpg">

    	<div id="img-box">
        	<div id="relative-box">
            </div>
        </div>

    </div><!-- !lg-bottom-image -->
</div>
```

the "#img-box" element will provide the container for images that are using the cover and contain background-size values. at the same time it will provide the "#relative-box" parent element for any content elements that the developer would like to be revealed through the lookingglass viewport. 

at the moment these interior elements can be placed using the top, bottom, left, and right attributes, as they must be absolutely positioned to behave correctly. also, they will be oriented to the images height and width, something that should be considered with all measurements and sizing.

##_Problems

for some reason the background image being revealed visually "wiggles" if the images fills the browser window in any way and the user moves the mouse cursor to a point where any edge of the lookingglass viewport bleeds off of the browser viewports boundaries. 

this issue only happens with chrome browser and has been one of the main reasons i have yet to release these updates. an issue has been opened for this bug at [this page](https://github.com/mikesizz/lookingglass/issues/4). feel free to give it a go and see if you cant get it to stop wiggling.

###More updates to come soon. In the meantime check out the issues and feel free to jump in!