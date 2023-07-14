import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberWithCommas'
})
export class NumberWithCommasPipe implements PipeTransform {

    transform(value: number | null): string {
        if(value == null) return '';
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(",");
    }

}