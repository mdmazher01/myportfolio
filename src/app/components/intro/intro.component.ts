
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Bio } from 'src/app/model/bio';
import { BioService } from 'src/app/services/bio.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent {

  bioList!:Bio[];
  isShow!: boolean;
  topPosToStartShowing = 100;
  loader = true;
 
  
  constructor(private router: Router, private bioService: BioService){
    
  }
  gotoProject(){
    this.router.navigate(['project/project']);
  }
  toProject(){
    document.getElementById("projects")?.scrollIntoView();
  }
 
  @HostListener('window:scroll')
  checkScroll() {
      
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop(){
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ngOnInit(){

    this.bioService.getBio().subscribe(data =>{
      this.bioList = data;
      console.log(this.bioList);
 
    })

    setTimeout(()=>{                           
      this.loader = false;
    }, 2000);

    AOS.init();

  
  }

}


