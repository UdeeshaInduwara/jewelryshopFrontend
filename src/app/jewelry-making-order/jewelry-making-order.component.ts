import { MakersService } from './../services/makers.service';
import { MetalService } from './../services/metal.service';
import {Component, OnInit} from '@angular/core';
import {JewelryMakingOrderService} from '../services/jewelry-making-order.service';
import {JewelryMakingOrder} from '../models/jewelry-making-order.model';
import {Gem} from '../models/gem.model';
import {Makers} from '../models/makers.model';
import {Metal} from '../models/metal.model';
import { GemService } from '../services/gem.service';

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

  gems: Array<Gem> = [];
  makers: Array<Makers> = [];
  metals: Array<Metal> = [];
  orders: Array<JewelryMakingOrder> = [];

  constructor(
    private jewelryMakingOrderService: JewelryMakingOrderService,
    private gemService: GemService,
    private metalService: MetalService,
    private makersService: MakersService
    ) {
  }

  ngOnInit() {
    this.getAllGem();
    this.getAllMetal();
    this.getAllMakers();
  }

  getAllGem(){
    this.gemService.getAllGem().subscribe(rst => {
      this.gems = rst;
    });
  }

  getAllMakers() {
    this.makersService.getAllMakers().subscribe(rst => {
      this.makers = rst;
    });
  }

  getAllMetal() {
    this.metalService.getAllMetal().subscribe(rst => {
      this.metals = rst;
    });
  }

  getAllOrders(){
    this.jewelryMakingOrderService.getAllJewelryMakingOrders().subscribe(rst => {
      this.orders = rst;
    });
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
