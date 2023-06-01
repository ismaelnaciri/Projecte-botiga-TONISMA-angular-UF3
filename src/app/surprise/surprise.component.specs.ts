import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseComponent } from './surprise.component';

describe('F2pComponent', () => {
  let component: SurpriseComponent;
  let fixture: ComponentFixture<SurpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
