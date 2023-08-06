import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStateService } from '../services/user-state.service';
import { crumbBarTypes } from '../models/user-state.models';
import { Subscription, filter } from 'rxjs';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

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
  crumbBarContent?: {
    crumbs: {label: string, link: string}[],
    lastCrumb: string,
  };
  stateSubscribtion: Subscription | undefined;
  constructor(private userStateService: UserStateService, private router: Router) {
  }

  ngOnInit(): void {
    this.stateSubscribtion = this.userStateService.subscribeMain((value) => {
      this.crumbBarType = value.crumbBar;
      this.isWarrantyBarActive = value.warrantyBar;
      this.crumbBarContent = value.crumbBarContent;
    })
    
  }
  ngOnDestroy(): void {
    this.stateSubscribtion?.unsubscribe();
  }
}
