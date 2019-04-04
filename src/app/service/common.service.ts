import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http.service';

@Injectable()
export class CommonService {
    constructor(private myHttp: MyHttpService) { }
    selectImageToBase64() {
        return new Promise<{ base64: string, ext: string }>(resolve => {

            var input = document.createElement("input");
            input.type = "file";

            input.onchange = function () {
                var file = input.files[0]
                var reader = new FileReader();
                reader.onload = function (e) {
                    var ext = input.files[0].type;
                    switch (ext) {
                        case "image/png":
                            ext = "png";
                            break;
                        default:
                            ext = "jpeg";
                            break;
                    }
                    console.log(file)
                    resolve({ base64: e.target['result'], ext });
                }
                reader.readAsDataURL(file);
            }
            input.click();
        });
    }
    uploadImage(base64: string) {
        return this.myHttp.Post("/api/CucrSaas/ZC/Client/ZCCommon/uploadImage", { base64 })
    }
}