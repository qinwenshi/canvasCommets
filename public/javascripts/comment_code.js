//$(document).ready(function(){
 window.initCanvas = function(option){
	var img = new Image();
	var qiniuServer = 'http://7xov9r.com1.z0.glb.clouddn.com/',
	qiniuPicCompress = '?imageView/2/w/1600/h/800';
	imgId = option.imgId;
	imgName = option.imgName;
	img.src = qiniuServer +imgName+'.jpg'+qiniuPicCompress;

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
			id     :img.id, 
    		picUrl: img.src,
    		width  :'970',
    		height :'650',
    		comments: savedComments
		}));  
	}
}
//});