import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.css']
})
export class T2Component implements OnInit {
  
 arr=[];
  constructor() { }

  ngOnInit() {
    this.arr.push (JSON.parse(localStorage.getItem("test")));
 console.log(this.arr[0]);
  }

 
 
 
/*register(data: { name: string; address: string; contact: string; }){
this.p=data.name;
this.k=data.address;
this.j=data.contact;
let a=localStorage.getItem('client') || [];
if(a!=null){
this.arr.push(data);
console.log(this.arr);
localStorage.setItem('client',JSON.stringify(this.arr));
}
else{
  localStorage.setItem('client',JSON.stringify(this.arr));
}
}
 

}
function Edit($scope) {
  $scope.title = "Bedotrayee";
  $scope.editor = false;
  
  $scope.enable = function() {
    $scope.editor = true;
    $scope.Title = $scope.title;
  };
  
  $scope.disable = function() {
    $scope.editor = false;
  };
  
  $scope.save = function() {
    $scope.title = $scope.Title;
    $scope.disable();
  };
}*/
}