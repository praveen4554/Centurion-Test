import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from './http-service.service';
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   private gridOptions: GridOptions;
    private icons: any;
    public rowData: any[];
    public columnDefs: any[];
    public rowCount: string;
    public search:any;

    private api: GridApi;
    private columnApi: ColumnApi;
    public results:any;
    
  constructor(private service: HttpServiceService){
     this.gridOptions = <GridOptions>{};
     this.columnDefs = this.createColumnDefs();
  }
   private createColumnDefs() {
        const columnDefs = [
            {
                headerName: 'Rid',
                field: 'Rid',
               filter: "agTextColumnFilter"
            },
            {
                headerName: 'CustomerName',
                field: "CustomerName",
               filter: "agTextColumnFilter"
            },
            {
                headerName: "JobId",
                field: "JobId",
                filter: "agTextColumnFilter"
            },
            {
                headerName: "CorrelationId",
                field: "CorrelationId",
               filter: "agTextColumnFilter"
            },
            {
                headerName: "TaskType",
                field: "TaskType",
                 filter: "agTextColumnFilter"
            },,
            {
                headerName: 'TaskStatus',
                field: "TaskStatus",
                filter: "agTextColumnFilter"  
            },
            {
                headerName: "DueDate",
                field: "DueDate",
               filter: "agTextColumnFilter"
            },
            {
                headerName: "MissCommit",
                field: "MissCommit",
                filter: "agTextColumnFilter"
            },
            {
                headerName: "State",
                field: "State",
                filter: "agTextColumnFilter"
            },,
            {
                headerName: 'PrimaryContactNo',
                field: "PrimaryContactNo",
                filter: "agTextColumnFilter"  
            },
            {
                headerName: "NotificationSent",
                field: "NotificationSent",
                filter: "agTextColumnFilter"
            },
            {
                headerName: "ReturnMessage",
                field: "ReturnMessage",
                filter: "agTextColumnFilter"
            }
        ];

        return columnDefs;
    }
    ngOnInit(){
      this.service.getData().subscribe((res)=>{
        this.results = res['data'];
      this.rowData = res['data'];
    });
    }
    searchData(){
      this.rowData = this.results.filter((ele)=>{
          return ele.CustomerName.indexOf(this.search)!=-1;
      });
    }
     private onReady(params:any) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
}
