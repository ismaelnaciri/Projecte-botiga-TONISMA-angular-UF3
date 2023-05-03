import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiquesComponent } from './grafiques.component';

describe('GrafiquesComponent', () => {
  let component: GrafiquesComponent;
  let fixture: ComponentFixture<GrafiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
