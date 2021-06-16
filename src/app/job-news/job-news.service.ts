import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { JobNews } from './job-news.model';

@Injectable({
  providedIn: 'root',
})
export class JobNewsService {
  jobNews: JobNews[] = [];

  constructor() {
    this.jobNews = [
      {
        id: 1,
        jobTitle: 'Front End Web Developer',
        discription:
          'We are looking for a qualified Front-End Web Developer who has a knack for the design aspects of the web application. You will be responsible for translating UX/UI design to actual code that will create visual elements and effects of the web application.',
        duration: '3 - 4',
        salary: '25000 - 30000',
        location: 'PUNE',
      },
      {
        id: 2,
        jobTitle: 'AngularJS Developer - Bootstrap/ JavaScript',
        discription:
          'We are looking for a qualified Front-End Web Developer who has a knack for the design aspects of the web application. You will be responsible for translating UX/UI design to actual code that will create visual elements and effects of the web application.',
        duration: '1 - 2',
        salary: 'Not Disclosed',
        location: 'Gurgaon/Gurugram',
      },
      {
        id: 3,
        jobTitle: 'Angular Developer',
        discription:
          'We are looking for a qualified Front-End Web Developer who has a knack for the design aspects of the web application. You will be responsible for translating UX/UI design to actual code that will create visual elements and effects of the web application.',
        duration: '5 - 6',
        salary: '4L - 10L',
        location: 'NOIDA',
      },
      {
        id: 1,
        jobTitle: 'Front End Web Developer',
        discription:
          'We are looking for as of the web application.',
        duration: '1 - 2',
        salary: '25000 - 30000',
        location: 'PUNE',
      },
      {
        id: 1,
        jobTitle: 'Front End Web Developer',
        discription:
          'We are looking for a qualified Front-End Web Developer who has a knack for the design aspects of the web application. You will be responsible for translating UX/UI design to actual code that will create visual elements and effects of the web application.',
        duration: '1 - 2',
        salary: '25000 - 30000',
        location: 'PUNE',
      },
      {
        id: 1,
        jobTitle: 'Front End Web Developer',
        discription:
          'We are looking for a qualified Front-End Web Developer who has a knack for the design aspects of the web application. You will be responsible for translating UX/UI design to actual code that will create visual elements and effects of the web application.',
        duration: '1 - 2',
        salary: '25000 - 30000',
        location: 'PUNE',
      },
      {
        id: 1,
        jobTitle: 'Front End Web Developer',
        discription:
          'We are looking for a qualified Front-End Web Developer who has a knack for the design aspects of the web application. You will be responsible for translating UX/UI design to actual code that will create visual elements and effects of the web application.',
        duration: '1 - 2',
        salary: '25000 - 30000',
        location: 'PUNE',
      },
    ];
  }

  getJobNews() {
    return of(this.jobNews);
  }
}
