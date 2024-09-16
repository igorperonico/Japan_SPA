import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTouristAtrractionsComponent } from './form-tourist-atrractions.component';

describe('FormTouristAtrractionsComponent', () => {
  let component: FormTouristAtrractionsComponent;
  let fixture: ComponentFixture<FormTouristAtrractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTouristAtrractionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTouristAtrractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
