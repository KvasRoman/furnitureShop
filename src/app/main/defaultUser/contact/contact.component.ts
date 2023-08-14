import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, KeyValueDiffers, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Configuration } from "src/app/configuration";
import { crumbBarTypes } from "src/app/models/user-state.models";
import { SnackBarService } from "src/app/services/snackbar.service";
import { UserStateService } from "src/app/services/user-state.service";
import { SnackBarComponent } from "src/app/snackbar/snackbar.component";

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss', '../../../icons.scss']
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;

    constructor(private userStateService: UserStateService, private fb: FormBuilder, private http: HttpClient, private snackBarService: SnackBarService) {
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
    ngOnInit(): void {
       this.snackBarService.logError("log");
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
                .subscribe(
                    (response) => {
                        this.snackBarService.logSuccess("Hooray")
                    },
                    (error) => {
                        console.log(error);
                        this.snackBarService.logError("oops something went wrong");
                    });
        }

    }

}