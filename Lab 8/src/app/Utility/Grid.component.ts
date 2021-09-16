import {Component,
    Input,
    Output,
    EventEmitter} from "@angular/core"

@Component({
    selector: "grid-ui",
    templateUrl : "./Grid.view.html"
})
export class GridComponent{
    // for the column names
    gridColumns: Array<any> = new Array<any>();
    // grid data 
    gridData: Array<any> = new Array<any>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<any>){
       this.gridColumns = _gridColumns;     
    }
    @Input("grid-data")
    set setGridData(_gridData:Array<any>){
        this.gridData = _gridData;     
     }
     
     @Output("grid-selected")
     eventemitter: EventEmitter<any> = 
     new EventEmitter<any>();

    // send the selected object to the ui under which component is running
     SelectGrid(_selected:any){
    // emit out a event will send a signal to the ui under which component is running
         this.eventemitter.emit(_selected);
     }
     
}