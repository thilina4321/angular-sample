import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {

  answer = ''
  guestion = ''
  available = 'abcdefghijklmnopqrstuvwxyz';

  generatePattern(){
    for(let i=0; i<15; i++){
    let number = Math.floor(Math.random() * 27)
    this.guestion += this.available[number]

  }
  }
  }


