import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../../../core/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;
  boxUser =  false;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.boxUser = true;
       this.user = user;

      } else {
       this.boxUser = false;
      }
    });
  }


  logout() {
    this.authService.doLogout().then(
      res => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Logout error', error);
      }
    );
  }
}
