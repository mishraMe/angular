import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private colors = {
    'pullColor': null,
    'pushColor': null
    }
  private messageSource = new BehaviorSubject( this.colors );
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}
