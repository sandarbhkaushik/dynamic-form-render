import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';

@Component({
  selector: 'app-root',
  imports: [ DynamicFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-feature-application');
}
