import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreANDLoginComponent } from './registre.component';

describe('RegistreANDLoginComponent', () => {
  let component: RegistreANDLoginComponent;
  let fixture: ComponentFixture<RegistreANDLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreANDLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistreANDLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
