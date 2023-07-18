import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardService } from 'src/service/route-guard-service.service';
import { GridArticlesComponent } from './pages/grid-articles/grid-articles.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:userId', component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path: 'articles', component: ArticlesComponent, canActivate: [RouteGuardService] },
  { path: 'articles/grid', component: GridArticlesComponent,  canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
