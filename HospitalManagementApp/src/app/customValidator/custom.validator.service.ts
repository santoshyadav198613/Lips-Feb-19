import { AbstractControl } from '@angular/forms';

export class CustomValidator {

    static mobileNoValidator(control: AbstractControl) {
        const mobileNo = control.value as string;
        if(mobileNo.startsWith('91')){
            return null; 
        } else {
            return { inValidNumber: true };
        }
    }
}