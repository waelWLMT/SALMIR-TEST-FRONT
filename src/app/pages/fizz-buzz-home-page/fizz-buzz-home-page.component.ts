import { Component } from '@angular/core';
import { FizzBuzzRequest } from '../../models/FizzBuzzRequest';
import { FizzBuzzService } from '../../services/fizz-buzz.service';
import { FizzBuzzParametersFormComponent } from '../../components/fizz-buzz-parameters-form/fizz-buzz-parameters-form.component';
import { FizzBuzzParametersDetailsComponent } from '../../components/fizz-buzz-parameters-details/fizz-buzz-parameters-details.component';
import { FizzBuzzParametersResultComponent } from '../../components/fizz-buzz-parameters-result/fizz-buzz-parameters-result.component';

@Component({
  selector: 'app-fizz-buzz-home-page',
  standalone: true,
  imports: [FizzBuzzParametersFormComponent, FizzBuzzParametersDetailsComponent, FizzBuzzParametersResultComponent],
  templateUrl: './fizz-buzz-home-page.component.html',
  styleUrl: './fizz-buzz-home-page.component.css'
})
export class FizzBuzzHomePageComponent {

  constructor(private fizzBuzzService: FizzBuzzService) { }

  request?: FizzBuzzRequest;
  results: string[] = [];


  onFormChanged(request: FizzBuzzRequest) {
    this.request = request;
  }

  onGenerate(request: FizzBuzzRequest) {
    this.request = request;
   
    this.fizzBuzzService
    .generate(request)
    .subscribe({
      next: (response) => {
        this.results = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
