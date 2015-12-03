$(document).ready(function(){
	var img = new Image();
	
	imgId = 2;
	imgName = 'kindle_hardware';
	img.src = '/imgdata/'+imgName+'.jpg';

	img.id = 'commentsBackground';
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
    		height :'600',
    		comments: savedComments
		}));  
	}
});