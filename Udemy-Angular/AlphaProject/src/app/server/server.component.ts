import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  userName = '';
  serverStatus = 'offline';
  isCreated = false;
  isCClicked = false;

  myArray: any = [];

isClicked(){
  this.isCClicked = true;
  this.myArray.push(this.myArray.length + 1);
}
getColor2(){
  return this.isCClicked === true ? 'black' : 'white';
}
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
ngOnInit(): void {
  
}
  resetMe(){
    this.isCreated = true;
    this.userName = '';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'; 
  }



 
  
}
