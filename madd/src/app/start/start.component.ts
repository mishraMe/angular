import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log("hi i am in init");
        this.pullColor = this.nullColor; // the null color
        this.pushColor = this.nullColor;
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
  }

  ngDoCheck():void {
    this.isLocked = (this.pullColor === this.nullColor || this.pushColor === this.nullColor) ? true : false;
    }
  }
