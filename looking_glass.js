
$.fn.lookingGlass = function (options) {

    if (options == null) { var options = {}; }

    var x = this.offset().left;
    var y = this.offset().top;
    //  cursorOffset is used to set the position of the looking glass
    //  viewport, relative to the mouse cursor. default is center
    var cursorOffsetX;
    var cursorOffsetY;
    var centeringValue = getDeterminateLength(this);
    var modY;
    var modX;
    var viewportMods; // [ offset , size ]
    var offsetMod = 1;
    var sizeMod = null;
    var shapeModX = 1;
    var shapeModY = 1;
    var radiusMod = 100;
    var shapeMods = [shapeModX, shapeModY, radiusMod];

    if (options["viewportShape"] != null) {
        shapeMods = getShapeMods(options["viewportShape"]);
        shapeModX = shapeMods[0];
        shapeModY = shapeMods[1];
    }
    if (options["viewportSize"] != null) {
        viewportMods = getViewportModifier(options["viewportSize"]);
        offsetMod = viewportMods[0];
        sizeMod = viewportMods[1];
    }
    if (options['viewportOrientation'] != null) {

        var vals = getOrientationValues(options['viewportOrientation'].toUpperCase());

        modY = vals[0] * offsetMod;
        modX = vals[1] * offsetMod;

    } else {
        modY = 4 * offsetMod;
        modX = 4 * offsetMod;
    }

    cursorOffsetX = (centeringValue / shapeModY) / modX;
    cursorOffsetY = (centeringValue / shapeModX) / modY;

    var topImage = $("#lg-top-image");
    var bottomImage = $("#lg-bottom-image");

    buildTopImage(topImage);
    buildBottomImage(sizeMod, shapeMods, bottomImage);

    

    this.mousemove(function (e) {
        trackMouse(x, y, cursorOffsetX, cursorOffsetY, e, bottomImage);
    });

    //needs testing on touch device.
    this.bind('touchmove', function (e) { 
        e.preventDefault();
        trackMouse(x, y, cursorOffsetX, cursorOffsetY, e, bottomImage);

    }, false);


    function getOrientationValues(str) {

        var mod = []; // [0] == x , [1] == y

        // 2 : top , 100 : bottom , 4 : center(default)
        // 2 : left , 100 : right , 4 : center(default)
        switch (str) {

            case 'N':
                mod[0] = 2;
                mod[1] = 4;
                break;

            case 'S':
                mod[0] = 100;
                mod[1] = 4;
                break;

            case 'W':
                mod[0] = 4;
                mod[1] = 2;
                break;

            case 'E':
                mod[0] = 4;
                mod[1] = 100;
                break;

            default:
                mod[0] = 0;
                mod[1] = 0;

        }

        return mod;
    };

    function trackMouse(curX, curY, offX, offY, motionEvent, ele) {
        ele.css({
            left: motionEvent.pageX - curX - offX,
            top: motionEvent.pageY - curY - offY,
            'background-position': (-motionEvent.pageX + curX + offX) + 'px ' + (-motionEvent.pageY + curY + offY) + 'px'
        });

    }

    function getViewportModifier(optionStr) {

        var mods = [];
        switch (optionStr.toUpperCase()) {

            case 'SMALL':
                mods = [2, 2];
                break;

            case 'MEDIUM':
                mods = [1, 1];
                break;


            case 'LARGE':
                mods = [.5, .5];
                break;
        }

        return mods;
    }

    function getShapeMods(shapeMod) {

        var modX, modY, modRadius;

        switch (shapeMod.toUpperCase()) {

            case "SQUARE":
                modX = 1;
                modY = 1;
                modRadius = 0;
                break;

            case "VERTICAL-RECTANGLE":
                modX = 1;
                modY = 2;
                modRadius = 0;
                break;

            case "HORIZONTAL-RECTANGLE":
                modX = 2;
                modY = 1;
                modRadius = 0;
                break;

            case "CIRCLE":

            default:
                modX = 1;
                modY = 1;
                modRadius = 100;

        }

        return [modX, modY, modRadius];
    }

    function buildBottomImage(sizeMod, shapeMods, ele) {

        
        var img = ele.data('src');

        setImgStyles(ele, img, false, sizeMod, shapeMods);

    }

    function buildTopImage(ele) {

        var img = ele.data('src');
        setImgStyles(ele, img, true);
    }

    function setImgStyles(container, image, isTop, sizeMod, shapeMods) {

        if (isTop) {

            container.css({

                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': 100 + '%',
                'height': 100 + '%',
                'background': "url('" + image + "')",
                'background-repeat': 'no-repeat',
                'background-size': 100 + '% auto'

            });

        }
        else {

            var divisor = 2;
            var shapeModY = shapeMods[1];
            var shapeModX = shapeMods[0];

            if (sizeMod != null) { divisor = divisor * sizeMod; }

            var imgDimensionVal = getDeterminateLength(container.parent()) / divisor;
            container.css({

                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': imgDimensionVal / shapeModY,
                'height': imgDimensionVal / shapeModX,
                'background': "url('" + image + "')",
                'border-radius': shapeMods[2] + '%',
                'background-repeat': 'no-repeat',
                'background-size': $("#lg-top-image").width() + 'px auto',
                'overflow': 'hidden'

            });

        }

    }

    function getDeterminateLength(container) {

        var boxWidth = container.width();
        var boxHeight = container.height();

        var determinateLength;

        if (boxWidth != boxHeight) {

            if (boxWidth < boxHeight) {

                determinateLength = boxWidth;

            } else { determinateLength = boxHeight; }

        } else {

            determinateLength = boxWidth;
        }

        return determinateLength;
    }
}





