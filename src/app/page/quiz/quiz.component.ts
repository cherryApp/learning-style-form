// tslint:disable: prefer-for-of
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  list$ = this.questionService.list$;
  result = [0, 0, 0, 0];
  showResult = false;
  update = 1;
  chartData: number[] = [65, 59, 80, 81];
  check = [
    [1, 4, 12, 18, 22, 24, 25, 27, 36, 40],
    [8, 10, 11, 16, 19, 21, 23, 29, 31, 32],
    [2, 7, 9, 13, 14, 17, 30, 37, 38, 39],
    [3, 5, 6, 15, 20, 26, 28, 33, 34, 35],
  ];

  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {
  }

  getResult(list: Question[]) {
    const currentResult = [0, 0, 0, 0];
    for (let i = 0; i < this.check.length; i++) {
      for (let k = 0; k < list.length; k++) {
        if (this.check[i].includes(list[k].id) && list[k].answer) {
          currentResult[i] += 2;
        }
      }
    }

    this.result = currentResult;
    this.update++;
  }

}
