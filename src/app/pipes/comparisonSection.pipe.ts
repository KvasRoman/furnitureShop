import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'section'
})
export class ComparisonSectionPipe implements PipeTransform {

    transform(value: string | null): string {
        if(value == null) return '';
        var res = value.replace('<section>','');
        return res;
    }

}