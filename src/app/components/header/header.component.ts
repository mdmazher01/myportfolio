import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


 constructor(){

 }

 toHome(){
  document.getElementById("home")?.scrollIntoView();
 }
 toExperience(){
  document.getElementById("experience")?.scrollIntoView();
 }
 toSkills(){
  document.getElementById("skills")?.scrollIntoView();
 }
 toAbout(){
  document.getElementById("about")?.scrollIntoView();
 }
 toProjects(){
  document.getElementById("projects")?.scrollIntoView();
 }

}

