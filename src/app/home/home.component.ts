import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
//import {Project} from '/src/app/home/Project.interface.ts';

//declare var $: any;  
import $ from 'jquery';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  


   release: string = "../assets/json/projects.json";
   defaultImg: string = "../../images/PipeLine6.jpg";
   //myData?: ResponseData;
   myText3?: string;
   //coverData?: Project;
   coverDataDiv?: HTMLDivElement;
   //projectList?: Project[];
   slideShow?: HTMLDivElement;
   grid?: HTMLDivElement;
  
  slideShow1?: HTMLDivElement;
  slideShow2?: HTMLDivElement;
  slideShow3?: HTMLDivElement;
  slideShow4?: HTMLDivElement;
  slideShow5?: HTMLDivElement;
  slideShow6?: HTMLDivElement;
  
  pad: number = 30;
  cols: number = 3;
  newleft?: number;
  newtop?: number;
 
  constructor(){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //alert("hello");
  
  let myData: any, myText3: any, coverData: any, coverDataDiv: any, projectList: any, slideShow: any, grid: any;

  let slideShow1: any, slideShow2: any, slideShow3: any, slideShow4: any, slideShow5: any, slideShow6: any;

  let pad: number = 30, cols: number = 3, newleft: number, newtop: number;
  //this.DynamicCover(); 
  }




    /*DynamicCover(): void {

    $.ajax(headerSettings()).done(function(response: any): void {
  
      const coverData: any = response.projectCover[0];
      const coverDataDiv: HTMLDivElement = document.createElement("div");
      coverDataDiv.classList.add('songInfo');
      coverDataDiv.innerHTML = "<div class='mySlides2'>" + "<br>" + '<p class="CoverTitle">' + coverData.title + '</p>' + '<p class="coverDescript">' + coverData.descript + '</p>' + "</div>";
  
      const releaseDiv: HTMLDivElement = document.createElement("div");
      releaseDiv.setAttribute("id", "releases");
  
      const formElement: HTMLElement | null = document.getElementById('form1');
      if (formElement) {
        formElement.appendChild(releaseDiv);
        releaseDiv.appendChild(coverDataDiv);
      }
  
    
    });
  
  }*/
  



}








/*unction headerSettings(): { cache: boolean; mimeType: string; dataType: string; async: boolean; crossDomain: boolean; url: string; method: string; headers: { accept: string; "Access-Control-Allow-Origin": string; } } {
  let settings = {
    'cache': false,
    'mimeType': "application/json",
    'dataType': "json",
    "async": true,
    "crossDomain": true,
    "url": "../assets/json/projects.json",
    "method": "GET",
    "headers": {
      "accept": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }

  return settings;
}*/