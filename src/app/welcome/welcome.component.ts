import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  //@ViewChild('name') nameKey!: ElementRef;

  constructor(private userService: UserService) { }

  public username: string = '';
  public password: string = '';
  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(resp => {
      localStorage.setItem('token', resp.token);
      alert(resp.msg);
    });
  }

}
