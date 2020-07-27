import { MathsQuizService } from './maths-quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-quiz',
  templateUrl: './maths-quiz.component.html',
  styleUrls: ['./maths-quiz.component.scss']
})
export class MathsQuizComponent implements OnInit {
  title;
  questions;
  color;
  result_id;
  array = [34.54, 26, 31.5, 25.2, 46.8];
  constructor(private MathsQuizService: MathsQuizService) { }

  ngOnInit() {
    this.questions = this.MathsQuizService.getAll();
  }

  ngOnChanges() {
    this.checkResult;
  }


  checkResult(result, index) {
    debugger
    if (+result === this.array[index]) {
      // this.result_id = result;
      // this.color = 'green';
      return true;
    } else {
      // return this.color = 'red';
      return false;
    }
  }
}
