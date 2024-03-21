import { Component, OnInit } from '@angular/core';

import { path } from 'sage';

import { appInit } from '../logic/app-init.logic';

// import { RouterOutlet } from '@angular/router';

// import { Header } from './structure/Header.component';
// import { List } from './pages/List.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, Header, List],
  template: `<main>
    <o-header></o-header>
    <div class="pages">
      <List *ngIf="showList"></List>
      <Manage *ngIf="showManage"></Manage>
    </div>
  </main>`,
})
export class App implements OnInit {
  title = 'Oregano-Angular';

  get showList() {
    const [url] = path.get();
    return url === 'list';
  }

  get showManage() {
    const [url] = path.get();
    return url === 'manage';
  }

  ngOnInit() {
    appInit();
  }
}
