import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'app/svc/store.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  sourceMsg: string;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  updateStore() {
    this.storeService.changeMessage(this.sourceMsg);
  }

}
