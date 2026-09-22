import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  title = signal('Angular-Project');

  /* Code for the components here */
  firstMessage:string = "HELLO WORLD";
  isFirstAngularProject: boolean = true;

}
