import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from '@cbdev/ngx-webcam';
import { CameraComponentComponent } from 'src/app/camera-component/camera-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CameraComponentComponent],
  imports: [
    CommonModule,
    WebcamModule,
    FormsModule
  ],
  exports:[CameraComponentComponent]
})
export class CameraModuleModule { }
