import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F2pComponent } from './f2p.component';

describe('F2pComponent', () => {
  let component: F2pComponent;
  let fixture: ComponentFixture<F2pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F2pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
