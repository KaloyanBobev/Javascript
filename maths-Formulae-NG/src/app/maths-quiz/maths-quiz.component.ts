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
  array;
  mathsResult;
  constructor(private MathsQuizService: MathsQuizService) { }

  ngOnInit() {
    this.questions = this.MathsQuizService.getAll();
    this.array = this.MathsQuizService.array;
  }



  checkResult(result, index) {

    if (+result === this.array[index]) {

      return this.mathsResult = true;
    } else {

      return this.mathsResult = false;
    }
  }
}
