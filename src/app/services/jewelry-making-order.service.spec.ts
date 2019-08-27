import { TestBed } from '@angular/core/testing';

import { JewelryMakingOrderService } from './jewelry-making-order.service';

describe('JewelryMakingOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JewelryMakingOrderService = TestBed.get(JewelryMakingOrderService);
    expect(service).toBeTruthy();
  });
});
