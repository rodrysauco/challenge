import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector:'app-header',
  template:'<p>Header works!</p>'
})
class MockHeaderComponent{}
@Component({
  selector:'app-spinner',
  template:'<p>Spinner works!</p>'
})
class MockSpinnerComponent{}
@Component({
  selector:'app-footer',
  template:'<p>Footer works!</p>'
})
class MockFooterComponent{}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MockHeaderComponent,
        MockFooterComponent,
        MockSpinnerComponent,
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('challenge');
  });

});
