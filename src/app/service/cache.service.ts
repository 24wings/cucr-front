import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http.service';

@Injectable()
export class CacheService {
    constructor(httpService: MyHttpService) { }

    get userId() {
        return localStorage.getItem("userId");
    }
    set userId(uid) {
        localStorage.setItem("userId", uid);
    }
}