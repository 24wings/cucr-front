import { Component } from '@angular/core';
import { MyHttpService } from 'src/app/service/my-http.service';

@Component({ selector: "projects-page", templateUrl: "./projects-page.component.html" })

export class ProjectsPageComponet {

    constructor(private myHttp: MyHttpService) { }


}