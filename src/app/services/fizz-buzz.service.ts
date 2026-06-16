import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FizzBuzzRequest } from '../models/FizzBuzzRequest';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  generate(request: FizzBuzzRequest): Observable<string[]> {

    return this.http.post<string[]>(
      `${this.apiUrl}/fizzbuzz/generate`,
      request
    );

  }

}
