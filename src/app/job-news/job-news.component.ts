import { Component, OnInit } from '@angular/core';
import { JobNews } from './job-news.model';
import { JobNewsService } from './job-news.service';

@Component({
  selector: 'app-job-news',
  templateUrl: './job-news.component.html',
  styleUrls: ['./job-news.component.css'],
})
export class JobNewsComponent implements OnInit {
  jobNews: JobNews[] = [];

  constructor(private jobNewsService: JobNewsService) {}

  ngOnInit(): void {
    this.jobNewsService.getJobNews().subscribe((jobNews) => {
      this.jobNews = jobNews;
    });

    console.log(this.jobNews)
  }
}
