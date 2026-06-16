import { Component, EventEmitter, Output } from '@angular/core';
import { FizzBuzzRequest } from '../../models/FizzBuzzRequest';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fizz-buzz-parameters-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fizz-buzz-parameters-form.component.html',
  styleUrl: './fizz-buzz-parameters-form.component.css'
})
export class FizzBuzzParametersFormComponent {

  @Output() generate = new EventEmitter<FizzBuzzRequest>();

  @Output() formChanged = new EventEmitter<FizzBuzzRequest>();

  limit = 1;

  divisor!: number;
  value!: string;

  rules: { [key: number]: string } = {};

  verifDivisor(): boolean {

    if (!this.divisor || this.divisor <= 0) {
      alert('Le diviseur doit être supérieur à 0');
      return false;
    }

    if (!this.value || this.value.trim() === '') {
      alert('La valeur est obligatoire');
      return false;
    }

    if (this.rules[this.divisor]) {
      alert('Ce diviseur existe déjà');
      return false;
    }

    return true;
  }

  verifRequest(): boolean {

    if (this.limit <= 0) {
      alert('La limite doit être supérieure à 0');
      return false;
    }

    if (Object.keys(this.rules).length < 2) {
      alert('Vous devez ajouter au moins deux diviseurs');
      return false;
    }

    return true;

  }

  addRule(): void {

    if (this.verifDivisor()) {

      this.rules[this.divisor] = this.value;
      this.emitFormChanged();
      this.divisor = 1;
      this.value = '';
    }

  }

  buildRequest() : FizzBuzzRequest {
    
    return {
      limit: this.limit,
      divisors: this.rules
    };

  }

  generateFizzBuzz(): void {

    const request: FizzBuzzRequest = this.buildRequest();

    if(this.verifRequest()) {
      this.generate.emit(request);
    }

  }


  emitFormChanged(): void {

  this.formChanged.emit(
    this.buildRequest()
  );

}


}
