import {Component, OnInit} from '@angular/core';
import {JewelryMakingOrderService} from '../services/jewelry-making-order.service';
import {JewelryMakingOrder} from '../models/jewelry-making-order.model';
import {Gem} from '../models/gem.model';
import {Makers} from '../models/makers.model';
import {Metal} from '../models/metal.model';

@Component({
  selector: 'app-jewelry-making-order',
  templateUrl: './jewelry-making-order.component.html',
  styleUrls: ['./jewelry-making-order.component.scss']
})
export class JewelryMakingOrderComponent implements OnInit {
  gemDate: Gem = new Gem();
  makersData: Makers = new Makers();
  metalData: Metal = new Metal();
  jewelryMakingOrderData: JewelryMakingOrder = new JewelryMakingOrder();

  constructor(private jewelryMakingOrderService: JewelryMakingOrderService) {
  }

  ngOnInit() {
  }

  placeOrder() {
    this.jewelryMakingOrderData.gem = this.gemDate;
    this.jewelryMakingOrderData.metal = this.metalData;
    this.jewelryMakingOrderData.jewelryMaker = this.makersData;
    this.jewelryMakingOrderService.placeOrder(this.jewelryMakingOrderData).subscribe(rst => {
      console.log(rst);
    });
  }

}
