import { Component,Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })
export class AppComponent {
 
  friends:any = [{"name": "Avnesh", "hobby": "Coding"},
{"name": "Kaushik", "hobby": "Coding"},
{"name": "Archana", "hobby": "Cooking"},
{"name": "Piyush", "hobby": "Singing"},
{"name": "Archit", "hobby": "sports"},
{"name": "Hema", "hobby": "gossiping"}
]; 


  constructor (){ 
  	
  }

  
}
