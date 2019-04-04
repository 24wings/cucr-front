import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { MyHttpService } from 'src/app/service/my-http.service';
import { CacheService } from 'src/app/service/cache.service';
import { Router } from '@angular/router';

@Component({
    selector: "pre-register-page",
    templateUrl: "./pre-register-page.component.html",
    styleUrls: ["./pre-register-page.component.css"]
})
export class PreRegisterPageComponent {
    constructor(private common: CommonService,
        private myHttp: MyHttpService,
        private cacche: CacheService,
        private router: Router
    ) { }
    /**
     * 0尚未选中
     * 1 个人注册
     */
    selectedType = 0;



    newPerson = {
        nickname: "昵称",
        name: "wwww",
        headImgUrl: "/assets/img/imgMR.jpg",
        headImg: "",
        region: "",
        cardFrontUrl: "/assets/img/v1.png",
        cardFront: "",
        cardCon: "",
        cardConUrl: "/assets/img/v2.png",
        sex: 1,
        password: "123",
        idCard: "4211",
        phone: "13419597065"
    }
    showHeadImageUrl = "";
    async uploadHeadImage() {
        var rtn = await this.common.selectImageToBase64();
        var file = await this.common.uploadImage(rtn.base64);
        this.newPerson.headImgUrl = file.url;
        this.newPerson.headImg = file.file.id;
    }

    ngOnInit() {
        // this.listAreas();
    }


    async uploadCardFront() {
        var rtn = await this.common.selectImageToBase64();
        var file = await this.common.uploadImage(rtn.base64);
        this.newPerson.cardFrontUrl = file.url;
        this.newPerson.cardFront = file.file.id;
    }

    async uploadCardCno() {
        var rtn = await this.common.selectImageToBase64();
        var file = await this.common.uploadImage(rtn.base64);
        this.newPerson.cardConUrl = file.url;
        this.newPerson.cardCon = file.file.id;
    }


    async personSignup() {
        var rtn = await this.myHttp.Post("/api/CucrSaas/ZC/Admin/ZCAuth/personSignup", this.newPerson);
        if (rtn) {
            if (rtn.user) {
                this.cacche.userId = rtn.user.id;
                return this.router.navigateByUrl('/personal');
            }
        }
    }


}