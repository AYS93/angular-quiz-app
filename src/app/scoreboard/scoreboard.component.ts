import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  public userList: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getAllUsersSorted();
  }

  getAllUsersSorted() {
    this.userList = JSON.parse(localStorage.getItem("users")!);
    this.userList.sort((a: any, b: any) => (a.points < b.points) ? 1 : -1);
  }

}
