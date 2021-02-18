import { TestBed } from '@angular/core/testing';

import { OllivanderService } from './ollivander.service';

describe('OllivanderService', () => {
  let service: OllivanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OllivanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
