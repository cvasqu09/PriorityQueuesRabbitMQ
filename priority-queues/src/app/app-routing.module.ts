import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagingHomeComponent } from './messaging-home/messaging-home.component';
import { MessagingViewComponent } from './messaging-view/messaging-view.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MessagingHomeComponent },
  {path: 'view', component: MessagingViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
