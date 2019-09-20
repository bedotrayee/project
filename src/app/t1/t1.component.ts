import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {
 
  name:''; 
address:'';
contact:'';
  constructor() { }
   
  ngOnInit() {
  }
  add(){
    localStorage.setItem('name',this.name);
    localStorage.setItem('address',this.address);
    localStorage.setItem('contact',this.contact);
  }

}
