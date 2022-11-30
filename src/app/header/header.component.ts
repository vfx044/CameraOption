import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private  ocrService: OcrService) { }

  ngOnInit(): void {
  }

 

}
