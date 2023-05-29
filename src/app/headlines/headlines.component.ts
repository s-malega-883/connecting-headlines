import { Component, OnInit } from '@angular/core';
import { ApinewsService } from '../services/apinews.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit{

  constructor(private api : ApinewsService) {  }

  // Display headlines data
  hd_data : any = [];

  ngOnInit(): void {
    this.api.hd_news_api().subscribe((result) => {
      console.log(result.articles);
      this.hd_data = result.articles;
    })
  }

}
