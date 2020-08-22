import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-start',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  title = 'MADD';
  play = 'PLAY';
  pullLabel = 'PULL AT';
  pushLabel = 'PUSH AT';
  nullColor = '#FFFFFF';
  isLocked = true;
  pullColor = null;
  pushColor = null;

  message: any;

  constructor(private router: Router, private messenger: MessengerService) {
  }

  ngOnInit() {

        this.pullColor = this.nullColor; // the null color
        this.pushColor = this.nullColor;
        this.messenger.currentMessage.subscribe(message => this.message = message);
    }
  // function responsible for picking a random color and assigning it to a variable;
  pickColor(type){
    var color = '';
    while(color === ''){
      const potentialColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      if(potentialColor !== this.nullColor &&
        ((type === 'pull' && color !== this.pushColor) ||
          (type === 'push' && color !== this.pullColor))){
            color = potentialColor;
          }
    }

    if(type === 'pull'){
      this.pullColor = color;
    }else{
      this.pushColor = color;
    }
  }

  sendBackgrounds():void {
    // TODO to pass on pull and push color use a service
    // with service pass message from start and receive in onInit play
    this.router.navigateByUrl('/play');
    this.messenger.changeMessage({'pullColor': this.pullColor, 'pushColor': this.pushColor});
  }

  ngDoCheck():void {
    this.isLocked = (this.pullColor === this.nullColor || this.pushColor === this.nullColor) ? true : false;
    }
  }
