import { Component, OnInit } from '@angular/core';
import { Item, ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa-demo';

  items: Item[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.apiService.fetch()
      .subscribe(
        (data: Item[]) => {
          console.log(data);

          this.items = data;
        },
        err => console.log(err)
      );
  }
}
