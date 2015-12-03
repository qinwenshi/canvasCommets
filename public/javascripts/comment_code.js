//$(document).ready(function(){
 window.initCanvas = function(option){
	var img = new Image();
	var qiniuServer = 'http://7xov9r.com1.z0.glb.clouddn.com/',
	qiniuPicCompress = '?imageView/2/w/1600/h/700';
	imgId = option.imgId;
	imgName = option.imgName;
	img.src = qiniuServer +imgName+'.jpg'+qiniuPicCompress;
    imgWidth = option.width || '970';
    imgHeight = option.height || '650';
	img.id = imgId;
    $('<div id = "preViewPic" class="preViewPic"/>').appendTo($('.container'));
    
    var savedComments= [];
    $.ajax('/comments/' + imgId)
        .done(function (data) {
            
            if (!!data) {
            	savedComments = JSON.stringify(data);
                createContainer();
            }

        })
        .fail(function () {

        });

	function createContainer(){
		$('#preViewPic').append(initContainer({
			id     : img.id, 
    		picUrl : img.src,
    		width  : imgWidth,
    		height : imgHeight,
    		comments: savedComments
		}));  
	}
}
//});