import { isFakeTouchstartFromScreenReader } from '@angular/cdk/a11y';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

    transform(currentPage: number, totalPages: number, displayRange: number): number[] {
        let res: number[] = [];
        let firstPageToDisplay: number = currentPage - Math.floor(displayRange / 2);
        if (firstPageToDisplay <= 0) {
            firstPageToDisplay = 1;
        }
        if(firstPageToDisplay + displayRange > totalPages){
            firstPageToDisplay = totalPages - displayRange + 1;
        }

        for (let i = 0; i < displayRange; i++) {
            let p: number = i + firstPageToDisplay;
            if(p < 1)
                continue;
            if (p > totalPages)
                break;
            res.push(p);
        }
        return res;
    }

}