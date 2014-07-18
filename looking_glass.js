function lookingGlass( container , options ){

	if( options == null ){ var options = { }; }

    var div = document.getElementById( container );
    var x = div.offsetLeft;
    var y = div.offsetTop;
	//  cursorOffset is used to set the position of the looking glass
    //  viewport relative to the mouse cursor. default is center
    var cursorOffsetX;
   	var cursorOffsetY;
	var centeringValue = getDeterminateLength( $(div) );
	var modY;
	var modX;
	if( options['viewportPosition'] != null ){

		var vals = getOrientationValues( options['viewportPosition'].toUpperCase() );
		
		modY = vals[0];
		modX = vals[1];

	}else{

		modY = 4; 
		modX = 4; 

	}

	cursorOffsetX = centeringValue / modX;
	cursorOffsetY = centeringValue / modY;

	buildTopImage();
    buildBottomImage();

	$(document).mousemove(function ( e ){
		
	    trackMouse( x , y , cursorOffsetX , cursorOffsetY , e );

	});

	div.addEventListener('touchmove', function ( e ) {

		e.preventDefault();
		trackMouse( x , y , cursorOffsetX , cursorOffsetY , e );
 	
 	}, false);

}// !lookingGlass()

function getOrientationValues( str ){

	var mod = []; // [0] == x , [1] == y

	// 2 : top , 100 : bottom , 4 : center(default)
	// 2 : left , 100 : right , 4 : center(default)
	switch( str ){

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
				mod[0] = 4;
				mod[1] = 4;

		}

	return mod;

}

function trackMouse( curX , curY , offX , offY , motionEvent ){

	$("#lg-bottom-image").css({ 

		left: motionEvent.pageX-curX-offX , 
		top: motionEvent.pageY-curY-offY , 
		'background-position': ( -motionEvent.pageX + curX + offX ) + 'px ' + ( -motionEvent.pageY + curY + offY ) + 'px'

	});
}

function buildBottomImage(){

	var imgContainer = $("#lg-bottom-image");
	var img = imgContainer.data('src');

	setImgStyles( imgContainer , img , false );

}

function buildTopImage(){

	var imgContainer = $("#lg-top-image");
	var img = imgContainer.data('src');

	setImgStyles( imgContainer , img , true );

}

function setImgStyles( container , image , isTop ){

	if( isTop ){

		container.css({
	
			'position' : 'absolute' ,
			'left' :0 ,
			'top' :0 ,
			'width' :100+'%' ,
			'height' :100+'%' ,
			'background' : "url('"+image+"')" ,
			'background-repeat' : 'no-repeat' ,
			'background-size' : 100+'% auto'
	
		});

	}else{

		var imgDimensionVal = getDeterminateLength( container.parent() )/2;
		container.css({
	
			'position' : 'absolute' ,
			'left' :0 ,
			'top' :0 ,
			'width' : imgDimensionVal ,
			'height' : imgDimensionVal ,
			'background' : "url('"+image+"')" ,
			'border-radius' : 100+'%' ,
			'background-repeat' : 'no-repeat' ,
			'background-size' : $("#lg-top-image").width() +'px auto'
	
		});

	}

}

function getDeterminateLength( container ){

	var boxWidth = container.width();
	var boxHeight = container.height();

	var determinateLength;

	if( boxWidth != boxHeight ){

		if( boxWidth < boxHeight ){
	
			determinateLength = boxWidth;
	
		}else{ determinateLength = boxHeight; }

	}else{ 

		determinateLength = boxWidth; 
	}

	return determinateLength;
}