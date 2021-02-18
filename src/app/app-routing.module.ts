import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WandDetailsComponent } from './components/wand-details/wand-details.component';
import { WandListComponent } from './components/wand-list/wand-list.component';
import { WizardListComponent } from './components/wizard-list/wizard-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wizards', component: WizardListComponent},
  { path: 'wands', component: WandListComponent },
  { path: 'wands:/id', component: WandDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
