import { Component } from '@angular/core';
import { CacheService } from 'src/app/service/cache.service';

@Component({
    selector: "app-navbar",
    templateUrl: "./app-navbar.component.html"
})
export class AppNavbarComponent {
    isLogin = false;

    constructor(private cacheService: CacheService) {
    }
    ngOnInit() {

        setInterval(() => {
            this.isLogin = !!this.cacheService.userId;
        }, 2000)
    }
}