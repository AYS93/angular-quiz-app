import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { InsektiService } from 'src/app/quiz-services/insekti.service';

@Component({
  selector: 'app-insekti',
  templateUrl: './insekti.component.html',
  styleUrls: ['./insekti.component.scss']
})
export class InsektiComponent implements OnInit {

  public userList: any = [];
  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;
  i = 0;

  constructor(private insektiService: InsektiService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllUsers() {
    this.userList = JSON.parse(localStorage.getItem("users")!);
  }

  getAllQuestions() {
    this.insektiService.getQuestionJSON().subscribe(res => {
      this.questionList = res.questions;
    });
  }

  nextQuestion() {
    if (this.currentQuestion+1 < this.questionList.length) {
      this.currentQuestion++;
    } else {
      this.stopCounter();
      this.isQuizCompleted = true;
    }
    this.getProgressPercent();
  }

  previousQuestion() {
    if (this.currentQuestion >= 1) {
      this.currentQuestion--;
    }
    this.points -= 10;
    this.getProgressPercent();
  }

  answer(questionNumber: number, option: any) {
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
    } else {
      this.points -= 10;
      this.incorrectAnswer++;
    }
    setTimeout(() => {
      this.nextQuestion();
      this.getProgressPercent();
      this.resetCounter();
    }, 1000); 
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter === 0) {
        this.nextQuestion();
        this.counter = 60;
        this.points -= 10;
        this.incorrectAnswer++;
        this.getProgressPercent();
      }
    });

    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000); //after 10 min
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.currentQuestion = 0;
    this.progress = "0";
    this.isQuizCompleted = false;
    this.correctAnswer = 0;
    this.incorrectAnswer = 0;
  }

  getProgressPercent() {
    this.progress = (((this.currentQuestion) / (this.questionList.length-1))*100).toString();
    return this.progress;
  }

  saveScore() {
    if (localStorage.getItem('name')) {
      this.userList.forEach((el: any) => {
        if (this.name === el.username) {
          el.points += this.points;
        }
      });

      let jsonString = JSON.stringify(this.userList);
      localStorage.setItem("users", jsonString);
    } else {
      console.log("not logged in");
    }
  }

}
