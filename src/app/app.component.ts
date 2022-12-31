import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myportfolio';
  loader = true;


  constructor() { }

  ngOnInit() {
    setTimeout(()=>{                           
      this.loader = false;
    }, 2000);
  }


  
}




