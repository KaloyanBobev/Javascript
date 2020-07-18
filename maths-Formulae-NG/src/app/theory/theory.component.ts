import { TheoryService } from './theory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {
  infos;
  constructor(private TheoryService: TheoryService) { }

  ngOnInit() {
    this.infos = this.TheoryService.getAll();
  }

}
