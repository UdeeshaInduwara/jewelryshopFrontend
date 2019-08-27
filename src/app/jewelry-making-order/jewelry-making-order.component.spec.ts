import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryMakingOrderComponent } from './jewelry-making-order.component';

describe('JewelryMakingOrderComponent', () => {
  let component: JewelryMakingOrderComponent;
  let fixture: ComponentFixture<JewelryMakingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelryMakingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryMakingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
