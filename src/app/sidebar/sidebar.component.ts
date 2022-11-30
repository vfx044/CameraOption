import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

/* Libreria de lector */

import { recognize, RecognizeResult } from 'tesseract.js';
import { OcrService } from '../ocr.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy{
  @Input() inputsImages !:string;
  @ViewChild('InputImagen') inputImagen !: ElementRef
  @ViewChild('OutputImagen') OutputImagen !: ElementRef
  public opensidebar = true    
  public listSuscribers: any = [];
/*   public image :String = this.inputsImages */
  public loading : any
  public dataenter :any

  /* Worker = funcion que nos ayuda a manejar una cola de trabajo  */
  public worker : any;
  public cx !:CanvasRenderingContext2D;


  constructor(private ocrService : OcrService) { }


  ngOnInit(): void {

    this.listObserver()
  }
  ngOnDestroy(): void {
 /*   this.listSuscribers.forEach((a: { unsubscribe: () => any; }) => a.unsubscribe()) */
  }
  listObserver() {
   /*  const observer1$ = this.ocrService.cbImge.subscribe(({src}) => {
      console.log(src)
      this.opensidebar = true
      this.image = src
      console.log(this.inputsImages)

    })

    this.listSuscribers = [ observer1$] */
  }
  toggleMenu = () => {
    this.opensidebar = !this.opensidebar  
  }
  loadingPorgress = (logger: any) =>{
    console.log(logger)
  }

  initSetup = () =>{
    const canvasElement = this.OutputImagen.nativeElement;
    const imgeElement =this.inputImagen.nativeElement;
    const {naturalWidth, naturalHeight } = imgeElement;
    console.log(naturalWidth, naturalHeight)
    this.cx = canvasElement.getContext('2d');
    this.cx.lineWidth = 5
    this.cx.lineCap = 'square';
    this.cx.strokeStyle = 'green'
    /* Establecemos los tamaños del canvas segun el tamaño de la imagen */
    canvasElement.width = naturalWidth;
    canvasElement.height = naturalHeight

    this.Initializacion()
  }
/* Dibujo */

 /*  draw = (dataIn) =>{
    dataIn.words.forEach(w => {
      const bounding = w.bbox;
      console.log(bounding)
      this.cx.strokeStyle = 'red'
      this.cx.strokeRect(bounding.x0, bounding.y0, bounding.x1 - bounding.x0, bounding.y1 - bounding.y0)
      this.cx.beginPath();
      this.cx.moveTo(w.baseline.x0, w.baseline.y0)
      this.cx.moveTo(w.baseline.x1, w.baseline.y1)
      this.cx.stroke()

    });
  } */

  /* Funciones para la lectura de datos */

  Initializacion =async ( ) =>{
    
    /* Seleccionamos el elemento nativo de la imagen */
    const imagenElement = this.inputImagen.nativeElement;
    const {data} = await recognize(imagenElement, 'spa',{
      logger: m => this.loadingPorgress(m) 
    })  ;

/*    this.draw(data) */
    console.log('EL SERVICIO FINALIZO', data);
    this.ocrService.cbText.emit(data)
    this.opensidebar =false
    
  };  

  loadedimage =() =>{
    /* this.Initializacion() */
    this.initSetup()
    console.log('Imagen lista')
    console.log(this.inputsImages)
  }

  
  }

