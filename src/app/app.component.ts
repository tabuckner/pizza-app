import { Component, OnInit } from '@angular/core';
import { ServerService } from './shared/services/server.service';
import { Page } from './shared/interfaces/page.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pizza App';
  owner: string;
  ownerBio: string;
  stores: number;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getPage().subscribe(
      (response: Page) => {
        this.title = response.title;
        this.owner = response.owner;
        this.ownerBio = response.owner_text
        this.stores = response.stores;
      }
    );
  }
}
