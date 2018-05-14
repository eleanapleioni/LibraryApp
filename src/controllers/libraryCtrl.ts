import  * as angular from 'angular';
interface ItemType {
    type: string;
    name?: string;
    added?: string;
    files?: any[]
}

export class LibraryCtrl implements ng.IController {
    LibraryItems: ItemType[] = [];
    orderByValue: string;
    filterByValue: string;
    orderValues: string[] = ["added", "type", "name"];
    static $inject: Array<string> = ["$scope"];
    constructor(private $scope: ng.IScope) {
        this.orderByValue = "name";
        this.Init();
    }

    Init() {
        this.LibraryItems = [{
            type: "pdf",
            name: "Employee Handbook",
            added: "2017-01-06"
        }, {
            type: "pdf",
            name: "Public Holiday policy",
            added: "2016-12-06"
        }, {
            type: "folder",
            name: "Expenses",
            added: "2017-05-02",
            files: [{
                type: "doc",
                name: "Expenses",
                added: "2017-05-02"
            }, {
                type: "doc",
                name: "Fuel allowances",
                added: "2017-05-03"
            }]
        }, {
            type: "csv",
            name: "Cost centres",
            added: "2016-08-12"
        }, {
            type: "folder",
            name: "Misc",
            added: "2015-04-24",
            files: [{
                type: "doc",
                name: "Christmas party",
                added: "2017-12-01"
            }, {
                type: "mov",
                name: "Welcome to the company!",
                added: "2015-04-24"
            }]
        }];

    }

    OpenFolder(folderItem:ItemType) {
        this.LibraryItems = folderItem.files;
        this.$scope.$evalAsync();
    }
}

 