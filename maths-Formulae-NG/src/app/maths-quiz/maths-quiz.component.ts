import { MathsQuizService } from './maths-quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-quiz',
  templateUrl: './maths-quiz.component.html',
  styleUrls: ['./maths-quiz.component.scss']
})
export class MathsQuizComponent implements OnInit {

  questions;
  color;
  array = [34.54, 26, 31.5, 25.2, 46.8];
  constructor(private MathsQuizService: MathsQuizService) { }

  ngOnInit() {
    this.questions = this.MathsQuizService.getAll();
  }

  ngOnChanges() {
    this.checkResult;
  }


  checkResult(result, index) {


    if (+result === this.array[index]) {
      return this.color = 'green';
    } else {
      return this.color = 'red';
    }
  }
}
