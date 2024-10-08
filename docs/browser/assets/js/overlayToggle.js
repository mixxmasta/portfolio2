function overlayOn(){

    //document.getElementById('overlay').style.display = "block";
     //document.querySelector('dialog').style.visibility = 'visible';



    document.getElementById('overlay').style.visibility ="visible";
    document.getElementById('form1').style.visibility ="visible";

    return false;

}

function overlayOff(){

    //document.querySelector('#form1').style.visibility ="hidden";
   //document.querySelector('#overlay').style.visibility ="hidden";

    const formElement = document.querySelector('#overlay');
    DynamicCover();
    

    

    //remove event listner to fix double click to close

    //formElement.addEventListener('click', (event)=> {
        document.getElementById("releases").remove();
        //console.log(event.target);
        //console.log(event.formElement);

        if(event.target == formElement){

         document.querySelector('#form1').style.visibility = "hidden";
         document.querySelector('#overlay').style.visibility = "hidden";
         return false;
        }else{
         return false;
        }

        return false;


   // });

}
