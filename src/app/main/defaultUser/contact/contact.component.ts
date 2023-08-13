import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, KeyValueDiffers } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Configuration } from "src/app/configuration";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { UserStateService } from "src/app/services/user-state.service";

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss', '../../../icons.scss']
})
export class ContactComponent {
    contactForm: FormGroup;

    constructor(private userStateService: UserStateService, private fb: FormBuilder, private http: HttpClient) {
        this.contactForm = fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', []],
            message: ['', [Validators.required]]
        });
        userStateService.updateMain({
            crumbBar: crumbBarTypes.big,
            crumbBarContent: {
                crumbs: [{ label: "Home", link: '' }],
                lastCrumb: 'Contact'
            },
            warrantyBar: true
        })
    }
    onSubmit() {
        console.log(this.contactForm.value);
        if (this.contactForm.valid) {
            console.log("valid");
            this.http.post(Configuration.apiUrl + '/SupportRequest', {
                Id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                Name: this.contactForm.value.name,
                Email: this.contactForm.value.email,
                Subject: this.contactForm.value.subject,
                Message: this.contactForm.value.message
            })
            .subscribe((response) => {
                console.log('OK');
            },
            (error) => {
                console.log(error);
            });
        }

    }

}