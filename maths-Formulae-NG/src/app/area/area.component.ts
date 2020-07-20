import { TheoryService } from './../theory/theory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  infos = [];

  valueSquare;
  valueRadius;
  valueH;
  valueB;
  valueW;
  valueHeight;
  valuePerimeter;
  valueApthoteme;

  constructor(private TheoryService: TheoryService) { }

  ngOnInit() {
    this.infos = this.TheoryService.getAll();
  }

}
