import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnquiryserviceService } from '../enquiryservice.service';
import { TrxnData } from './trxndata';

@Component({
  selector: 'app-trxn-date-range',
  templateUrl: './trxn-date-range.component.html',
  styleUrls: ['./trxn-date-range.component.css']
})
export class TrxnDateRangeComponent implements AfterViewInit {

  trxndata:TrxnData[]=[];
  displayedColumns:String[]=['trxn_CODE','trxn_CUSTOMER_NAME','trxn_KEY','trxn_STATUS','trxn_TGTW_CODE'];
  dataSource=new MatTableDataSource<TrxnData>(this.trxndata);

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;


  constructor(private service:EnquiryserviceService) { }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public fetchData(){
     this.service.fetch()
     .subscribe((data)=>this.dataSource.data=data as TrxnData[]);
  }


  test():void{
    console.log("hi");
    this.fetchData();
  }
}
