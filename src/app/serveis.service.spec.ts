import { TestBed } from '@angular/core/testing';

import { ServeisService } from './serveis.service';

describe('ServeisService', () => {
  let service: ServeisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
