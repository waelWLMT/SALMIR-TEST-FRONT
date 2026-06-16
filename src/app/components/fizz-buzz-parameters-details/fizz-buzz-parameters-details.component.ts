import { Component, Input } from '@angular/core';
import { FizzBuzzRequest } from '../../models/FizzBuzzRequest';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-fizz-buzz-parameters-details',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './fizz-buzz-parameters-details.component.html',
  styleUrl: './fizz-buzz-parameters-details.component.css'
})
export class FizzBuzzParametersDetailsComponent {
 
   @Input() request?: FizzBuzzRequest;  
   
}
