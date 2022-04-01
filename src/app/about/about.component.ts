import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../assets/json/multipledropdown.json').subscribe(res1 =>{
      console.log('res1',res1);
      this.data= res1;
      console.log('this.data[0]',this.data[0]);
      // console.log(Object.keys(this.data).length);

    //   for (let key in this.data) {

    //     console.log(key, this.data[key]);
    //   }

    //   for (let [key, value] of Object.entries(this.data)) {
    //     console.log(key, value);
    // }
      
      

 
      // console.log('json data', this.data)
    })
  }

  fakes(abc){
    console.log('abc',abc);
  }
}
