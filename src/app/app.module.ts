import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from "@angular/forms";
import { OutPutTextComponent } from './out-put-text/out-put-text.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { CameraModuleModule } from './Modules/camera-module/camera-module.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    OutPutTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    CameraModuleModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
