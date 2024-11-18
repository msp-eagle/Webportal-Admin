import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'camelCaseToDash'})
export class CamelCaseToDashPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}