import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MyHttpService } from 'src/app/service/my-http.service';

@Component({
    selector: "app-area-input",
    templateUrl: "./app-area-input.component.html",
    styleUrls: ["./app-area-input.component.css"]
})
export class AppAreaInputComponent {

    @Input() value = "";
    areas = [];

    @Output() valueChange = new EventEmitter();

    constructor(private myHttp: MyHttpService) { }

    async listAreas(id = 0, text = "") {
        if (text)
            this.value += (this.value ? "-" : "") + text;
        var rtn = await this.myHttp.Get("/api/CucrSaas/ZC/Client/ZCCommon/listAreas", { Filter: JSON.stringify(["PID", "=", id]) });
        this.areas = rtn.areas.data;

        this.valueChange.emit(this.value);
    }
}