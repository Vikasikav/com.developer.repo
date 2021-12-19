import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-export',
  templateUrl: './mis-export.component.html',
  styleUrls: ['./mis-export.component.css']
})
export class MisExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  test():void{
    console.log("hi");
  }
}
