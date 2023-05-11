import { TestBed } from '@angular/core/testing';

import { VolumeControlService } from './volume-control.service';

describe('VolumeControlService', () => {
  let service: VolumeControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolumeControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
