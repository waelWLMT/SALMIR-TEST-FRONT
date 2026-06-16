import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzParametersResultComponent } from './fizz-buzz-parameters-result.component';

describe('FizzBuzzParametersResultComponent', () => {
  let component: FizzBuzzParametersResultComponent;
  let fixture: ComponentFixture<FizzBuzzParametersResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FizzBuzzParametersResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FizzBuzzParametersResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
