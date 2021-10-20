import { FormGroup, FormControl, Validators } from '@angular/forms'


export class Customer {
    CustomerCode: string = '';
    CustomerName: string = '';
    CustomerAmount: number = 0;

    formGroup: FormGroup;

    constructor() {
        this.formGroup = new FormGroup({
            CustomerCodeControl: new FormControl('',
                [Validators.required, Validators.pattern("^[0-9]{4,4}$")]),
            CustomerNameControl: new FormControl('',[Validators.required])
        })
    }




}









