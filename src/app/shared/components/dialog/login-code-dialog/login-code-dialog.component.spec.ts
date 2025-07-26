import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCodeDialogComponent } from './login-code-dialog.component';

describe('LoginCodeDialogComponent', () => {
  let component: LoginCodeDialogComponent;
  let fixture: ComponentFixture<LoginCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCodeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
