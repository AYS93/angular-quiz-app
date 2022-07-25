import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  //@ViewChild('name') nameKey!: ElementRef;

  constructor(private userService: UserService, private router: Router) { }

  public username: string = '';
  public password: string = '';
  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(resp => {
      localStorage.setItem('token', resp.token);
      this.router.navigate(['/welcome']);
    });
  }

}
