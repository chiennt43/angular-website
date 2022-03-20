import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shares/header/header.component';
import { FooterComponent } from './shares/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ChallengeItemDetailComponent } from './pages/challenge-item-detail/challenge-item-detail.component';
import { ChallengeItemsComponent } from './pages/home/components/challenge-items/challenge-items.component';
import { VideoShareComponent } from './pages/home/components/video-share/video-share.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChallengeItemDetailComponent,
    ChallengeItemsComponent,
    VideoShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
