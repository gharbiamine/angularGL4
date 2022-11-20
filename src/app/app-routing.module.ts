import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorDivComponent } from './components/color-div/color-div.component';
import { DetailComponent } from './components/cv/detail/detail.component';
import { WordSimulatorComponent } from './components/word-simulator/word-simulator.component';
import { CvComponent } from './pages/cv/cv.component';
import { InfoComponent } from './pages/cv/info/info.component';

const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'word-simulator',
    component: WordSimulatorComponent,
  },
  {
    path: 'color-div',
    component: ColorDivComponent,
  },
  {
    path: 'cv-detail/:id',
    component: InfoComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cv',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
