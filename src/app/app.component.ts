import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 // logic of the component
export class AppComponent {
  title = 'angularP';
}
