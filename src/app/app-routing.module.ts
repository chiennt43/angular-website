import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChallengeItemDetailComponent } from './pages/challenge-item-detail/challenge-item-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { ChannelComponent } from './pages/channel';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'challenge-detail', component: ChallengeItemDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'channel', component: ChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
