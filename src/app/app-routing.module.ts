import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PreAuthPageComponent } from './pages/pre-auth-page/pre-auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PreRegisterPageComponent } from './pages/pre-register-page/pre-register-page.component';
import { DefaultLayoutComponent } from './shared/layout/default-layout/default-layout.component';
import { AppNavbarComponent } from './shared/components/app-navbar/app-navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { CacheService } from './service/cache.service';
import { MyHttpService } from './service/my-http.service';
import { AppFooterComponent } from './shared/components/app-footer/app-footer.component';
import { ProjectsPageComponet } from './pages/projects-page/projects-page.component';
import { PersonRegisterComponent } from './pages/person-register/person-register.component';
import { CommonService } from './service/common.service';
import { AppAreaInputComponent } from './shared/components/app-area-input/app-area-input.component';

export var declarations: any[] = [
  HomePageComponent,
  PreAuthPageComponent,
  LoginPageComponent,
  PreRegisterPageComponent,
  DefaultLayoutComponent,
  AppNavbarComponent,
  PersonalPageComponent,
  AppFooterComponent,
  ProjectsPageComponet,
  PersonRegisterComponent,
  AppAreaInputComponent
]

const routes: Routes = [
  { path: "", component: HomePageComponent, },
  { path: "login", component: LoginPageComponent },
  { path: "pre-register", component: PreRegisterPageComponent },
  { path: 'personal', component: PersonalPageComponent },
  { path: "projects", component: ProjectsPageComponet },
  { path: "person-register", component: PersonRegisterComponent }
];

@NgModule({
  declarations,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CacheService, MyHttpService, CommonService]
})
export class AppRoutingModule { }
