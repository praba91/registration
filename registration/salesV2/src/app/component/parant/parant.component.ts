import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent implements OnInit {

 receivedChildMessage: string;
  messageToSendP: string = '';

  constructor() { }

  ngOnInit() {
  }



  sendToChild(message: string) {
    this.messageToSendP = message;
  }



  getMessage(message: string) {
    this.receivedChildMessage = message;
    console.log(this.receivedChildMessage,"receivedChildMessage");
  }

}
