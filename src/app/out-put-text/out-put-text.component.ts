import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-out-put-text',
  templateUrl: './out-put-text.component.html',
  styleUrls: ['./out-put-text.component.css']
})
export class OutPutTextComponent implements OnInit, OnDestroy{

  private listSubscribers!: Subscription[];
  public positionlast:any 
  public positionFirst:any
  
  public textOut!: string;
  public Birthday:string = "28.11.2018"
  public date : string =""
  public word2: any = "MOLINA"
  public word :any = "GARCIA"
  public text :any [] = [
    {
      Word: 'KEVIN'
    },
    {
      Word: 'B'
    },
    {
      Word: 'C'
    },
    {
      Word: 'D'
    },
    {
      Word: 'E'
    },
    
    
  ]
  
  constructor(private ocrService: OcrService) {
  }

  ngOnInit(): void {
    this.listObserver();
  }

  ngOnDestroy(): void {
    this.listSubscribers.forEach(a => a.unsubscribe());
  }


  listObserver = () => {
    const observer1$ = this.ocrService.cbText
      .subscribe(({text}) => {
        this.textOut = text;
      });

    this.listSubscribers = [observer1$];
  };

  NameDetector() :string {
     const tamño = this.word2.length
     this.positionFirst = this.textOut.search(this.word2)
   var date = ""
   date = this.textOut.slice(this.positionFirst, this.positionFirst+tamño) 
   

     return date
  }
  DateDetector():string{
    var position = this.textOut.search(this.Birthday)
    const tamaño = this.Birthday.length
    var date = ""
    date = this.textOut.slice(position, position+tamaño)
    return date

  }

  LastDetector() :string {

/*     const result = this.textOut.slice(200,219) */
 /*    const result:any = this.textOut.indexOf(this.word)
    const prev: any = this.textOut.slice(105, 110) */
    const tamaño = this.word.length
    this.positionlast = this.textOut.search(this.word)
   this.date= this.textOut.slice(this.positionlast, this.positionlast+ tamaño )
    return this.date
 }
 GeneroDetector() :string {
  const result = this.textOut.slice(345,346)


  return result
}
}


