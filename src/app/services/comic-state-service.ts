import {inject, Service, signal} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

@Service()
export class ComicStateService {
  public editEnable = signal<boolean>(false);

  public editToggle() {
    this.editEnable.update(value => !value);
    console.warn("Editing Mode: " + (this.editEnable() ? "ENABLE" : "DISABLE"));
  }
}
