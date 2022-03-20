import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ChallengeItemDetailComponent } from './pages/challenge-item-detail/challenge-item-detail.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'challenge-detail/:slug', component: ChallengeItemDetailComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}