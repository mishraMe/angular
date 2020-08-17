import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'MADD';
  play = 'PLAY';
  pullLabel = 'PULL AT';
  pushLabel = 'PUSH AT';
  nullColor = '#FFFFFF';
  isLocked = true;
  pullColor = null;
  pushColor = null;

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

  ngDoCheck():void {
   this.isLocked = (this.pullColor === this.nullColor || this.pushColor === this.nullColor) ? true : false;
  }
}
