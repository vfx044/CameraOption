import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{Subject, Observable} from 'rxjs'
import { WebcamImage,WebcamInitError,WebcamUtil } from '@cbdev/ngx-webcam';
import { OcrService } from '../ocr.service';
@Component({
  selector: 'app-camera-component',
  templateUrl: './camera-component.component.html',
  styleUrls: ['./camera-component.component.css']
})
export class CameraComponentComponent implements OnInit {
  
  constructor( private ocrService : OcrService) { }

  public width:number = 335;
  /* Mostramos webcam */
  public showWebcam = true
 /* Permitimos cambios de camaras */
  public changeWebcam = true
  /* Multiples camaras disponibles */
  public DiferentsCameras = false
  /*  This cellphone have diferent cameras, we obtaine of id */
  public idCameras !:string
  /* Options videos */
  /* public OptionsVideos :MediaTrackConstraints = {
       Dimension of cameras (optional)
     width: { ideal:1024},
      height: {ideal:576} 
  } */

    /* Options for save img */

    /* Erros of camera, don't get data or photo */
  public errors: WebcamInitError [] = []

  /* capture Img of webcam */
  public imgWebcam !: WebcamImage |null
  @Output() sendimg : EventEmitter<any> = new   EventEmitter<any>()
  /* New capture the code creates new object */
  public trigger: Subject<void> = new Subject<void>();
  /* Change last camera or next camera */
  private nexWebcam : Subject<boolean|string> = new Subject<boolean|string>();
  
  public ngOnInit(): void {
    /* Pass native Method for verification  */
    WebcamUtil.getAvailableVideoInputs()
    /* Cont */
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.DiferentsCameras = mediaDevices && mediaDevices.length > 1;
    });

  }
/* Method using for do next snapshop */
  public triggerCapture():void {
    /* we call  trigger and create new objetc */
    
    
    this.trigger.next()
    this.sendimg.emit(this.imgWebcam!.imageAsDataUrl)
  
  }

  /* Metodo para escanear imagen */

  public scanimage(){
  this.sendimg.emit(this.imgWebcam!.imageAsDataUrl)
  }
  /* Method using to change webcam */
  public toggleWebcam():void{
    this.showWebcam = !this.showWebcam;
     
  }
/* Methos using to control errors */
  public handleInitError(error : WebcamInitError):void{
    this.errors.push(error);
  }

  /* Methos using control to image */

  public handleImage(imgWebcam: WebcamImage):void{
    console.info('Image of webcan recived: ', imgWebcam);
    this.imgWebcam = imgWebcam;
  }
  public showNextWebcam(directionOnDeviceId: boolean|string): void {
    this.nexWebcam.next(directionOnDeviceId);
  }

  /*  Method using to id of the camera*/
  public cameraSwitched(idCameras:string):void{
    console.log('Dispositive activated: ' + idCameras);
    this.idCameras = idCameras

  }
  /* Methos using to observable */
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  /*  Methos used to change camera*/
  public get nextWebcamObservable():Observable<boolean|string>{
    return this.nexWebcam.asObservable();
  }
}
