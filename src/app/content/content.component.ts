import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  menu: Array<any>;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenu(); 
  }

  getMenu(): void {
    this.menuService.getMenu().subscribe(menu => this.menu = menu);
  }

}
