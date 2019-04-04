import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyHttpService {
    ip = "http://192.168.1.99:5000"
    constructor(private httpClient: HttpClient) { }
    Get(url: string, params: any = {}) {
        return this.httpClient.get(this.ip + url, { params }).toPromise().then((res: any) => res.success ? res.resdata : this.handleError(res.message));;
    }

    Post(url: string, data: any = {}, params = {}) {
        return this.httpClient.post(this.ip + url, data, { params }).toPromise().then((res: any) => res.success ? res.resdata : this.handleError(res.message));
    }
    handleError(err) {
        alert(err)
        return null;
    }
}