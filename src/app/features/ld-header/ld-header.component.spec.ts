import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdHeaderComponent } from './ld-header.component';

describe('LdHeaderComponent', () => {
  let component: LdHeaderComponent;
  let fixture: ComponentFixture<LdHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
