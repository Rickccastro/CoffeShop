import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaDialogComponent } from './cesta-dialog.component';

describe('CestaDialogComponent', () => {
  let component: CestaDialogComponent;
  let fixture: ComponentFixture<CestaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CestaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
