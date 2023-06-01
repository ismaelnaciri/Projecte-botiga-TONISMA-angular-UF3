import { TestBed } from '@angular/core/testing';

import { RegistreLoginService } from './registre-login.service';

describe('RegistreLoginService', () => {
  let service: RegistreLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistreLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
