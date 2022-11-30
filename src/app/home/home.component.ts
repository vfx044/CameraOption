import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OcrService } from '../ocr.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listImages: any[]=[];
public send !:any
 public imageSrc:string = '';
 public listSuscribers: any = [];
 public prev:boolean = true
 public camerabol:boolean = false
  constructor(private ocrService: OcrService) {

  }



  /* meodo */
  ngOnInit(): void {
    
  }

  image=(event)=>{
    this.imageSrc = event
    
  }
  
  clickImage = () => {
this.send = this.imageSrc
/* console.log(this.send) */
this.prev! = this.prev
 
  }
  Camera(){
    this.camerabol = !this.camerabol
  }
clicklabel(){
  if(this.camerabol == true){
    this.camerabol = false
  }
}

/*   onUpload(event: any) {

    const data = event.files
    console.log(data)

    data.forEach(m => {
      console.log(m.objectURL.changingThisBreaksApplicationSecurity)
      this.listImages = m.objectURL.changingThisBreaksApplicationSecurity
      console.log(this.listImages)
    });


  } */

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    /* this.listImages.push(reader.result) ; */
    this.imageSrc = reader.result;
  
  }


}



