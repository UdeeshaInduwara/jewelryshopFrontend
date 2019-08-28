import {MakersService} from './../services/makers.service';
import {Makers} from './../models/makers.model';
import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../services/notification.service';

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
      if (rst) {
        this.getAllMakers();
        this.notificationService.show(1, 'Jewelry Maker Saved Successfully');
      } else {
        this.notificationService.show(3, 'Jewelry Maker Saving Failed');
      }
    });
  }

  deleteMakers(id: number) {
    this.makersService.deleteMakers(id).subscribe(rst => {
      if (rst) {
        this.getAllMakers();
        this.notificationService.show(1, 'Jewelry Maker Deleted Successfully');
      } else {
        this.notificationService.show(3, 'Jewelry Maker Deleting Failed');
      }
    });
  }

}
