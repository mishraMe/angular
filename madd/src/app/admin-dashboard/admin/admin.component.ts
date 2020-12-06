import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   pushPictures = "Push Pictures"
   pullPictures = "Pull Pictures"

   constructor(private router: Router) { }

  ngOnInit(): void {

  }

  addPictures(action){
    this.router.navigate(['/admin/pictures', action]);
  }

}
