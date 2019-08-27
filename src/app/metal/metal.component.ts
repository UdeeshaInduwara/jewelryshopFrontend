import {MetalService} from './../services/metal.service';
import {Metal} from './../models/metal.model';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.scss']
})
export class MetalComponent implements OnInit {
  metals: Array<Metal> = [];
  metalData: Metal = new Metal();

  constructor(private metalService: MetalService) {
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
      console.log(rst);
    });
  }

  deleteMetal(id: number) {
    this.metalService.deleteMetal(id).subscribe(rst => {
      console.log(rst);
    });
  }

}
