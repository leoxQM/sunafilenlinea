import { TestBed } from '@angular/core/testing';

import { UtilitarioAppService } from './utilitarioApp.service';

describe('UtilitarioAppService', () => {
  let service: UtilitarioAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitarioAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
