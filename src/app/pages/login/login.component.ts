import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/shared/models/user';
import { Router } from "@angular/router"

@Component({
  selector: 'emp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    debugger;
    const result = this.authService.getToken(this.user);
    console.log(result)
    this.router.navigate(['/funcionario'])
  }
}
