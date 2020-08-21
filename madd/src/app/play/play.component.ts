import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

//todo now we need to use the two backgrounds to randomly change to one of them and display a picture
export class PlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
