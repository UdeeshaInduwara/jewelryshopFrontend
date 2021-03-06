import {MetalService} from './../services/metal.service';
import {Metal} from './../models/metal.model';
import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../services/notification.service';
import {UpdateMetal} from '../models/update-metal.model';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.scss']
})
export class MetalComponent implements OnInit {
  metals: Array<Metal> = [];
  metalData: Metal = new Metal();
  editCardVisible = false;
  updateMetalData: UpdateMetal = new UpdateMetal();
  selectedMetalType: string;
  selectedMetalCarat: number;
  selectedMetalWeight: number;

  constructor(
    private metalService: MetalService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.getAllMetal();
  }

  getAllMetal() {
    this.metalService.getAllMetal().subscribe(rst => {
      this.metals = rst;
    });
  }

  saveMetal() {
    this.metalService.saveMetal(this.metalData).subscribe(rst => {
      if (rst) {
        this.getAllMetal();
        this.notificationService.show(1, 'Metal Saved Successfully');
      } else {
        this.notificationService.show(3, 'Metal Saving Failed');
      }
    });
  }

  deleteMetal(id: number) {
    this.metalService.deleteMetal(id).subscribe(rst => {
      if (rst) {
        this.getAllMetal();
        this.notificationService.show(1, 'Metal Deleted Successfully');
      } else {
        this.notificationService.show(3, 'Metal Deleting Failed');
      }
    });
  }

  editMetal(metal: Metal) {
    this.updateMetalData.metalId = metal.metalId;
    this.selectedMetalType = metal.metalType;
    this.selectedMetalCarat = metal.carat;
    this.selectedMetalWeight = metal.weight;
    this.editCardVisible = !this.editCardVisible;
  }

  saveEditedMetal() {
    this.metalService.updateMetal(this.updateMetalData).subscribe(rst => {
      if (rst) {
        this.getAllMetal();
        this.editCardVisible = false;
        this.notificationService.show(1, 'Metal Updated Successfully');
      } else {
        this.notificationService.show(3, 'Metal Updating Failed');
      }
    });
  }

}
