import { Component } from '@angular/core';
import { MyHttpService } from '../../service/my-http.service';
import { CacheService } from 'src/app/service/cache.service';
import { Router } from '@angular/router';

@Component({
    selector: "login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent {
    phone: string = "17712345678";
    password: string = "";

    constructor(private myHttp: MyHttpService, private cacheService: CacheService, private router: Router) { }

    async login() {
        var data = await this.myHttp.Post("/api/CucrSaas/ZC/Admin/ZCAuth/login", { phone: this.phone, pwd: this.password, option: "ok" });
        if (data) {
            this.cacheService.userId = data.user.id;
            this.router.navigateByUrl("/personal");
        }

    }

}
