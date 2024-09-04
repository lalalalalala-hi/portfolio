import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMMAComponent } from './smma.component';

describe('SMMAComponent', () => {
  let component: SMMAComponent;
  let fixture: ComponentFixture<SMMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SMMAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SMMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
