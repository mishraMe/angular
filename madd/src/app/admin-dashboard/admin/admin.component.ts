import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ImageService} from "../../service/ImageService";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   pushPictures = "Push Pictures"
   pullPictures = "Pull Pictures"
   fileToUpload: File = null;
   constructor(private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {

  }

  addPictures(event){
    this.fileToUpload = event.target.files[0];
  }
  upload(type : string){
    const fd = new FormData();
    fd.append('image', this.fileToUpload, this.fileToUpload.name);

  }

}
