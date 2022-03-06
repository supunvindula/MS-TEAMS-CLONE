import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageviewComponent } from './components/messageview/messageview.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TeamviewComponent } from './components/teamview/teamview.component';

const routes: Routes = [
  // {path: '',component:TeamviewComponent},
  {path: 'teams', component: TeamviewComponent},
  {path: 'messages', component: MessageviewComponent},
  {path: '',redirectTo: '/teams',pathMatch:'full'},
  {path: '**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
