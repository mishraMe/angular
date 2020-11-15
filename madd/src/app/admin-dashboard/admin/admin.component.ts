import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   pushColors = "Push Colors"
   pullColors = "Pull Colors"
   pullFolder = "src\assets\pull-images";
   pushFolder = "src\assets\push-images";
   srcFolder = "Pictures";
   showPictures = false;

   constructor() { }

  ngOnInit(): void {

  }

  addColors(action){
    this.showPictures = true;
  }

}
