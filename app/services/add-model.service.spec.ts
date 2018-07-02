import { TestBed, inject } from '@angular/core/testing';

import { AddModelService } from './add-model.service';

describe('AddModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddModelService]
    });
  });

  it('should be created', inject([AddModelService], (service: AddModelService) => {
    expect(service).toBeTruthy();
  }));
});
