import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.scss']
})
export class CardGifComponent {
  openModal: boolean = false;
  @Input() imageUrl: string = "";
  @Input() gifName: string = "";

  constructor() {}
}
