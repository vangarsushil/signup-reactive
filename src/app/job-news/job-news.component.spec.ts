import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNewsComponent } from './job-news.component';

describe('JobNewsComponent', () => {
  let component: JobNewsComponent;
  let fixture: ComponentFixture<JobNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
