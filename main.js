
/* 1. Grab the input*/ 

    document.querySelector(".button-container").addEventListener('click',function(e){
        var input=document.querySelector(".input-container").value;
        searchGify( input );
    });
    
    document.querySelector(".input-container").addEventListener('keyup',function(e){
            if(e.keyCode===13){
                var input=document.querySelector(".input-container").value;
                searchGify(input );
            }         
    });

    
/* 2. Search gifs and fetch it from api */

    function searchGify(searchQuery)
    {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;
    var gifyAjaxCall = new XMLHttpRequest();
    gifyAjaxCall.open('GET',url);
    gifyAjaxCall.send();

    gifyAjaxCall.addEventListener('load',function(data)
    {
        var actualData= data.target.response;
        pushToDom(actualData); 
    });
}

/* 3. Show me the gifs*/ 

    function pushToDom(input){
        var response=JSON.parse(input);
        var imageUrls=response.data;
        var container=document.querySelector('.jscontainer');
       container.innerHTML="";
       
        // loop through the array 
        imageUrls.forEach(function(image){
            var src=image.images.fixed_height.url;
            container.innerHTML+= "<img src=\"" +src+ "\" class=\"container-image\">";
        });
       
    }

