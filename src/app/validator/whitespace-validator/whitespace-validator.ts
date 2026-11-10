import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validator for white spaces in the author form field
export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isWhitespace = typeof value === 'string' && value.trim().length === 0 && value !== '';
    // returns 'whitespace' to hasError() if matched, else returns null
    return isWhitespace ? { whitespace: true } : null;
  };
}
