import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  @ViewChild('pass') passKey!: ElementRef;

  constructor(private router: Router) { }

  public username: string = '';
  public password: string = '';
  public loggedIn: boolean = false;
  public userListLocalStorage: any = [];
  public sameGuy: boolean = false;
  ngOnInit(): void {
    this.getAllUsers();
    if (localStorage.getItem('name') && localStorage.getItem('pass')) {
      this.username = localStorage.getItem('name')!;
      this.password = localStorage.getItem('pass')!;
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  getAllUsers() {
    this.userListLocalStorage = JSON.parse(localStorage.getItem("users")!);
  }

  sameGuyFunction() {
    this.sameGuy = false;
    this.userListLocalStorage.forEach((user: any) => {
      if (this.username === user.username) {
        if (this.password === user.password) {
          this.sameGuy = true;
        }
      }
    });
  }

  login() {
    this.username = this.nameKey.nativeElement.value;
    this.password = this.passKey.nativeElement.value;

    this.sameGuyFunction();

    if (this.username === '') {
      alert("Корисничко име је обавезно!");
    } else if (this.password === '') {
      alert("Унесите Вашу лозинку!");
    } else if (this.sameGuy === false) {
      alert("Погрешно корисничко име или лозинка!")
    } else {
      localStorage.setItem('name', this.nameKey.nativeElement.value);
      localStorage.setItem('pass', this.passKey.nativeElement.value);
      alert("Успешна пријава на систем!");
      this.loggedIn = true;
      this.router.navigate(['/welcome']);
    }
  }

  logout() {
    if (localStorage.getItem('name')) {
      localStorage.removeItem('name');
    }
    if (localStorage.getItem('pass')) {
      localStorage.removeItem('pass');
    }
    alert('Успешно сте се одјавили!');
    this.loggedIn = false;
    this.router.navigate(['/welcome']);
  }

}
