import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherInterestsComponent } from './other_interests/other_interests.component';
import { MusicalInterestsComponent } from './musical_interests/musical_interests.component';
import { NextComponent } from './components/next/next.component';
import { MyStoryComponent } from './my_story/my_story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherInterestsComponent,
    MusicalInterestsComponent,
    MyStoryComponent,
    NextComponent
  ],
  imports: [
    HttpModule,
    BrowserModule.withServerTransition({ appId: 'ski-app' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'musical_interests', component: MusicalInterestsComponent },
      { path: 'other_interests', component: OtherInterestsComponent },
      { path: 'my_story', component: MyStoryComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
