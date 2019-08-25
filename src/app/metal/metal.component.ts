import { MetalService } from './../services/metal.service';
import { Metal } from './../models/metal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.scss']
})
export class MetalComponent implements OnInit {
  metals: Array<Metal> = [];

  constructor(private metalService: MetalService) { }

  ngOnInit() {
    this.metalService.getAllMetal().subscribe(rst => {
      this.metals = rst;
    });
  }

}
