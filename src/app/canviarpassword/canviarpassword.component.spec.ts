import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanviarpasswordComponent } from './canviarpassword.component';

describe('CanviarpasswordComponent', () => {
  let component: CanviarpasswordComponent;
  let fixture: ComponentFixture<CanviarpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanviarpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanviarpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
