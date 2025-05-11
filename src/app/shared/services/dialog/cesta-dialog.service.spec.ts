import { TestBed } from '@angular/core/testing';

import { CestaDialogService } from './cesta-dialog.service';

describe('CestaDialogService', () => {
  let service: CestaDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestaDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
