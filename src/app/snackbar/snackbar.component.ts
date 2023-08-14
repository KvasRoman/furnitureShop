import { Component, Inject, Input, inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material/snack-bar";

@Component({
    selector: "app-snackbar",
    templateUrl: "snackbar.component.html",
    styleUrls: ["snackbar.component.scss", "../icons.scss"]
})
export class SnackBarComponent{
    
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {

    }
    snackBarRef = inject(MatSnackBarRef);
    
}