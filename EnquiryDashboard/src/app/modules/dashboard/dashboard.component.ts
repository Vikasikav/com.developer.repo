import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EnquiryserviceService } from '../enquiryservice.service';
import { Users} from 'src/users';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {



  user: Users[] = [];

  displayedColumns:String[]=['userId','title','id','body'];
  dataSource=new MatTableDataSource<Users>(this.user);

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  constructor(private service:EnquiryserviceService) { }


  ngAfterViewInit(){
    this.getAll();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAll(){
    this.service.covid()
    .subscribe((data)=>this.dataSource.data=data as Users[]);

  }

}
