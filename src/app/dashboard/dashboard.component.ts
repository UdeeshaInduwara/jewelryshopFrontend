import {Component, OnInit} from '@angular/core';
import {JewelryMakingOrderService} from '../services/jewelry-making-order.service';
import {GemService} from '../services/gem.service';
import {MetalService} from '../services/metal.service';
import {MakersService} from '../services/makers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private ordersCount: number;
  private gemCount: number;
  private metalCount: number;
  private makersCount: number;

  loadedDate = new Date();

  constructor(
    private jewelryMakingOrderService: JewelryMakingOrderService,
    private gemService: GemService,
    private metalService: MetalService,
    private makersService: MakersService
  ) {
  }

  ngOnInit() {
    this.jewelryMakingOrderService.getOrdersCount().subscribe(rst => {
      this.ordersCount = rst;
    });

    this.gemService.getGemCount().subscribe(rst => {
      this.gemCount = rst;
    });

    this.metalService.getMetalCount().subscribe(rst => {
      this.metalCount = rst;
    });

    this.makersService.getMakersCount().subscribe(rst => {
      this.makersCount = rst;
    });
  }

}
