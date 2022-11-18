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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
