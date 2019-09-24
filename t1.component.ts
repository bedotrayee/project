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
  ar=[];
  constructor() { }
 /* */
  ngOnInit() {
    localStorage.setItem('name',this.name);
    localStorage.setItem('address',this.address);
    localStorage.setItem('contact',this.contact);
     
this.add();
  }
    
   add(){
    var test = { name: this.name, address:this.address, contact:this.contact}​​​​​​​;
    
    localStorage.setItem("test", JSON.stringify(test));
    var address = localStorage.getItem("test");
test = JSON.parse(address);
   // console.log(test);
    localStorage.push(test);
    let a=localStorage.getItem('test') || [];
if(a!=null){
this.ar.push();
console.log(this.ar);
localStorage.setItem('test',JSON.stringify(this.ar));
}
else{
  localStorage.setItem('test',JSON.stringify(this.ar));
}
   }
 
}
//
//
//var address = localStorage.getItem("test");
//test = JSON.parse(address); //var test is now re-loaded!
//
/*<div ng-app>
      <div ng-controller="Edit">
        <div ng-hide="editor">
          {{title}}
          <a href="#" ng-click="enable()">Edit</a>
        </div>
        <div ng-show="editor">
          <input ng-model="Title" ng-show="editor">
          <a href="#" ng-click="save()">Save</a>
          or
          <a href="#" ng-click="disable()">cancel</a>.
        </div>
      </div>
    </div>
    */
