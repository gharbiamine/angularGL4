import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorDivComponent } from './components/color-div/color-div.component';
import { WordSimulatorComponent } from './components/word-simulator/word-simulator.component';
import { AddCvComponent } from './pages/add-cv/add-cv.component';
import { CvComponent } from './pages/cv/cv.component';
import { InfoComponent } from './pages/cv/info/info.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

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
    path: 'cv/detail/:id',
    component: InfoComponent,
  },
  {
    path: 'cv/add',
    component: AddCvComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
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
