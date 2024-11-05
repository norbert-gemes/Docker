import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { 
    AppComponent,
    ChallengeListComponent,
    ChallengeItemComponent,
    ChallengeDetailsComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeListComponent,
    ChallengeItemComponent,
    ChallengeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
