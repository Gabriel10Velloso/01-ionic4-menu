import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
// https://www.youtube.com/watch?v=I82_roQSgco&t=102s
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    pages = [
        {
            title: 'Primeira Página',
            url: '/menu/first'
        },
        {
            title: 'Segunda Página',
            url: '/menu/second'
        }
    ];

    selectedPath = '';

  constructor(private route: Router) {
      this.route.events.subscribe((event: RouterEvent) => {  // marca a rota no menu
          this.selectedPath = event.url;
          console.log(event.url);
      });
  }

  ngOnInit() {
  }

}
