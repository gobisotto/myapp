import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPage } from './intro.page';
import { TabsPage } from '../tabs/tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component: Tab1Page,
      },
      {
        path: 'tab2',
        component: Tab2Page,
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: IntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroPageRoutingModule { }
