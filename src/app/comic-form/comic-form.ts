import { Component, computed, effect, inject, input } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import {ComicService} from '../services/comic-service';
import { Router } from "@angular/router";

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-comic-form',
  styleUrl: './comic-form.css',
  templateUrl: './comic-form.html',
})
export class ComicForm {
  private fb = inject(FormBuilder);
  private comicService = inject(ComicService);
  private router = inject(Router);

  // Filled from the :id route parameter on /edit/:id by withComponentInputBinding().
  // On /add there is no :id, so the input stays undefined and the form is in add mode.
  id = input<string>();

  protected isEditMode = computed(() => this.id() !== undefined);

  // nonNullable means reset() goes back to these starting values instead of null,
  // and getRawValue() is typed without null.
  protected comicForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    author: [[''], Validators.required],
    genre: [['Shounen']],
    digitalAvailable: [true],
    printAvailable: [true],
    isOnHiatus: [false],
  });

  constructor() {
    // An effect reruns when id() changes, so going from /edit/1 to /edit/2
    // refills the form even though Angular reuses the same component.
    effect(() => {
      const id = this.id();
      if (id === undefined) {
        return;
      }
      const comic = this.comicService.getComic(Number(id));
      if (comic) {
        // patchValue() fills only the fields it is given. The form has no id field,
        // so the id is ignored here and added back on submit.
        this.comicForm.patchValue({ ...comic, isOnHiatus: comic.isOnHiatus ?? false });
      }
    });
  }

  protected onSubmit(): void {
    if (this.comicForm.invalid) {
      return;
    }

    // getRawValue() includes disabled controls too. value would skip them.
    const formValue = this.comicForm.getRawValue();
    const id = this.isEditMode() ? Number(this.id()) : this.comicService.nextId();

    if (this.isEditMode()) {
      this.comicService.updateComic({ id, ...formValue });
    } else {
      this.comicService.addComic({ id, ...formValue });
    }

    this.comicForm.reset();
    this.router.navigate(['/comics', id]);
  }
}
