import { Component } from '@angular/core';
import { MyHttpService } from 'src/app/service/my-http.service';
import { CacheService } from 'src/app/service/cache.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
    selector: "personal-page",
    templateUrl: "./personal-page.component.html",
    styleUrls: ["./personal-page.component.css"]
})
export class PersonalPageComponent {
    companys = [];
    card = {
        isDefault: true
    }
    person = {

    }
    constructor(private myHttp: MyHttpService,
        private cache: CacheService,
        private common: CommonService
    ) { }
    async getUserInfo() {
        var rtn = await this.myHttp.Post("/api/CucrSaas/ZC/Admin/ZCAuth/userInfo", { userId: this.cache.userId });
        if (rtn.user) {
            this.person = rtn.user;
            this.card = rtn.user.bank;
            if (rtn.user.headimgfile)
                this.setUserAvatar(rtn.user.headimgfile.path);
        }


    }
    async ngOnInit() {
        this.getUserInfo();
    }
    async  saveUser() {
        var user = Object.assign(this.person);
        user.userId = this.cache.userId;
        user.bank = this.card;
        var rtn = await this.myHttp.Post("/api/CucrSaas/ZC/Admin/ZCSetting/savePersonal", user);
        if (rtn) {
            alert(rtn.user.id);
        } else {

        }
    }
    async logout() {
        this.cache.userId = "";
    }
    ngAfterViewInit() {


    }
    showApplyModel = true;
    setUserAvatar(avatar) {
        setTimeout(() => {
            var dom = document.getElementById("avatar");
            if (dom) {
                // alert(avatar)
                dom.style.backgroundImage = `url("${avatar}")`;
            }

        }, 2000)

    }

    searchTimmer: any = false;

    async searchCompany(keyword) {
        if (this.searchTimmer) {
            clearTimeout(this.searchTimmer);
            this.searchTimmer = 0;
        }
        this.searchTimmer = setTimeout(async () => {
            var rtn = await this.myHttp.Post("/api/CucrSaas/ZC/ZCCompany/searchCompany", { keyword });
            this.companys = rtn.companys;
        }, 1000);



    }

    projectManageApply = {
        companyName: "",
        companyId: "",
        name: "",
        fileId: "",
        fileUrl: "/assets/img/h2.png"
    }
    keyword = "";
    selectCompany(company) {
        this.projectManageApply.companyName = company.name;
        this.projectManageApply.companyId = company.id;
        this.keyword = company.name;
        this.companys = [];
    }

    async uploadImage() {
        var res = await this.common.selectImageToBase64();
        var rtn = await this.common.uploadImage(res.base64);
        // alert(rtn.url);
        if (rtn) {
            this.projectManageApply.fileId = rtn.file.id
            this.projectManageApply.fileUrl = rtn.url;
        }
    }

    async submitProjectManageApply() {
        this.projectManageApply['userId'] = this.cache.userId;
        delete this.projectManageApply.fileUrl;
        var rtn = await this.myHttp.Post("/api/CucrSaas/ZC/ZCCompany/submitProjectManageApply", {});
        if (rtn) {
            alert("成功")
        }
    }
}