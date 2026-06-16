import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzParametersDetailsComponent } from './fizz-buzz-parameters-details.component';

describe('FizzBuzzParametersDetailsComponent', () => {
  let component: FizzBuzzParametersDetailsComponent;
  let fixture: ComponentFixture<FizzBuzzParametersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FizzBuzzParametersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FizzBuzzParametersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
