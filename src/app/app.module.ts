import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDivComponent } from './components/color-div/color-div.component';
import { CardComponent } from './components/cv/card/card.component';
import { DetailComponent } from './components/cv/detail/detail.component';
import { ListComponent } from './components/cv/list/list.component';
import { CvComponent } from './pages/cv/cv.component';
import { ItemComponent } from './components/cv/item/item.component';

import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { WordSimulatorComponent } from './components/word-simulator/word-simulator.component';
import { HiredComponent } from './components/cv/hired/hired.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { InfoComponent } from './pages/cv/info/info.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AddCvComponent } from './pages/add-cv/add-cv.component';
import { ImageLoopComponent } from './components/image-loop/image-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDivComponent,
    CardComponent,
    DetailComponent,
    ListComponent,
    CvComponent,
    ItemComponent,
    WordSimulatorComponent,
    RainbowDirective,
    DefaultImagePipe,
    HiredComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    InfoComponent,
    SignInComponent,
    AddCvComponent,
    ImageLoopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
