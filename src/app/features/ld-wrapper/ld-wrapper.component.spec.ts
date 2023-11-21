import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdWrapperComponent } from './ld-wrapper.component';

describe('LdWrapperComponent', () => {
  let component: LdWrapperComponent;
  let fixture: ComponentFixture<LdWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LdWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
