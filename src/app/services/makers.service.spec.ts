import { TestBed } from '@angular/core/testing';

import { MakersService } from './makers.service';

describe('MakersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakersService = TestBed.get(MakersService);
    expect(service).toBeTruthy();
  });
});
