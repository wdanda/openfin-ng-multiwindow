import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StoreService {

  private messageSource = new BehaviorSubject<string>('');

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  //
  // Disclaimer - the solution we are looking for does not include intercepting
  // this service and plugging in some sort of window communication mechanism.
  //
  // That we can easily do with javascript, we are interested in a solution
  // that someone involves spanwing child windows that share its parent context
  // in a way that angular components can communicate and don't have to be reboostrapped
  //
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
