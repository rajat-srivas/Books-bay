import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksCategoryLandingComponent } from './books-category-landing/books-category-landing.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { WeGotYouComponent } from './we-got-you/we-got-you.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceService } from './_services/auth-service.service';
import {HttpClientModule} from '@angular/common/http';
import {ValidateEqualDirective} from './_helpers/ValidateEqual.directive';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BooksCategoryLandingComponent,
      HowItWorksComponent,
      SectionTitleComponent,
      WeGotYouComponent,
      GridGalleryComponent,
      LoginComponent,
      ValidateEqualDirective
   ],
   imports: [
   BrowserModule,
      AppRoutingModule,
      ModalModule.forRoot(),
      AngularFontAwesomeModule,
      FormsModule,
      BrowserAnimationsModule,
      HttpClientModule
   ],
   entryComponents: [LoginComponent],
   providers: [AuthServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
