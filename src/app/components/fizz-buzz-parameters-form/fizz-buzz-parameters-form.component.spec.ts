import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzParametersFormComponent } from './fizz-buzz-parameters-form.component';

describe('FizzBuzzParametersFormComponent', () => {
  let component: FizzBuzzParametersFormComponent;
  let fixture: ComponentFixture<FizzBuzzParametersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FizzBuzzParametersFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FizzBuzzParametersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
