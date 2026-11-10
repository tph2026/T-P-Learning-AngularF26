import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function blankFormValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const title = control.get('title')?.value;
    const author = control.get('author')?.value;

    // Check if both fields are completely empty or whitespace only
    const isTitleEmpty = !title || title.trim() === '';
    const isAuthorEmpty = !author || author.trim() === '';

    return isTitleEmpty && isAuthorEmpty ? { blankform: true } : null;
  };
}
