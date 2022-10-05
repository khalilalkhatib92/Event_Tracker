import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  News: any;
  Projects: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.News = [
        {
          title: 'RMS R27.2 New Releas',
          releaseDate: new Date(),
          describtion: 'New release of RMS, wich is solve the (System internal Error) problem.',
          poster:'https://t3.ftcdn.net/jpg/03/97/62/36/360_F_397623613_gU1qMBJrhbOQeApnkaeN1bB4VcqVS0Pz.jpg'
        },
          {
            title: 'RMS R27.1 New Releas',
            releaseDate: new Date(),
            describtion: 'New release of RMS, wich is solve the Deny Issuing Resones.',
            poster:'https://t4.ftcdn.net/jpg/05/18/78/35/360_F_518783566_39kUcYT30TPj6WkqkqWC1MWTtz1qQ89Q.jpg'
          },
        ];
        this.Projects = [
          {
            title: 'RMS',
            releaseDate: '12/10/2022',
            describtion: 'Revenue Managment System.',
            poster:''
          },
          {
            title: 'Portal',
            releaseDate: '12/10/2022',
            describtion: 'Taxpayer System.',
            poster:''
          }
        ]
      
    }, 300);
  }

  remove(index: number){
    if(this.News)
    this.News.splice(index, 1);
    // if(this.Projects)
    // this.Projects.splice(index, 1);
  }

}
