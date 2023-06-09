import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { MainComponent } from './main/main.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecentPostsComponent,
    ThemeListComponent,
    MainComponent,


  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
