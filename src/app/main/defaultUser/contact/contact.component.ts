import { Component } from "@angular/core";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss', '../../../icons.scss']
})
export class ContactComponent{
    constructor(private userStateService: UserStateService) {
        userStateService.updateMain({
            crumbBar: crumbBarTypes.big,
            crumbBarContent: {
                crumbs: [{label: "Home", link: ''}],
                lastCrumb: 'Contact'
            },
            warrantyBar: true
        })
    }

}