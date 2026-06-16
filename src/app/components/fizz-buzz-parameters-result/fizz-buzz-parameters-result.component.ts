import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz-parameters-result',
  standalone: true,
  imports: [],
  templateUrl: './fizz-buzz-parameters-result.component.html',
  styleUrl: './fizz-buzz-parameters-result.component.css'
})
export class FizzBuzzParametersResultComponent {

  @Input() results: string[] = [];

}
