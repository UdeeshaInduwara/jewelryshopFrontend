import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {AuthService} from '../services/auth.service';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData: User = new User();

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
  }

  logIn() {
    this.authService.logIn(this.userData).subscribe(rst => {
      if (!rst) {
        this.notificationService.show(2, 'Login Failed');
      }
    });
  }

}
