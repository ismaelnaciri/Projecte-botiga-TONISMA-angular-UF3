import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionsComponent } from './condicions.component';

describe('CondicionsComponent', () => {
  let component: CondicionsComponent;
  let fixture: ComponentFixture<CondicionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
