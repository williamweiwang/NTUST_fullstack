import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // 在初始化前要有menu屬性
  menus: Array<Menu>;
  menu: any;
  // 記錄一下當前Id
  currentMenuId: number;
  // 想要在代碼裏面用導航就得注入路由器

  constructor(public router: Router) {}

  ngOnInit() {
    // 在初始化前要有menu屬性
    this.menus = [new Menu(1, '首頁', 'list'), new Menu(2, '第二頁', 'grid')];
  }

  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }
}

// 在數據綁定之前先生成一個類,封裝頁面信息
export class Menu {
  constructor(public id: number, public name: string, public link: string) {}
}
