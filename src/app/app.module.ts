import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shares/header/header.component';
import { FooterComponent } from './shares/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ChallengeItemDetailComponent } from './pages/challenge-item-detail/challenge-item-detail.component';
import { VideoShareComponent } from './pages/home/components/video-share/video-share.component';
import { ChallengeListComponent } from './pages/home/components/challenge-list/challenge-list.component';
import { AppConfigurationService } from './services';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ChannelComponent } from './pages/channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChallengeItemDetailComponent,
    VideoShareComponent,
    ChallengeListComponent,
    LoginComponent,
    ChannelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [
        {
          provide: AppConfigurationService,
          useValue: new AppConfigurationService(),
        },
      ],
    };
  }
}
