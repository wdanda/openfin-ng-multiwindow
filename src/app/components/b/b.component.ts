import { Component, OnInit } from '@angular/core';
import { StoreService } from 'app/svc/store.service';
import { Utils } from 'app/app.util';

@Component({
  selector: 'app-component-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  message: string;
  popedOut = false;
  windowMode = false;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.windowMode = Utils.isInOwnWidgetWindow();
    this.storeService.currentMessage.subscribe(message => this.message = message);
  }

  popout() {
    const left = window.screen['availLeft'] + 200;
    window.open('/#/window/comp-b', '_blank', `width=550, height=300, left=${left} top=200`);
    this.popedOut = true;
  }

  popin() {
    window.opener.location.reload();
    window.close();
  }

}
