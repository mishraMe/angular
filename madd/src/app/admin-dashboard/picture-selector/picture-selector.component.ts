import { Component, OnInit, Inject, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-picture-selector',
  templateUrl: './picture-selector.component.html',
  styleUrls: ['./picture-selector.component.css']
})
export class PictureSelectorComponent implements OnInit {

  action: String;
  private sub: any;
  srcFolder : String;
  destFolder : String;
  allPictures :  any;

  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.action = params['action'];
    });
    this.srcFolder = '/Users/mishr/OneDrive/Pictures/' + this.action + 'Pictures';
    this.destFolder = 'src/assets/' + this.action + '-images';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
