import { MakersService } from './../services/makers.service';
import { Makers } from './../models/makers.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrls: ['./makers.component.scss']
})
export class MakersComponent implements OnInit {
  makers: Array<Makers> = [];

  constructor(private makersService: MakersService) { }

  ngOnInit() {
    this.makersService.getAllMakers().subscribe(rst => {
      this.makers = rst;
    });
  }

}
