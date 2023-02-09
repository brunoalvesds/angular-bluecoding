import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchGifService } from 'src/app/services/search-gif/search-gif.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myControl = new FormControl('');
  trendingList: Array<any>;
  searchList: Array<any>;
  searching: boolean = false;

  constructor(private _searchGifService: SearchGifService) {}

  ngOnInit() {
   this.getTrendingGifs();
  }

  getTrendingGifs() {
    this._searchGifService.trendingGifs().subscribe(
      response => {
        console.log("API Response: ", response);
        this.trendingList = response['data'];
      },
      error => {
        console.log("API Response Error: ", error);
      }
    );
  }

  searchGifs(formData) {
    if (formData.keyword == "" || formData.keyword == null || formData.keyword == undefined) {
      this.searching = false;
    } else {
      this.searching = true;
    }
    
    this._searchGifService.searchGif(formData.keyword).subscribe(
      response => {
        console.log("Response search: ", response);
        this.searchList = response['data'];
      },
      error => {
        console.log("Response search error: ", error);
      }
    );
  }
}
