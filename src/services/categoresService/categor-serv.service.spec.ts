import { TestBed } from '@angular/core/testing';

import { CategorServService } from './categor-serv.service';

describe('CategorServService', () => {
  let service: CategorServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
