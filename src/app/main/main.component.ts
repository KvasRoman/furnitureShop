import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStateService } from '../services/user-state.service';
import { crumbBarTypes } from '../services/user-state.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../icons.scss', './main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  enums = {
    crumbBarTypes: crumbBarTypes
  }
  crumbBarType: crumbBarTypes = this.enums.crumbBarTypes.none;
  isWarrantyBarActive: boolean = false;
  stateSubscribtion: Subscription | undefined;
  constructor(private userStateService: UserStateService) {

  }
  
  ngOnInit(): void {
    this.stateSubscribtion = this.userStateService.subscribeMain((value) => {
      this.crumbBarType = value.crumbBar;
      this.isWarrantyBarActive = value.warrantyBar;
    })
  }
  ngOnDestroy(): void {
    this.stateSubscribtion?.unsubscribe();
  }
}
