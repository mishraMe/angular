import { Component, OnInit, Inject, onDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-picture-selector',
  templateUrl: './picture-selector.component.html',
  styleUrls: ['./picture-selector.component.css']
})
export class PictureSelectorComponent implements OnInit {

  action: String;
  private sub: any;
  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.action = params['action'];
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
