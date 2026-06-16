import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzHomePageComponent } from './fizz-buzz-home-page.component';

describe('FizzBuzzHomePageComponent', () => {
  let component: FizzBuzzHomePageComponent;
  let fixture: ComponentFixture<FizzBuzzHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FizzBuzzHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FizzBuzzHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
