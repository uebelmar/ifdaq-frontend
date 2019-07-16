import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FuseConfigService } from '@fuse/services/config.service';
import { environment } from 'environments/environment';
import { environment as environmentProd } from 'environments/environment.prod';
import { environment as environmentSandbox } from 'environments/environment.sandbox';
import { environment as environmentLocal } from 'environments/environment.local';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [FuseConfigService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it(`Test of environment:`, () => {
    const { name, apiUrl } = environment;
    expect(apiUrl).toEqual(environment.apiUrl);
  });
  it(`Configuration for ${environmentLocal.name}: ${environmentLocal.apiUrl}`, () => {
    expect(true).toBeTruthy();
  });
  it(`Configuration for ${environmentSandbox.name}: ${environmentSandbox.apiUrl}`, () => {
    expect(true).toBeTruthy();
  });
  it(`Configuration for ${environmentProd.name}: ${environmentProd.apiUrl}`, () => {
    expect(true).toBeTruthy();
  });
});
