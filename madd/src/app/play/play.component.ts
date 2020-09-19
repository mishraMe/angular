import { Component, ViewEncapsulation, OnInit, OnDestroy, Inject, HostListener } from '@angular/core';
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
    randomChanceOfBg = 0;
    randomImageIndex = 0;
    bgColor = '';
    pullColor = null;
    pushColor = null;
    folder = "";
    imageToDisplay = null;
    timer = interval(1000);
    prevXPos = null;
    prevYPos = null;
    deltaX = null;
    deltaY = null;



  constructor( @Inject(DOCUMENT) private document: Document, private messenger: MessengerService){}

  ngOnInit(): void {
    this.messenger.currentMessage.subscribe(message => this.message = message);
    this.pullColor = this.message['pullColor'];
    this.pushColor = this.message['pushColor'];
    this.startGame();
    this.subscription = this.timer.subscribe(value => this.startGame());
  }

  startGame(): void{
    this.randomChanceOfBg = Math.random();
    this.randomImageIndex = Math.random() * 10;
    if(this.randomChanceOfBg > 0.5){
        this.bgColor = this.pullColor;
        this.folder = "pull-images";
        this.imageToDisplay = 1;
      }else{
        this.bgColor = this.pushColor;
        this.folder = "push-images";
        this.imageToDisplay = 1;
      }
    this.document.querySelector("html").style.backgroundColor = this.bgColor;
  }

   handleEvent($event){
    if(this.prevXPos === null && this.prevYPos === null){
      this.prevXPos = $event.screenX;
      this.prevYPos = $event.screenY;
    }else{
      this.deltaX = $event.screenX - this.prevXPos;
      this.deltaY = $event.screenY - this.prevYPos;
      this.prevXPos = $event.screenX;
      this.prevYPos = $event.screenY;
      if(this.deltaY < 0){
       console.log("image pushed");
        //reduce size
      }else if( this.deltaY > 0 ){
        console.log("image pulled");
        //increase pic size
        //fit the image to screen
      }
    }
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}

