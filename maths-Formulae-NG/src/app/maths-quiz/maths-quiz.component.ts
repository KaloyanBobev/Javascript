import { MathsQuizService } from './maths-quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-quiz',
  templateUrl: './maths-quiz.component.html',
  styleUrls: ['./maths-quiz.component.scss']
})
export class MathsQuizComponent implements OnInit {

  questions;

  constructor(private MathsQuizService: MathsQuizService) { }

  ngOnInit() {
    this.questions = this.MathsQuizService.getAll();
  }

}
