import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualComponent }   from './visual/visual.component';
import { AboutComponent }   from './about/about.component';
import { ContactComponent }   from './contact/contact.component';
import { InfoComponent }   from './info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/visual', pathMatch: 'full' },
  { path: 'visual', component: VisualComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
