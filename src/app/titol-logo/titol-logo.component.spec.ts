import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitolLogoComponent } from './titol-logo.component';

describe('TitolLogoComponent', () => {
  let component: TitolLogoComponent;
  let fixture: ComponentFixture<TitolLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitolLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitolLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
