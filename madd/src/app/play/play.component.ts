import { Component, ViewEncapsulation, OnInit, OnDestroy, Inject } from '@angular/core';
import { MessengerService } from "src/app/service/messenger.service";
import { DOCUMENT } from '@angular/common';
import { interval, Subscription } from "rxjs";


@Component({
  selector: 'app-play',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

//todo now we need to use the two backgrounds to randomly change to one of them and display a picture
export class PlayComponent implements OnInit, OnDestroy {

    message: any;
    subscription: Subscription;
    value = 0;
    bgColor = '';
    pullColor = null;
    pushColor = null;
    timer = interval(1000);

  constructor( @Inject(DOCUMENT) private document: Document, private messenger: MessengerService){}

  ngOnInit(): void {
    this.messenger.currentMessage.subscribe(message => this.message = message);
    this.pullColor = this.message['pullColor'];
    this.pushColor = this.message['pushColor'];
    this.startGame();
    this.subscription = this.timer.subscribe(value => this.startGame());
  }

  startGame(): void{
    this.value = Math.random();
    if(this.value > 0.5){
        this.bgColor = this.pullColor;
      }else{
        this.bgColor = this.pushColor;
      }
    this.document.querySelector("html").style.backgroundColor = this.bgColor;
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}

