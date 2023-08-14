import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../snackbar/snackbar.component";

@Injectable({
    providedIn: 'root',
})
export class SnackBarService {

    constructor(private snackBar: MatSnackBar) {

    }
    private createSnack(message: string, type: string){
        this.snackBar.openFromComponent(SnackBarComponent, {
            horizontalPosition: "right",
            verticalPosition: "bottom",
            panelClass: 'snackbar',
            duration: 6000,
            data: {message: message, type: type}
        });
    }
    public logError(message: string){
        this.createSnack(message, 'error');
    }
    public log(message: string){
        this.createSnack(message, 'log');
    }
    public logSuccess(message: string){
        this.createSnack(message, 'success');
    }
}