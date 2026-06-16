import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FizzBuzzHomePageComponent } from './pages/fizz-buzz-home-page/fizz-buzz-home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FizzBuzzHomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FizzBuzzFrontend';
}
