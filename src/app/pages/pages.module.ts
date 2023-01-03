import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { LanguagesComponent } from './languages/languages.component';
import { NavBarComponent } from './navBar/navBar.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialMediaComponent } from './socialMedia/socialMedia.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutMeComponent,
    FooterComponent,
    FormComponent,
    LanguagesComponent,
    NavBarComponent,
    ProjectsComponent,
    SocialMediaComponent
  ],
  exports: [
    AboutMeComponent,
    FooterComponent,
    FormComponent,
    LanguagesComponent,
    NavBarComponent,
    ProjectsComponent,
    SocialMediaComponent
  ]
})
export class PagesModule { }
