import {Gem} from './../models/gem.model';
import {GemService} from './../services/gem.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.scss']
})
export class GemComponent implements OnInit {
  gems: Array<Gem> = [];
  gemDate: Gem = new Gem();

  constructor(private gemService: GemService) {
  }

  ngOnInit() {
    this.gemService.getAllGem().subscribe(rst => {
      this.gems = rst;
    });
  }

  saveGem() {
    this.gemService.saveGem(this.gemDate).subscribe(rst => {
      console.log(rst);
    });
  }

  deleteGem(id: number) {
    this.gemService.deleteGem(id).subscribe(rst => {
      console.log(rst);
    });
  }

}
