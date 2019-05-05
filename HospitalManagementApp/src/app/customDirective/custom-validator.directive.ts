import { Directive } from '@angular/core';
import {
  Validator, AbstractControl,
  ValidationErrors, NG_VALIDATORS
} from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomValidatorDirective,
    multi: true
  }]
})
export class CustomValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control != null && control.value != null) {
      if (control.value.length < 6) {
        return { invalidPassword: true }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

}
