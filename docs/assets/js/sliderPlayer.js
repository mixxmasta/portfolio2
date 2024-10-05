$(document).ready(function(){
  //alert("hello");
   let release = "../portfolio2/assets/json/projects.json";
   let defaultImg = "../../portfolio2/images/PipeLine6.jpg";
   let myData,myText3, coverData, coverDataDiv,projectList,slideShow, grid;

   let slideShow1, slideShow2, slideShow3, slideShow4, slideShow5, slideShow6;
   //let i;

   
   


   let pad = 30, cols = 3, newleft, newtop;
   DynamicCover(); 

  

 });//end document ready


function removeDiv(){

  document.getElementById("releases").removeChild(coverDataDiv);

}


function DynamicCover(){



  $.ajax(headerSettings()).done(function(response){


    
    //let htmlDiv;
    //let dynamicCoverImage;
    coverData = response.projectCover[0];
    coverDataDiv = document.createElement("div");
    coverDataDiv.classList.add('songInfo');
    coverDataDiv.innerHTML = "<div class='slideCover'>"+ "<br>" + '<p class="CoverTitle">' + coverData.title + '</p>' + '<p class="coverDescript">' + coverData.descript + '</p>'     +"</div>";
    //coverDataDiv.innerHTML = "<div class='mySlides2'>"+ "<br>" + '<p class="coverDescript">' + coverData.descript + '</p>'  +"</div>";

    let releaseDiv = document.createElement("div");
    releaseDiv.setAttribute("id","releases");

    document.getElementById('form1').appendChild(releaseDiv);
    document.getElementById("releases").appendChild(coverDataDiv);

  });

}






function headerSettings(){

  //let release = "../assets/json/projects.json";
  let settings = {


    'cache': false,
    'mimeType': "application/json",
    'dataType': "json",
    "async": true,
    "crossDomain": true,
    "url": "../portfolio2/assets/json/projects.json",
    "method": "GET",
    "headers": {
    "accept": "application/json",
    "Access-Control-Allow-Origin":"*"
     }
    }

  return settings;
}


function loadSlide(){
 
 
  $.ajax(headerSettings()).done(function(response){

    //coverData = response.projectCover[0];
    //coverData = response.projectCover[0];
    //projectList = response;
    let projectList = response.projects;

    
    myData = response;

   
    /*coverDataDiv = document.createElement("div");
    coverDataDiv.classList.add('songInfo');
    coverDataDiv.innerHTML = "<div class='mySlides2'>"+ "<br>" + '<p>' + coverData.title + '</p>'  +"</div>";*/
    //coverDataDiv.innerHTML = "<div class='mySlides2'><img class='thumbCover' src='"+ coverData.imgPath + "'/>"+ "<br>" + '<p>' + coverData.title + '</p>'  +"</div>";
   

   //<p class='title'>" + projectList[i].title + "</p> 
    for (i = 0; i < 4; i++)
    {

      slideShow1 =document.createElement("div");
      slideShow1.classList.add('songInfo');
      //slideShow.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides fade'><img class='thumb' src='" + projectList[i].imgPath+"'/>" + '<p class="title">' + 
      slideShow1.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides'><img class='thumb' src='" + 
      projectList[i].imgPath +"'name='" + projectList[i].imgBig + "'/>" + "<p class='title'>" + 
      projectList[i].title + 
      "</p>" + '</div></li>' + "<div class='break'></div>" + '<li class="descript-li" ><div id="jobDescrpitBox2"><span class="descript-Title">Description:</span><p class="descripTxt">' + 
      projectList[i].descript  + '</p>' + ' <span class="techTitle">Tech/Stack:</span> <p class="techDescript">' + 
      projectList[i].techStack + '</p>' + '<div/></li>' + "</div></ul>";
     
      //document.getElementById("releases").appendChild(coverDataDiv);
      //releaseDiv.appendChild(slideShow1);
      let releaseDiv = document.createElement("div");
      releaseDiv.setAttribute("id","releases");

      document.getElementById('form1').appendChild(releaseDiv);
      //document.getElementById("releases").appendChild(coverDataDiv);
     
      document.getElementById("releases").appendChild(slideShow1);
      

    }




    $('#releases img').click(function(){

    
     toggleFeatOverlay();

      let myurl = "../../portfolio2/assets/images/agent/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".png", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();


      let getAlt = $(this).attr('alt')

      ball(myIn,getAlt);



     ////////////////////Feature Picture Overlay////////////////////////


      //toggleFeatOverlay();

     });//end of click song image

     
     

    $('.xbutton').click(
    function()
    {

      $('#featoverlay').hide();
      $('#boxWrap').hide();
      //$('#alttext').fadeOut('slow');
       // alert('click Me');

      return false;


    });




    $('#releases img').hover(function(){
       $('#releases img').css('cursor', 'pointer');

    });




   

    $('#imgBox').mouseout(
    function()
    {

        $('#alttext').fadeOut('slow');
        return false;

    });

   
  });//end new ajax


  return false;
  
}








function loadSlide2(){


  $.ajax(headerSettings()).done(function(response){

    coverData = response.projectCover[0];
    //coverData = response.projectCover[0];
    //projectList = response;
   
    let projectList2 = response.projects2;

    
    myData = response;


    //coverDataDiv = document.createElement("div");
    //coverDataDiv.classList.add('songInfo');
 
    //coverDataDiv.innerHTML = "<div class='mySlides'><img class='thumb' src='"+ coverData.imgPath + "'/>"+ "<br>" + '<p>' + coverData.title + '</p>'  +"</div>";
    //document.getElementById("releases").appendChild(coverDataDiv);

   //<p class='title'>" + projectList[i].title + "</p> 
    for (i = 0; i < 4; i++)
    {

      slideShow2 = document.createElement("div");
      slideShow2.classList.add('songInfo');
      //slideShow.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides fade'><img class='thumb' src='" + projectList[i].imgPath+"'/>" + '<p class="title">' + 
      slideShow2.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides'><img class='thumb' src='" + 
      projectList2[i].imgPath +"'name='" + projectList2[i].imgBig + "'/>" + "<p class='title'>" + 
      projectList2[i].title + 
      "</p>" + '</div></li>' + "<div class='break'></div>" + '<li class="descript-li" ><div id="jobDescrpitBox2"><span class="descript-Title">Description:</span><p class="descripTxt">' + 
      projectList2[i].descript  + '</p>' + ' <span class="techTitle">Tech/Stack:</span> <p class="techDescript">' + 
      projectList2[i].techStack + '</p>' + '<div/></li>' + "</div></ul>";
     
      //document.getElementById("releases").appendChild(coverDataDiv);
      //releaseDiv.appendChild(slideShow1);
      let releaseDiv = document.createElement("div");
      releaseDiv.setAttribute("id","releases");

      document.getElementById('form1').appendChild(releaseDiv);
      document.getElementById("releases").appendChild(slideShow2);
     // document.getElementById("mainUl").appendChild(myText3);

    }


    $('#releases img').click(function(){

      toggleFeatOverlay();

      let myurl = "../../portfolio2/assets/images/life/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".png", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();
      
      let getAlt = $(this).attr('alt');




    });


    /*

    $('#releases img').click(function(){

     alert("Big Img");

      let myurl = "../../engine/release_images/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".jpg", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();


      let getAlt = $(this).attr('alt')

      ball(myIn,getAlt);



     ////////////////////Feature Picture Overlay////////////////////////


      //toggleFeatOverlay();

     });//end of click song image

     */
     

    $('.xbutton').click(
    function()
    {

      $('#featoverlay').hide();
      $('#boxWrap').hide();
      //$('#alttext').fadeOut('slow');
       // alert('click Me');

      return false;


    });




    $('#releases img').hover(function(){
       $('#releases img').css('cursor', 'pointer');

    });




   

    $('#imgBox').mouseout(
    function()
    {

        $('#alttext').fadeOut('slow');
        return false;

    });

   
  });//end new ajax



  
}




function loadSlide3(){


  $.ajax(headerSettings()).done(function(response){

    coverData = response.projectCover[0];
    //coverData = response.projectCover[0];
    //projectList = response;

    let projectList3 = response.projects3;

    
    myData = response;


    //coverDataDiv = document.createElement("div");
    //coverDataDiv.classList.add('songInfo');
 
    //coverDataDiv.innerHTML = "<div class='mySlides'><img class='thumb' src='"+ coverData.imgPath + "'/>"+ "<br>" + '<p>' + coverData.title + '</p>'  +"</div>";
    //document.getElementById("releases").appendChild(coverDataDiv);

   //<p class='title'>" + projectList[i].title + "</p> 
    for (i = 0; i < 4; i++)
    {

      slideShow3 =document.createElement("div");
      slideShow3.classList.add('songInfo');
      //slideShow.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides fade'><img class='thumb' src='" + projectList[i].imgPath+"'/>" + '<p class="title">' + 
      slideShow3.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides'><img class='thumb' src='" + 
      projectList3[i].imgPath +"'name='" + projectList3[i].imgBig + "'/>" + "<p class='title'>" + 
      projectList3[i].title + 
      "</p>" + '</div></li>' + "<div class='break'></div>" + '<li class="descript-li" ><div id="jobDescrpitBox2"><span class="descript-Title">Description:</span><p class="descripTxt">' + 
      projectList3[i].descript  + '</p>' + ' <span class="techTitle">Tech/Stack:</span> <p class="techDescript">' + 
      projectList3[i].techStack + '</p>' + '<div/></li>' + "</div></ul>";
     
      //document.getElementById("releases").appendChild(coverDataDiv);
      //releaseDiv.appendChild(slideShow1);
      let releaseDiv = document.createElement("div");
      releaseDiv.setAttribute("id","releases");

      document.getElementById('form1').appendChild(releaseDiv);
      document.getElementById("releases").appendChild(slideShow3);

    }




    $('#releases img').click(function(){

      toggleFeatOverlay();
      let myurl = "../../portfolio2/assets/images/sneaker/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".png", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();
      
      let getAlt = $(this).attr('alt');

      


    });


   
     

    $('.xbutton').click(
    function()
    {

      $('#featoverlay').hide();
      $('#boxWrap').hide();
      //$('#alttext').fadeOut('slow');
       // alert('click Me');

      return false;


    });




    $('#releases img').hover(function(){
       $('#releases img').css('cursor', 'pointer');

    });




   

    $('#imgBox').mouseout(
    function()
    {

        $('#alttext').fadeOut('slow');
        return false;

    });

   
  });//end new ajax


  return false;
  
}




function loadSlide4(){


  $.ajax(headerSettings()).done(function(response){

    coverData = response.projectCover[0];
    //coverData = response.projectCover[0];
    //projectList = response;

    let projectList4 = response.projects4;

    myData = response;


    //coverDataDiv = document.createElement("div");
    //coverDataDiv.classList.add('songInfo');
 
    //coverDataDiv.innerHTML = "<div class='mySlides'><img class='thumb' src='"+ coverData.imgPath + "'/>"+ "<br>" + '<p>' + coverData.title + '</p>'  +"</div>";
    //document.getElementById("releases").appendChild(coverDataDiv);

   //<p class='title'>" + projectList[i].title + "</p> 
    for (i = 0; i < 4; i++)
    {

      slideShow4 =document.createElement("div");
      slideShow4.classList.add('songInfo');
      //slideShow.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides fade'><img class='thumb' src='" + projectList[i].imgPath+"'/>" + '<p class="title">' + 
      slideShow4.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides'><img class='thumb' src='" + 
      projectList4[i].imgPath +"'name='" + projectList4[i].imgBig + "'/>" + "<p class='title'>" + 
      projectList4[i].title + 
      "</p>" + '</div></li>' + "<div class='break'></div>" + '<li class="descript-li" ><div id="jobDescrpitBox2"><span class="descript-Title">Description:</span><p class="descripTxt">' + 
      projectList4[i].descript  + '</p>' + ' <span class="techTitle">Tech/Stack:</span> <p class="techDescript">' + 
      projectList4[i].techStack + '</p>' + '<div/></li>' + "</div></ul>";
     
      //document.getElementById("releases").appendChild(coverDataDiv);
      //releaseDiv.appendChild(slideShow1);
      let releaseDiv = document.createElement("div");
      releaseDiv.setAttribute("id","releases");

      document.getElementById('form1').appendChild(releaseDiv);
      document.getElementById("releases").appendChild(slideShow4);
    }





    $('#releases img').click(function(){

      toggleFeatOverlay();

      let myurl = "../../portfolio2/assets/images/seo/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".png", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();
      
      let getAlt = $(this).attr('alt');



    });


    /*

    $('#releases img').click(function(){

     alert("Big Img");

      let myurl = "../../engine/release_images/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".jpg", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();


      let getAlt = $(this).attr('alt')

      ball(myIn,getAlt);



     ////////////////////Feature Picture Overlay////////////////////////


      //toggleFeatOverlay();

     });//end of click song image

     */
     

    $('.xbutton').click(
    function()
    {

      $('#featoverlay').hide();
      $('#boxWrap').hide();
      //$('#alttext').fadeOut('slow');
       // alert('click Me');

      return false;


    });




    $('#releases img').hover(function(){
       $('#releases img').css('cursor', 'pointer');

    });




   

    $('#imgBox').mouseout(
    function()
    {

        $('#alttext').fadeOut('slow');
        return false;

    });

   
  });//end new ajax


  return false;
  
}





function loadSlide5(){


  $.ajax(headerSettings()).done(function(response){

    coverData = response.projectCover[0];
    //coverData = response.projectCover[0];
    //projectList = response;

    let projectList5 = response.projects5;

    
    myData = response;


    //coverDataDiv = document.createElement("div");
    //coverDataDiv.classList.add('songInfo');
 
    //coverDataDiv.innerHTML = "<div class='mySlides'><img class='thumb' src='"+ coverData.imgPath + "'/>"+ "<br>" + '<p>' + coverData.title + '</p>'  +"</div>";
    //document.getElementById("releases").appendChild(coverDataDiv);

   //<p class='title'>" + projectList[i].title + "</p> 
    for (i = 0; i < 4; i++)
    {

      slideShow5 =document.createElement("div");
      slideShow5.classList.add('songInfo');
      //slideShow.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides fade'><img class='thumb' src='" + projectList[i].imgPath+"'/>" + '<p class="title">' + 
      slideShow5.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides'><img class='thumb' src='" + 
      projectList5[i].imgPath +"'name='" + projectList5[i].imgBig + "'/>" + "<p class='title'>" + 
      projectList5[i].title + 
      "</p>" + '</div></li>' + "<div class='break'></div>" + '<li class="descript-li" ><div id="jobDescrpitBox2"><span class="descript-Title">Description:</span><p class="descripTxt">' + 
      projectList5[i].descript  + '</p>' + ' <span class="techTitle">Tech/Stack:</span> <p class="techDescript">' + 
      projectList5[i].techStack + '</p>' + '<div/></li>' + "</div></ul>";
      //document.getElementById("releases").appendChild(coverDataDiv);
      //releaseDiv.appendChild(slideShow1);
      let releaseDiv = document.createElement("div");
      releaseDiv.setAttribute("id","releases");

      document.getElementById('form1').appendChild(releaseDiv);
      document.getElementById("releases").appendChild(slideShow5);

    }



    $('#releases img').click(function(){

      toggleFeatOverlay();

      let myurl = "../../portfolio2/assets/images/nft/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".png", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();
      
      let getAlt = $(this).attr('alt');


    });


    /*

    $('#releases img').click(function(){

     alert("Big Img");

      let myurl = "../../engine/release_images/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".jpg", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();


      let getAlt = $(this).attr('alt')

      ball(myIn,getAlt);



     ////////////////////Feature Picture Overlay////////////////////////


      //toggleFeatOverlay();

     });//end of click song image

     */
     

    $('.xbutton').click(
    function()
    {

      $('#featoverlay').hide();
      $('#boxWrap').hide();
      //$('#alttext').fadeOut('slow');
       // alert('click Me');

      return false;


    });




    $('#releases img').hover(function(){
       $('#releases img').css('cursor', 'pointer');

    });




   

    $('#imgBox').mouseout(
    function()
    {

        $('#alttext').fadeOut('slow');
        return false;

    });

   
  });//end new ajax



  return false;
}




function loadSlide6(){


  $.ajax(headerSettings()).done(function(response){

    coverData = response.projectCover[0];
    //coverData = response.projectCover[0];
    //projectList = response;
 
    let projectList6 = response.projects6;
    
    myData = response;


    //coverDataDiv = document.createElement("div");
    //coverDataDiv.classList.add('songInfo');
 
    //coverDataDiv.innerHTML = "<div class='mySlides'><img class='thumb' src='"+ coverData.imgPath + "'/>"+ "<br>" + '<p>' + coverData.title + '</p>'  +"</div>";
    //document.getElementById("releases").appendChild(coverDataDiv);

   //<p class='title'>" + projectList[i].title + "</p> 
    for (i = 0; i < 4; i++)
    {

      slideShow6 =document.createElement("div");
      slideShow6.classList.add('songInfo');
      //slideShow.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides fade'><img class='thumb' src='" + projectList[i].imgPath+"'/>" + '<p class="title">' + 
      slideShow6.innerHTML = "<ul class='slideWrapUl'><li class='feat-img-li'><div class='mySlides'><img class='thumb' src='" + 
      projectList6[i].imgPath +"'name='" + projectList6[i].imgBig + "'/>" + "<p class='title'>" + 
      projectList6[i].title + 
      "</p>" + '</div></li>' + "<div class='break'></div>" + '<li class="descript-li" ><div id="jobDescrpitBox2"><span class="descript-Title">Description:</span><p class="descripTxt">' + 
      projectList6[i].descript  + '</p>' + ' <span class="techTitle">Tech/Stack:</span> <p class="techDescript">' + 
      projectList6[i].techStack + '</p>' + '<div/></li>' + "</div></ul>";
      let releaseDiv = document.createElement("div");
      releaseDiv.setAttribute("id","releases");

      document.getElementById('form1').appendChild(releaseDiv);
      document.getElementById("releases").appendChild(slideShow6);

    }





    $('#releases img').click(function(){

      toggleFeatOverlay();

      let myurl = "../../portfolio2/assets/images/music/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".png", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();
      
      let getAlt = $(this).attr('alt');

     


    });


    /*

    $('#releases img').click(function(){

     alert("Big Img");

      let myurl = "../../engine/release_images/";
      let myIn;
      myIn = $('#imgBox').attr('src',myurl+$(this).attr('name')+".jpg", +('alt'));

      $('#imgBox').show();
      $('.xbutton').show();


      let getAlt = $(this).attr('alt')

      ball(myIn,getAlt);



     ////////////////////Feature Picture Overlay////////////////////////


      //toggleFeatOverlay();

     });//end of click song image

     */
     

    $('.xbutton').click(
    function()
    {

      $('#featoverlay').hide();
      $('#boxWrap').hide();
      //$('#alttext').fadeOut('slow');
       // alert('click Me');

      return false;


    });




    $('#releases img').hover(function(){
       $('#releases img').css('cursor', 'pointer');

    });




   

    $('#imgBox').mouseout(
    function()
    {

        $('#alttext').fadeOut('slow');
        return false;

    });

   
  });//end new ajax


  return false;
  
}





function ball(myIn,getAlt)
{	

   $('#imgBox').mouseover(function(){$('#alttext').html(getAlt).css('color','white'); $('#alttext').fadeIn('slow');})
   
   
  // $('#imgBox').css('cursor', 'pointer');
   
   
};





function toggleFeatOverlay(){


  let Overlay = document.getElementById('featoverlay');
  let specialBox = document.getElementById('boxWrap');
  Overlay.style.opacity = 0.8;

  if(Overlay.style.display == "block"){
     Overlay.style.display = "none";
     specialBox.style.display = "none";
     return false;
  }else {

          Overlay.style.display = "block";
          specialBox.style.display = "block";

   }

   return false;
 }


 function altTxt(getAlt){
  

  $('#imgBox').mouseover(function(){$('#alttext').html(getAlt).css('color','white'); $('#alttext').fadeIn('slow');});
  $('#imgBox').css('cursor', 'pointer');


}
