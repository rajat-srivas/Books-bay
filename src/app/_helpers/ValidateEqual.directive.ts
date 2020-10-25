import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[appValidateEqual]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidateEqualDirective,
    multi: true
}]
})

export class ValidateEqualDirective implements Validator {
  @Input('appValidateEqual') appConfirmEqualValidator: string;

  validate(control: AbstractControl): ValidationErrors | null {

    if (control.value === null || control.value.length === 0) {
      console.log(control.value);
      return null;
    }

    const controlToCompare = control.root.get(this.appConfirmEqualValidator);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { notEqual: true };
      }

    return null;
  }
}

