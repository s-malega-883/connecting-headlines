import { Component, OnInit } from '@angular/core';
import { ApinewsService } from '../services/apinews.service';

@Component({
  selector: 'app-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.css']
})
export class BuzzComponent implements OnInit{
  constructor(private api : ApinewsService) {  }
  // Display business data
  buzz_data : any = [];

  ngOnInit(): void {
    this.api.buzz_news_api().subscribe((result) => {
      console.log(result.articles);
      this.buzz_data = result.articles;
    })
  }

}