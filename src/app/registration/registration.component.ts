import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public username: string = '';
  public password: string = '';
  ngOnInit(): void {
  }

  /*register() {
    this.userService.register(this.username, this.password).subscribe(resp => {
      alert(resp.msg);
      this.router.navigate(['/welcome']);
    });
  }*/

  register() {
    this.router.navigate(['/welcome']);
  }
}
