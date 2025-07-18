import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCodeDialogComponent } from './email-code-dialog.component';

describe('EmailCodeDialogComponent', () => {
  let component: EmailCodeDialogComponent;
  let fixture: ComponentFixture<EmailCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCodeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
