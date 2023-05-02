import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [{
  path: 'userlist',
  component: UserlistComponent
},
{
  path: 'postlist',
  component: PostlistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
