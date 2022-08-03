import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  public userList: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userList = JSON.parse(localStorage.getItem("users")!);
  }

  ukloniNalog(i: number) {
    alert("ukloniNalog funkcija pozvana sa indeksom " + i);
  }
}
