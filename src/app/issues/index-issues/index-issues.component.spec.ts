import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexIssuesComponent } from './index-issues.component';

describe('IndexIssuesComponent', () => {
  let component: IndexIssuesComponent;
  let fixture: ComponentFixture<IndexIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
