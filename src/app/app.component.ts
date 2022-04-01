import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navbarCollapsed = true; 
  
  title = 'EncryptionDecryptionSample';  
  validMobile(event: any) {
    var evntvalue =event.target.value;
    console.log('event value lenght'+ evntvalue.length);
    const pattern = /[0-9\+\-\ ]/;
    // var a = [];
    // var k = event.which;
    // for (let i = 48; i < 58; i++)
    //     a.push(i);
    // if (!(a.indexOf(k)>=0))
    // {
    //   event.preventDefault();
    //   console.log('invalid numer');
    // }
        if(evntvalue.length != 10)
        {
          
          console.log('not lenght 10')
        }
        if(evntvalue.length == 10)
        {
          event.preventDefault();
        }
    // const pattern = /^((\\+91-?)|0)?[0-9]{10}$/;

    let inputChar = String.fromCharCode(event.charCode);
    console.log('value of inputChar'+inputChar);
    if (event.keyCode != 8 && !pattern.test(inputChar)  ) {
      event.preventDefault();
      console.log("invaslid no");
    }
  }
  validMobile1(event: any) {
    var evntvalue =event.target.value;
    console.log('event value lenght'+ evntvalue.length);
    console.log('char at 0 ' +evntvalue.charAt(0))
    const pattern = /[0-9\+\-\ ]/;
        if(evntvalue.length != 10)
        {
          
          console.log('not lenght 10')
        }
        if(evntvalue.length == 10   )
        {
         
          event.preventDefault();
        }
        
    // const pattern = /^((\\+91-?)|0)?[0-9]{10}$/;

    let inputChar = String.fromCharCode(event.charCode);
    console.log('value of inputChar'+inputChar);
    if (event.keyCode != 8 && !pattern.test(inputChar)  ) {
      event.preventDefault();
      console.log("invaslid no");
    }
  }
    
 
  constructor() {  
  }  
 
}
