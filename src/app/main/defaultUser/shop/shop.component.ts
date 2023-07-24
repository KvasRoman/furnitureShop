import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { crumbBarTypes } from 'src/app/services/user-state.models';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../../../icons.scss','./shop.component.scss']
})
export class ShopComponent {
    constructor(private userStateService: UserStateService) {
      this.userStateService.updateMain({
        crumbBar: crumbBarTypes.big,
        warrantyBar: true
      });
    }
    ngOnInit(){
        
    }
}
