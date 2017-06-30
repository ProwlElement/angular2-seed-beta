System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {CoursesComponent} from './courses.component'
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.likes = 10;
                    this.isActive = true;
                    this.change = new core_1.EventEmitter();
                }
                FavoriteComponent.prototype.onClick = function () {
                    // if you click it equals the opposite
                    this.isActive = !this.isActive;
                    this.likes += !this.isActive ? 1 : -1;
                    //console.log(this.isActive);
                };
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        templateUrl: 'app/favorite.template.html',
                        styles: [" \n        span.glyphicon{\n            margin:50px;\n            cursor: pointer;\n        }\n        .grey-heart{\n            color: #ccc;\n            \n        }\n\n        .pink-heart{\n            color:deeppink;\n        }\n\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map