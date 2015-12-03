//$(document).ready(function(){
    window.initCanvas = function(option){
	var img = new Image();
	
	imgId = option.imgId;
	imgName = option.imgName;// 'qingting';
	img.src = '/imgdata/'+imgName+'.jpg';

	img.id = imgId;//'commentsBackground';
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