import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;
    idToken = localStorage.getItem('id_token');
    origin: string;
    redirectTo: string;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        public router: Router,
        public route: ActivatedRoute,
        private authService: AuthService,
        private toaster: ToastrService
    )
    {
        this.origin = this.document.location.origin;
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        this.redirectTo = this.route.snapshot.queryParams.redirectTo;
    }

    ngOnInit(): void
    {
        if (this.idToken) {
            this.router.navigate(['application-selection']);
          }

        this.loginForm = this._formBuilder.group({
              email: ['', Validators.email],
              password: ['', Validators.required]
          });
    }

    submit({email, password}): void {
        const loginData = {
            username: email,
            password: password
        };
        this.authService.login(loginData)
            .subscribe( (response) => {
                if (this.redirectTo){
                    window.location.href = this.redirectTo;
                } else {
                    this.router.navigate(['/dashboard']);
                }
            // // }, 
            // (err) => {
                // console.log(err);
                // this.toaster.error('Invalid email or password!');
            });
    }
}
