import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="http://www.google.com">
      Learn more about Milind Traders
    </a>
  `,
})
export class App {
  name = 'Milind Traders';
}

bootstrapApplication(App);
