import { Component, VERSION } from '@angular/core';
import { Produto, __produtos } from '../model/produto';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {}
}
