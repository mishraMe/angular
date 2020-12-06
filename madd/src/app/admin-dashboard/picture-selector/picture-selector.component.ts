import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/service/ImageService';

@Component({
  selector: 'app-picture-selector',
  templateUrl: './picture-selector.component.html',
  styleUrls: ['./picture-selector.component.css']
})
export class PictureSelectorComponent implements OnInit {

  action: String;
  source : string;
  private sub: any;
  file : string;
  destination : string;

  constructor( private route : ActivatedRoute,  private imageService : ImageService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.action = params['action'];
    });
    this.destination = 'src/assets/' + this.action + '-images';
  }

  save(event : KeyboardEvent){
    if(event.key === 'Enter'){
      this.addImages()
    }
  }
  addImages(){
    this.imageService.getData(this.source)
      .subscribe(file => this.file = file,
        err => console.error(err));
    this.imageService.postData(this.destination, this.file);
    this.source = "";

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
