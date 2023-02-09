import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
}
