import { TheoryService } from './../theory/theory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perimeter',
  templateUrl: './perimeter.component.html',
  styleUrls: ['./perimeter.component.scss']
})
export class PerimeterComponent implements OnInit {

  infos;

  constructor(private TheoryService: TheoryService) { }

  ngOnInit() {
    this.infos = this.TheoryService.getAll();
  }

}
