import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';

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
    

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        public router: Router
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

    submit(value): void {
        console.log(value);
    }
}
