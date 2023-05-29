import { Component, OnInit } from '@angular/core';
import { ApinewsService } from '../services/apinews.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit{
  constructor(private api : ApinewsService) {  }
  // Display technology data
  tech_data : any = [];

  ngOnInit(): void {
    this.api.tech_news_api().subscribe((result) => {
      console.log(result.articles);
      this.tech_data = result.articles;
    })
  }

}
