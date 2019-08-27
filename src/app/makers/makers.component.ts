import {MakersService} from './../services/makers.service';
import {Makers} from './../models/makers.model';
import {Component, OnInit} from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrls: ['./makers.component.scss']
})
export class MakersComponent implements OnInit {
  makers: Array<Makers> = [];
  makersData: Makers = new Makers();

  constructor(
    private makersService: MakersService,
    private notificationService: NotificationService
    ) {
  }

  ngOnInit() {
    this.getAllMakers();
  }

  getAllMakers() {
    this.makersService.getAllMakers().subscribe(rst => {
      this.makers = rst;
    });
  }

  saveMakers() {
    this.makersService.saveMakers(this.makersData).subscribe(rst => {
      console.log(rst);
    });
  }

  deleteMakers(id: number) {
    this.makersService.deleteMakers(id).subscribe(rst => {
      console.log(rst);
    });
  }

}
