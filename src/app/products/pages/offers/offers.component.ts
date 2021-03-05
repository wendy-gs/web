import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  
  @Input() showCarousel:string='';
  constructor() { }

  ngOnInit(): void {
  }
  items = [{ img: 'https://picsum.photos/200/200?random=1' },
  { img: 'https://picsum.photos/200/200?random=2' },
  { img: 'https://picsum.photos/200/200?random=3' },
  { img: 'https://picsum.photos/200/200?random=4' },
  { img: 'https://picsum.photos/200/200?random=5' },
  { img: 'https://picsum.photos/200/200?random=6' },
  { img: 'https://picsum.photos/200/200?random=7' },
  { img: 'https://picsum.photos/200/200?random=8' }
  ];
  
}
