import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
        });
        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('service should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Login method should be runned and return user data and set data in localstorage', () => {

        // tslint:disable-next-line:one-variable-per-declaration
        const username = 'username',
            password = 'password';

        const response = {
            username: 'username',
            email: 'email',
            token: 'token'
        };
        service.login({username, password}).subscribe(data => {
            expect(data).toEqual(response);
            expect(localStorage.getItem('token')).toEqual(response.token);
        });
        const request = httpMock.expectOne( `${service.apiUrl}login`);
        expect(request.request.method).toBe('GET');
        request.flush(response);
    });

    it('Logout method should be runned and return success and clear storage', () => {
        const response = {
            success: true
        };
        service.logout().subscribe(data => {
            expect(localStorage.getItem('token')).toEqual(null);
            expect(localStorage.getItem('user')).toEqual(null);
            expect(data).toEqual(response);
        });
        const request = httpMock.expectOne( `${service.apiUrl}logout`);
        expect(request.request.method).toBe('GET');
        request.flush(response);
    });
    afterEach(() => {
        httpMock.verify();
    });
});
