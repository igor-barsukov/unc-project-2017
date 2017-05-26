webpackJsonp([0,5],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = (function () {
    //host:string = "http://jj-back-end-jj.7e14.starter-us-west-2.openshiftapps.com/";
    function HttpService(http) {
        this.http = http;
        this.host = "http://localhost:8181/";
        this.idSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.id$ = this.idSubject.asObservable();
    }
    HttpService.prototype.addPhoto = function (obj) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'photos/', obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getAlbumsByTravelID = function (idTrip) {
        return this.http.get(this.host + 'albums/travel=' + idTrip)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.sendEmail = function (email, travelId, userId) {
        return this.http.get(this.host + 'sendEmail/travel=' + travelId + '/user=' + userId + '/' + email)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getAllUsers = function () {
        return this.http.get(this.host + 'users/')
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.addAlbum = function (obj) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'albums/', obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.addUser = function (obj) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'users', obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.updateUser = function (obj) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'users', obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.signInUser = function (obj) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'users/login/', obj, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    HttpService.prototype.getTravelsToUser = function (id) {
        return this.http.get(this.host + 'userToTravels/travelsByUserId/' + id)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getCountries = function () {
        return this.http.get(this.host + 'countries')
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getStatesOfTheCountry = function (id) {
        return this.http.get(this.host + 'states/country/' + id)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getCitiesOfTheState = function (id) {
        return this.http.get(this.host + 'cities/state/' + id)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getAlbums = function () {
        return this.http.get(this.host + 'account/albums/4');
    };
    HttpService.prototype.getHomeTrips = function () {
        return this.http.get(this.host + 'travels')
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getProfileTrips = function () {
        return this.http.get(this.host + 'travels')
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.checkEmail = function (email) {
        return this.http.get(this.host + 'users/getByEmail/' + email);
    };
    HttpService.prototype.getUser = function (id) {
        return this.http.get(this.host + 'users/' + id)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.addOrUpdateTrip = function (obj, id) {
        console.log(obj);
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'travels?userId=' + id, obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getTrip = function (id) {
        return this.http.get(this.host + 'travels/' + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getActivitiesToTrip = function (idTrip) {
        return this.http.get(this.host + 'activities/travel/' + idTrip)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getMovementToTrip = function (idTrip) {
        return this.http.get(this.host + 'movements/travel/' + idTrip)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.deleteMovement = function (id) {
        return this.http.delete(this.host + 'movements/' + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.deleteActivity = function (id) {
        return this.http.delete(this.host + 'activities/' + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.sendChatMessage = function (obj) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'chatTravels', obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getChatMessages = function (id) {
        return this.http.get(this.host + 'chatTravels/travel=' + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.addActivity = function (obj, id) {
        console.log(obj);
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'newactivities?travelId= ' + id, obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.addMovement = function (obj, id) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'newmovements?travelId=' + id, obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.updateTrip = function (obj) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.post(this.host + 'travels', obj, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.deleteTrip = function (id) {
        var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        if (csrf_token_name && csrf_token)
            headers.set(csrf_token_name, csrf_token);
        return this.http.delete(this.host + 'travels/' + id, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getParticipantsToTrip = function (id) {
        return this.http.get(this.host + 'userToTravels/usersToTravelByTravelId/' + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.getRoleInTrip = function (userId, travelId) {
        return this.http.get(this.host + 'userToTravels/user=' + userId + '/travel=' + travelId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpService.prototype.setId = function (id) {
        console.log("id" + id);
        this.idSubject.next(id);
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/http.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transport; });
var Transport = (function () {
    function Transport(id, name) {
        this.id = id;
        this.name = name;
    }
    return Transport;
}());
//# sourceMappingURL=D:/projectunc/src/transport.interface.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityType; });
/**
 * Created by Сергей on 19.05.2017.
 */
var ActivityType = (function () {
    function ActivityType(id, name) {
        this.id = id;
        this.name = name;
    }
    return ActivityType;
}());
//# sourceMappingURL=D:/projectunc/src/activityType.interface.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day; });
/**
 * Created by Сергей on 30.04.2017.
 */
var Day = (function () {
    function Day(id, name, action) {
        this.id = id;
        this.name = name;
        this.action = action;
    }
    return Day;
}());
//# sourceMappingURL=D:/projectunc/src/day.interface.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return City; });
var City = (function () {
    function City(id, name) {
        this.id = id;
        this.name = name;
    }
    return City;
}());
//# sourceMappingURL=D:/projectunc/src/city.interface.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gender; });
var Gender = (function () {
    function Gender(id, gender) {
        this.id = id;
        this.gender = gender;
    }
    return Gender;
}());
//# sourceMappingURL=D:/projectunc/src/gender.interface.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_day_interface__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_activities_interface__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_movements_interface__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_album_interface__ = __webpack_require__(693);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Created by Сергей on 30.04.2017.
 */
var TripService = (function () {
    function TripService(httpService, localStorageService) {
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.idUser = parseInt(localStorage.getItem('id'));
        this.pathSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.path$ = this.pathSubject.asObservable();
        this.mapSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.sight$ = this.mapSubject.asObservable();
        this.roleSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.role$ = this.roleSubject.asObservable();
        this.tripSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.trip$ = this.tripSubject.asObservable();
        this.nameDaySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.nameDay$ = this.nameDaySource.asObservable();
        this.participantSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.participant$ = this.participantSubject.asObservable();
        this.activitiesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activity$ = this.activitiesSubject.asObservable();
        this.movementsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.movement$ = this.movementsSubject.asObservable();
    }
    TripService.prototype.addTrip = function (addTrip) {
        this.trip = addTrip;
    };
    TripService.prototype.addReadyTrip = function (idTrip) {
        var _this = this;
        this.idTrip = idTrip;
        this.httpService.getTrip(idTrip)
            .subscribe(function (data) {
            _this.trip = data;
            _this.setPath(_this.trip.photo);
            var i = 1;
            _this.trip.days = [];
            _this.trip.activities = [];
            _this.trip.movements = [];
            _this.trip.days.push(new __WEBPACK_IMPORTED_MODULE_2__models_day_interface__["a" /* Day */](i, new Date(_this.trip.startDate), []));
            while (_this.trip.days[_this.trip.days.length - 1].name < new Date(_this.trip.endDate)) {
                i++;
                _this.trip.days.push(new __WEBPACK_IMPORTED_MODULE_2__models_day_interface__["a" /* Day */](i, new Date(_this.trip.days[_this.trip.days.length - 1].name.valueOf() + 24 * 60 * 60 * 1000), []));
            }
            _this.httpService.getActivitiesToTrip(idTrip)
                .subscribe(function (data) {
                for (var index in data) {
                    var activity = data[index];
                    _this.trip.activities.push(new __WEBPACK_IMPORTED_MODULE_3__models_activities_interface__["a" /* Activities */](activity.id, activity.travel, activity.name, activity.address, activity.description, activity.price, activity.ticket, activity.coordinates, new Date(activity.startTime), new Date(activity.endTime), activity.activityType));
                }
            });
            _this.httpService.getAlbumsByTravelID(idTrip)
                .subscribe(function (data) {
                _this.trip.album = data;
                console.log(_this.trip.album);
            });
            _this.httpService.getMovementToTrip(idTrip)
                .subscribe(function (data) {
                for (var index in data) {
                    var movement = data[index];
                    //console.log(movement);
                    _this.trip.movements.push(new __WEBPACK_IMPORTED_MODULE_4__models_movements_interface__["a" /* Movement */](movement.id, movement.transport, movement.travel, new Date(movement.startTime), new Date(movement.endTime), movement.startAddress, movement.destinationAddress, movement.price, movement.distance, movement.description, movement.ticket, movement.start_coordinates, movement.destination_coordinates));
                }
            });
            _this.httpService.getParticipantsToTrip(idTrip)
                .subscribe(function (data) {
                _this.trip.participants = data;
                _this.setParticipant(_this.trip.participants);
            });
            _this.setNameDay(_this.trip.days);
            _this.setTrip(_this.trip);
        });
    };
    TripService.prototype.addRole = function (idTrip) {
        var _this = this;
        this.httpService.getRoleInTrip(this.idUser, idTrip)
            .subscribe(function (data) {
            _this.setRole(data.role.id);
        });
    };
    TripService.prototype.addOrUpdateTrip = function (trip) {
        var _this = this;
        this.httpService.addOrUpdateTrip(trip, this.idUser)
            .subscribe(function (data) {
            _this.trip.id = data.id;
            console.log(data);
            console.log(_this.trip);
            _this.httpService.addAlbum(new __WEBPACK_IMPORTED_MODULE_7__models_album_interface__["a" /* Album */](null, _this.trip.name, _this.trip.startDate, "album for " + _this.trip.name, _this.trip))
                .subscribe(function (data) {
                _this.trip.album = data;
                console.log(_this.trip);
            });
        });
    };
    TripService.prototype.getTrip = function () {
        return this.trip;
    };
    TripService.prototype.getRole = function () {
        return this.role;
    };
    TripService.prototype.setPath = function (path) {
        this.pathSubject.next(path);
    };
    TripService.prototype.setMap = function (activity) {
        this.mapSubject.next(activity);
    };
    TripService.prototype.setRole = function (role) {
        this.roleSubject.next(role);
        this.role = role;
    };
    TripService.prototype.setTrip = function (trip) {
        this.tripSubject.next(trip);
    };
    TripService.prototype.setNameDay = function (nameDay) {
        this.nameDaySource.next(nameDay);
    };
    TripService.prototype.setParticipant = function (participant) {
        this.participantSubject.next(participant);
    };
    TripService.prototype.setActivitySubject = function (activity) {
        this.activitiesSubject.next(activity);
    };
    TripService.prototype.setMovementSubject = function (movement) {
        this.movementsSubject.next(movement);
    };
    TripService.prototype.getDays = function () {
        return this.trip.days;
    };
    TripService.prototype.addDay = function (addDay) {
        //this.trip.days.push(addDay);
        console.log(this.trip);
    };
    TripService.prototype.getDay = function (id) {
        console.log(id);
        return this.trip.days[id];
    };
    TripService.prototype.setActivities = function (activity) {
        console.log(activity);
        this.httpService.addActivity(activity, this.trip.id)
            .subscribe(function (data) {
            console.log(data);
        });
        this.trip.activities.push(activity);
    };
    TripService.prototype.getActivities = function () {
        return this.trip.activities;
    };
    TripService.prototype.setMovement = function (movement) {
        console.log(movement);
        this.httpService.addMovement(movement, this.trip.id)
            .subscribe(function (data) {
            console.log(data);
        });
        this.trip.movements.push(movement);
        //console.log(this.trip);
    };
    TripService.prototype.getMovements = function () {
        return this.trip.movements;
    };
    TripService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === 'function' && _b) || Object])
    ], TripService);
    return TripService;
    var _a, _b;
}());
//# sourceMappingURL=D:/projectunc/src/trip.service.js.map

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 539;


/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(681);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/projectunc/src/main.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(route, httpService) {
        var _this = this;
        this.route = route;
        this.httpService = httpService;
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    AccountComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(861),
            styles: [__webpack_require__(822)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projectunc/src/account.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePhotosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePhotosComponent = (function () {
    function ProfilePhotosComponent(httpService) {
        this.httpService = httpService;
        this.albums = [];
    }
    ProfilePhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getAlbums()
            .subscribe(function (resp) {
            var albumList = resp.json().albums;
            for (var index in albumList) {
                console.log(albumList[index]);
                var album = albumList[index];
                _this.albums.push(album);
            }
        });
    };
    ProfilePhotosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-photos',
            template: __webpack_require__(862),
            styles: [__webpack_require__(823)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], ProfilePhotosComponent);
    return ProfilePhotosComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/profile-photos.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_interface__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_city_interface__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_gender_interface__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = 'http://localhost:8181/fileUploadPage';
var ProfileComponent = (function () {
    function ProfileComponent(route, httpService, http, el) {
        this.route = route;
        this.httpService = httpService;
        this.http = http;
        this.el = el;
        this.listCities = [];
        this.listStateOfTheCountry = [];
        this.listCityesOfTheState = [];
        this.mathchingPass = true;
    }
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userPassword = {
            oldPassword: '',
            password: '',
            confirmPassword: ''
        };
        this.httpService.getUser(this.route.parent.snapshot.params["id"])
            .subscribe(function (resp) {
            var user = resp.json();
            if (user)
                _this.userProfile = user;
            _this.pathToPhoto = _this.userProfile.userPhoto;
        });
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
        this.httpService.getCountries()
            .subscribe(function (resp) {
            var cityList = resp.json();
            for (var index in cityList) {
                var city = cityList[index];
                _this.listCities.push(city);
            }
            //console.log(this.listCities);
        });
    };
    ProfileComponent.prototype.setCountryId = function (idCountry) {
        var _this = this;
        console.log(idCountry);
        this.listStateOfTheCountry = [];
        this.listCityesOfTheState = [];
        this.httpService.getStatesOfTheCountry(idCountry)
            .subscribe(function (resp) {
            var stateList = resp.json();
            for (var index in stateList) {
                var state = stateList[index];
                _this.listStateOfTheCountry.push(state);
            }
            //console.log(this.listCities);
        });
    };
    ProfileComponent.prototype.setStateId = function (idState) {
        var _this = this;
        console.log(idState);
        this.listCityesOfTheState = [];
        this.httpService.getCitiesOfTheState(idState)
            .subscribe(function (resp) {
            var citiesList = resp.json();
            for (var index in citiesList) {
                var city = citiesList[index];
                _this.listCityesOfTheState.push(city);
            }
            // console.log(this.listCities);
        });
    };
    ProfileComponent.prototype.updateUser = function (model, isValid) {
        console.log(model);
        if (isNaN(parseInt(model.city.toString()))) {
            this.updateProfile = new __WEBPACK_IMPORTED_MODULE_2__models_user_interface__["a" /* User */](this.userProfile.id, model.lastName, model.firstName, model.birthday, this.userProfile.email, this.userProfile.password, new __WEBPACK_IMPORTED_MODULE_6__models_gender_interface__["a" /* Gender */](model.gender, ""), this.userProfile.city, model.info, null);
            console.log(this.updateProfile);
        }
        else {
            this.updateProfile = new __WEBPACK_IMPORTED_MODULE_2__models_user_interface__["a" /* User */](this.userProfile.id, model.lastName, model.firstName, model.birthday, this.userProfile.email, this.userProfile.password, new __WEBPACK_IMPORTED_MODULE_6__models_gender_interface__["a" /* Gender */](model.gender, ""), new __WEBPACK_IMPORTED_MODULE_5__models_city_interface__["a" /* City */](model.city.toString(), ""), model.info, null);
            console.log(this.updateProfile);
        }
        this.httpService.updateUser(this.updateProfile)
            .subscribe(function (data) {
            console.log(data);
            // this.userProfile = data;
        });
    };
    ProfileComponent.prototype.updatePassword = function (model, isValid) {
        console.log(model);
    };
    ProfileComponent.prototype.upload = function () {
        // var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        // var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        // //noinspection TypeScriptValidateTypes
        // let headers = new Headers({
        //   'Content-Type': 'application/json;charset=utf-8'
        // });
        // if (csrf_token_name && csrf_token)
        //   headers.set(csrf_token_name, csrf_token);
        var _this = this;
        //locate the file element meant for the file upload.
        var inputEl = this.el.nativeElement.querySelector('#photo');
        //get the total amount of files attached to the file input.
        var fileCount = inputEl.files.length;
        //create a new fromdata instance
        var formData = new FormData();
        //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) {
            //append the key name 'photo' with the first file in the element
            formData.append('file', inputEl.files.item(0));
            //call the angular http method
            console.log();
            this.http
                .post(URL, formData)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.pathToPhoto = data;
                console.log(_this.pathToPhoto);
                _this.userProfile.userPhoto = data;
                _this.httpService.addUser(_this.userProfile).subscribe(function (data) {
                    _this.userProfile = data;
                });
            });
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(863),
            styles: [__webpack_require__(833)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projectunc/src/profile.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripsComponent = (function () {
    function TripsComponent(route, httpService) {
        var _this = this;
        this.route = route;
        this.httpService = httpService;
        this.profileTripsActive = [];
        this.profileTripsComplited = [];
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    TripsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getTravelsToUser(this.route.parent.snapshot.params["id"])
            .subscribe(function (resp) {
            var tripList = resp.json();
            for (var index in tripList) {
                //console.log(tripList[index]);
                var trip = tripList[index];
                if (trip.active)
                    _this.profileTripsActive.push(trip);
                else
                    _this.profileTripsComplited.push(trip);
            }
        });
    };
    TripsComponent.prototype.deleteTrip = function (id) {
        this.httpService.deleteTrip(id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    TripsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    TripsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(864),
            styles: [__webpack_require__(824)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object])
    ], TripsComponent);
    return TripsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projectunc/src/trips.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(865),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/projectunc/src/app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registered_registered_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sign_in_sign_in_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_equal_validator_directive__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_carousel_carousel_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_trips_home_trips_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trip_planning_bus_dialog_bus_dialog_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trip_planning_car_dialog_car_dialog_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__trip_planning_rail_dialog_rail_dialog_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__trip_planning_flight_dialog_flight_dialog_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__trip_planning_lodging_dialog_lodging_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__trip_planning_sights_dialog_sights_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__trip_planning_dialog_dialog_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__trip_planning_trip_planning_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__trip_planning_transportation_transportation_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_bootstrap_datepicker__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_bootstrap_modal__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__trip_planning_datepicker_datepicker_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__chat_chat_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_moment__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__account_account_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__account_profile_photos_profile_photos_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__account_trips_trips_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__account_profile_profile_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__guards_main_guard__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guards_login_guard__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__map_map_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__messages_messages_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__trip_planning_participants_participants_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__created_trip_created_trip_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng2_search_filter__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ngx_facebook__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular2_social_login__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__user_trip_info_trip_info_component__ = __webpack_require__(714);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














































var transportRoutes = [
    { path: 'flight', component: __WEBPACK_IMPORTED_MODULE_18__trip_planning_flight_dialog_flight_dialog_component__["a" /* FlightDialogComponent */] },
    { path: 'rail', component: __WEBPACK_IMPORTED_MODULE_17__trip_planning_rail_dialog_rail_dialog_component__["a" /* RailDialogComponent */] },
    { path: 'bus', component: __WEBPACK_IMPORTED_MODULE_15__trip_planning_bus_dialog_bus_dialog_component__["a" /* BusDialogComponent */] },
    { path: 'car', component: __WEBPACK_IMPORTED_MODULE_16__trip_planning_car_dialog_car_dialog_component__["a" /* CarDialogComponent */] }
];
var tripRoutes = [
    { path: 'participants', component: __WEBPACK_IMPORTED_MODULE_39__trip_planning_participants_participants_component__["a" /* ParticipantsComponent */] },
    { path: 'transport', component: __WEBPACK_IMPORTED_MODULE_23__trip_planning_transportation_transportation_component__["a" /* TransportationComponent */], children: transportRoutes },
    { path: 'lodging', component: __WEBPACK_IMPORTED_MODULE_19__trip_planning_lodging_dialog_lodging_component__["a" /* LodgingComponent */] },
    { path: 'sights', component: __WEBPACK_IMPORTED_MODULE_20__trip_planning_sights_dialog_sights_component__["a" /* SightsComponent */] },
];
var accountRoutes = [
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_32__account_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_main_guard__["a" /* MainGuard */], __WEBPACK_IMPORTED_MODULE_35__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'trips', component: __WEBPACK_IMPORTED_MODULE_31__account_trips_trips_component__["a" /* TripsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_main_guard__["a" /* MainGuard */], __WEBPACK_IMPORTED_MODULE_35__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'album', component: __WEBPACK_IMPORTED_MODULE_30__account_profile_photos_profile_photos_component__["a" /* ProfilePhotosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_main_guard__["a" /* MainGuard */], __WEBPACK_IMPORTED_MODULE_35__guards_login_guard__["a" /* LoginGuard */]] }
];
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'account/:id', component: __WEBPACK_IMPORTED_MODULE_29__account_account_component__["a" /* AccountComponent */], children: accountRoutes },
    { path: 'registered', component: __WEBPACK_IMPORTED_MODULE_5__registered_registered_component__["a" /* RegisteredComponent */] },
    { path: 'trip-planning/:id', component: __WEBPACK_IMPORTED_MODULE_22__trip_planning_trip_planning_component__["a" /* TripPlanningComponent */], children: tripRoutes },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_36__map_map_component__["a" /* MapComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */] },
    { path: 'trip-info/:id', component: __WEBPACK_IMPORTED_MODULE_45__user_trip_info_trip_info_component__["a" /* TripInfoComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var providers = {
    'facebook': { 'clientId': '1455074181180837',
        'apiVersion': 'v2.9' }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__registered_registered_component__["a" /* RegisteredComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_equal_validator_directive__["a" /* EqualValidator */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_32__account_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_30__account_profile_photos_profile_photos_component__["a" /* ProfilePhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_trips_home_trips_component__["a" /* HomeTripsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__account_trips_trips_component__["a" /* TripsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__trip_planning_trip_planning_component__["a" /* TripPlanningComponent */],
                __WEBPACK_IMPORTED_MODULE_21__trip_planning_dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__trip_planning_sights_dialog_sights_component__["a" /* SightsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__trip_planning_lodging_dialog_lodging_component__["a" /* LodgingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__trip_planning_datepicker_datepicker_component__["a" /* DatepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__trip_planning_flight_dialog_flight_dialog_component__["a" /* FlightDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__trip_planning_rail_dialog_rail_dialog_component__["a" /* RailDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__trip_planning_car_dialog_car_dialog_component__["a" /* CarDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__trip_planning_bus_dialog_bus_dialog_component__["a" /* BusDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_23__trip_planning_transportation_transportation_component__["a" /* TransportationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_29__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_36__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_37__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_39__trip_planning_participants_participants_component__["a" /* ParticipantsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__created_trip_created_trip_component__["a" /* CreatedTripComponent */],
                __WEBPACK_IMPORTED_MODULE_41_ng2_search_filter__["Ng2SearchPipe"],
                __WEBPACK_IMPORTED_MODULE_45__user_trip_info_trip_info_component__["a" /* TripInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_24_ng2_bootstrap_datepicker__["a" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ng2_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_33_angular_2_local_storage__["LocalStorageModule"].withConfig({
                    prefix: 'app-root',
                    //  storageType: 'localStorage'
                    storageType: 'sessionStorage'
                }),
                __WEBPACK_IMPORTED_MODULE_42_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_43_angular2_social_login__["a" /* Angular2SocialLoginModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_34__guards_main_guard__["a" /* MainGuard */], __WEBPACK_IMPORTED_MODULE_35__guards_login_guard__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_38__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_44__services_http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/projectunc/src/app.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chatMessage_inerface__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(chatService, route, httpService, localStorageService) {
        var _this = this;
        this.chatService = chatService;
        this.route = route;
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.messages = [];
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.date = new Date();
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = {
            id: null,
            travel: null,
            sender: null,
            sendTime: null,
            body: ''
        };
        this.httpService.getChatMessages(this.id)
            .subscribe(function (data) {
            _this.messages = data;
        });
        this.httpService.getUser(parseInt(localStorage.getItem('id')))
            .subscribe(function (resp) {
            var user = resp.json();
            if (user)
                _this.userProfile = user;
            console.log(_this.userProfile);
        });
        this.httpService.getTrip(this.id)
            .subscribe(function (data) {
            _this.trip = data;
        });
        this.connection = this.chatService.getMessages().subscribe(function (msg) {
            _this.newMessage = msg;
            if (_this.id == _this.newMessage.text.travel.id) {
                _this.messages.push(new __WEBPACK_IMPORTED_MODULE_4__models_chatMessage_inerface__["a" /* chatMessage */](null, _this.newMessage.text.travel, _this.newMessage.text.sender, _this.newMessage.text.sendTime, _this.newMessage.text.body));
            }
            if (_this.message.sender.id.toString() !== 'null') {
                if (_this.message.sender.id.toString() == localStorage.getItem('id')) {
                    // document.getElementById('sender').style.cssFloat = 'left';
                    document.getElementById('sender').style.background = 'dodgerblue';
                }
                else {
                    // document.getElementById('sender').style.cssFloat = 'right';
                    document.getElementById('sender').style.background = 'palegoldenrod';
                }
            }
            console.log(_this.message.sender.id + ' ' + parseInt(localStorage.getItem('id')));
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        this.message = new __WEBPACK_IMPORTED_MODULE_4__models_chatMessage_inerface__["a" /* chatMessage */](null, this.trip, this.userProfile, new Date, this.msg);
        this.httpService.sendChatMessage(this.message)
            .subscribe(function (data) {
            console.log(data);
        });
        this.chatService.sendMessage(this.message);
        this.msg = '';
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(866),
            styles: [__webpack_require__(835)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === 'function' && _d) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projectunc/src/chat.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });


var ChatService = (function () {
    function ChatService() {
        this.url = 'http://localhost:5000';
    }
    ChatService.prototype.sendMessage = function (chatMessage) {
        this.socket.emit('add-message', chatMessage);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());
//# sourceMappingURL=D:/projectunc/src/chat.service.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatedTripComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatedTripComponent = (function () {
    function CreatedTripComponent() {
    }
    CreatedTripComponent.prototype.ngOnInit = function () {
    };
    CreatedTripComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-created-trip',
            template: __webpack_require__(867),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [])
    ], CreatedTripComponent);
    return CreatedTripComponent;
}());
//# sourceMappingURL=D:/projectunc/src/created-trip.component.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        var v = c.value;
        var e = c.root.get(this.validateEqual);
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidator = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator; }), multi: true }
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')), 
        __metadata('design:paramtypes', [String, String])
    ], EqualValidator);
    return EqualValidator;
}());
//# sourceMappingURL=D:/projectunc/src/equal-validator.directive.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var LoginGuard = (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("id") != "null") {
            this.reg = true;
        }
        else {
            this.reg = false;
            confirm('Вы не зарегистрированы!');
        }
        return this.reg;
    };
    return LoginGuard;
}());
/**
 * Created by Сергей on 24.04.2017.
 */
//# sourceMappingURL=D:/projectunc/src/login.guard.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainGuard; });
var MainGuard = (function () {
    function MainGuard() {
    }
    MainGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("id") != route.parent.params['id']) {
            this.reg = false;
            confirm('Error');
        }
        else {
            this.reg = true;
        }
        return this.reg;
        // if(localStorage.getItem("id") != "null"){
        //    this.reg = true;;
        // }else{
        //    this.reg = false;
        //     confirm('Вы не зарегистрированы!');
        // }
        // return this.reg;
    };
    return MainGuard;
}());
//# sourceMappingURL=D:/projectunc/src/main.guard.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(868),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
//# sourceMappingURL=D:/projectunc/src/carousel.component.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTripsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeTripsComponent = (function () {
    function HomeTripsComponent(httpService) {
        this.httpService = httpService;
        this.homeTrips = [];
    }
    HomeTripsComponent.prototype.ngOnInit = function () {
        // this.httpService.getRoleInTrip(parseInt(localStorage.getItem('id')), this.tripID)
        //     .subscribe((data) =>{
        //         console.log(data);
        //         this.roleInTrip = data;
        //     });
        var _this = this;
        this.httpService.getProfileTrips()
            .subscribe(function (resp) {
            var tripList = resp.json();
            for (var index in tripList) {
                // console.log(index);
                var trip = tripList[index];
                _this.homeTrips.push(trip);
            }
        });
    };
    HomeTripsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-trips',
            template: __webpack_require__(869),
            styles: [__webpack_require__(826)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], HomeTripsComponent);
    return HomeTripsComponent;
    var _a;
}());
// this.httpService.getRoleInTrip(parseInt(localStorage.getItem('id')), trip.id)
//     .subscribe((data) => {
//         // console.log(data);
//         console.log(data.role.id);
//         if (data) {
//             this.route = "//trip-planning/" + trip.id;
//         } else {
//             this.route = "/trip-info/" + trip.id;
//         }
//         // console.log(data.role.id);
//         // this.pathToTrip[index] = "/trip-info/";
//     })
//# sourceMappingURL=D:/projectunc/src/home-trips.component.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(870),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/projectunc/src/home.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sight__ = __webpack_require__(696);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = (function () {
    function MapComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.mapSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.sight$ = this.mapSubject.asObservable();
        this.sight$.subscribe(function (map) {
            console.log(map);
        });
    }
    MapComponent.prototype.setMap = function (name, coordinates) {
        this.mapSubject.next(new __WEBPACK_IMPORTED_MODULE_3__models_sight__["a" /* Sight */](name, coordinates.toString()));
    };
    MapComponent.prototype.ngOnInit = function () {
        var $this = this;
        var sight;
        var map = new google.maps.Map(document.getElementById('googleMap'), {
            center: { lat: 51.6754966, lng: 39.20888230000003 },
            zoom: 11,
            mapTypeId: 'roadmap'
        });
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                sight = place;
                // Create a marker for each place.
                var marker = new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location
                });
                var infowindow = new google.maps.InfoWindow();
                window['addSight'] = function () {
                    $this.setMap(sight.name, sight.geometry.location);
                };
                var content = '<div><strong>' +
                    place.name +
                    '</strong><br>' +
                    place.formatted_address + '<br>' +
                    '<input type="button" value="Add sight" onclick=addSight()></div>';
                infowindow.setContent(content);
                infowindow.open(map, marker);
                markers.push(marker);
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(871),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === 'function' && _a) || Object])
    ], MapComponent);
    return MapComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/map.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(872),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
//# sourceMappingURL=D:/projectunc/src/messages.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = (function () {
    function Album(id, name, createDate, description, travel) {
        this.id = id;
        this.name = name;
        this.createDate = createDate;
        this.description = description;
        this.travel = travel;
    }
    return Album;
}());
//# sourceMappingURL=D:/projectunc/src/album.interface.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatMessage; });
var chatMessage = (function () {
    function chatMessage(id, travel, sender, sendTime, body) {
        this.id = id;
        this.travel = travel;
        this.sender = sender;
        this.sendTime = sendTime;
        this.body = body;
    }
    return chatMessage;
}());
//# sourceMappingURL=D:/projectunc/src/chatMessage.inerface.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photo; });
/**
 * Created by qwerty on 22.05.2017.
 */
var Photo = (function () {
    function Photo(id, album, owner, pathToPhoto, coordinate) {
        this.id = id;
        this.album = album;
        this.owner = owner;
        this.pathToPhoto = pathToPhoto;
        this.coordinate = coordinate;
    }
    return Photo;
}());
//# sourceMappingURL=D:/projectunc/src/photo.interface.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sight; });
/**
 * Created by Сергей on 21.05.2017.
 */
var Sight = (function () {
    function Sight(name, location) {
        this.name = name;
        this.location = location;
    }
    return Sight;
}());
//# sourceMappingURL=D:/projectunc/src/sight.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistered; });
var UserRegistered = (function () {
    function UserRegistered(id, firstName, lastName, email, password, gender, city) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.city = city;
    }
    return UserRegistered;
}());
//# sourceMappingURL=D:/projectunc/src/user-registered.interface.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, lastName, firstName, birthday, email, password, gender, city, info, photo) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.city = city;
        this.info = info;
        this.userPhoto = photo;
    }
    return User;
}());
//# sourceMappingURL=D:/projectunc/src/user.interface.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(873),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=D:/projectunc/src/not-found.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_registered_interface__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_gender_interface__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_city_interface__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage__);
/* unused harmony export Form */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Form = (function () {
    function Form() {
    }
    return Form;
}());
var RegisteredComponent = (function () {
    function RegisteredComponent(route, httpService, localStorageService) {
        this.route = route;
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.listCities = [];
        this.listStateOfTheCountry = [];
        this.listCityesOfTheState = [];
        this.form = new Form();
        this.remember = false;
        this.done = false;
        this.freeEmail = true;
    }
    RegisteredComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            country: '',
            state: '',
            city: ''
        };
        console.log(localStorage.getItem('id'));
        this.httpService.getCountries()
            .subscribe(function (resp) {
            var cityList = resp.json();
            for (var index in cityList) {
                var city = cityList[index];
                _this.listCities.push(city);
            }
            //console.log(this.listCities);
        });
    };
    RegisteredComponent.prototype.setCountryId = function (idCountry) {
        var _this = this;
        this.httpService.getStatesOfTheCountry(idCountry)
            .subscribe(function (resp) {
            var stateList = resp.json();
            for (var index in stateList) {
                var state = stateList[index];
                _this.listStateOfTheCountry.push(state);
            }
            //console.log(this.listCities);
        });
    };
    RegisteredComponent.prototype.setStateId = function (idState) {
        var _this = this;
        this.httpService.getCitiesOfTheState(idState)
            .subscribe(function (resp) {
            var citiesList = resp.json();
            for (var index in citiesList) {
                var city = citiesList[index];
                _this.listCityesOfTheState.push(city);
            }
            // console.log(this.listCities);
        });
    };
    RegisteredComponent.prototype.checkEmail = function (isValid) {
        var _this = this;
        if (isValid) {
            this.httpService.checkEmail(this.form.email)
                .subscribe(function (data) {
                _this.freeEmail = false;
            }, function (error) { return _this.freeEmail = true; });
        }
    };
    RegisteredComponent.prototype.addOrUpdateUser = function (model, isValid) {
        var _this = this;
        if (isValid) {
            this.userRegistered = new __WEBPACK_IMPORTED_MODULE_2__models_user_registered_interface__["a" /* UserRegistered */](null, model.firstName, model.lastName, model.email, model.password, new __WEBPACK_IMPORTED_MODULE_5__models_gender_interface__["a" /* Gender */](model.gender, ""), new __WEBPACK_IMPORTED_MODULE_6__models_city_interface__["a" /* City */](model.city, ""));
            this.httpService.addUser(this.userRegistered)
                .subscribe(function (data) {
                _this.receivedUser = data;
                _this.done = true;
                console.log(_this.receivedUser);
                _this.route.navigateByUrl("/account/" + _this.receivedUser.id + "/profile");
                if (_this.remember) {
                    _this.httpService.setId(_this.receivedUser.id);
                    localStorage.setItem('id', _this.receivedUser.id.toString());
                }
                else {
                    localStorage.setItem('id', null);
                }
            });
            console.log(this.userRegistered);
        }
    };
    RegisteredComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registered',
            template: __webpack_require__(874),
            styles: [__webpack_require__(839)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_angular_2_local_storage__["LocalStorageService"]) === 'function' && _c) || Object])
    ], RegisteredComponent);
    return RegisteredComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/projectunc/src/registered.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(route, sidebarEl, httpService, localStorageService) {
        var _this = this;
        this.route = route;
        this.sidebarEl = sidebarEl;
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.items = [];
        this.signOutSuccess = false;
        this.signOutMenu = false;
        httpService.id$.subscribe(function (id) {
            _this.id = id;
            _this.signOutMenu = false;
            console.log(_this.signOutMenu);
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        new gnMenu(this.sidebarEl.nativeElement.querySelector('.gn-menu-main'));
        this.id = parseInt(localStorage.getItem('id'));
        console.log(localStorage.getItem('id'));
        this.httpService.getAllUsers()
            .subscribe(function (resp) {
            var userList = resp.json();
            for (var index in userList) {
                var user = userList[index];
                _this.items.push(user);
            }
        });
        if (localStorage.getItem('id') == 'null') {
            this.signOutMenu = true;
        }
        else {
            this.signOutMenu = false;
        }
    };
    SidebarComponent.prototype.logout = function () {
        this.signOutSuccess = true;
        this.signOutMenu = true;
        this.id = null;
        localStorage.setItem('id', null);
        this.route.navigateByUrl("/");
        console.log(localStorage.getItem('id'));
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(875),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === 'function' && _d) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projectunc/src/sidebar.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    function SignInComponent(route, httpService, localStorageService) {
        this.route = route;
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.done = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.userSignIn = {
            email: '',
            password: ''
        };
        //localStorage.setItem('id','3');
        //localStorage.getItem('id');
    };
    SignInComponent.prototype.signInUser = function (model, isValid) {
        var _this = this;
        if (isValid) {
            this.httpService.signInUser(model)
                .catch(function (error) {
                _this.signInSuccess = true;
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            })
                .subscribe(function (data) {
                _this.receivedUser = data;
                _this.done = true;
                _this.route.navigateByUrl("/account/" + _this.receivedUser.id + "/profile");
                localStorage.setItem('id', _this.receivedUser.id.toString());
                _this.httpService.setId(_this.receivedUser.id);
                console.log(data);
            });
        }
    };
    SignInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(876),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === 'function' && _c) || Object])
    ], SignInComponent);
    return SignInComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/projectunc/src/sign-in.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movements_interface__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_transport_interface__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusDialogComponent = (function () {
    function BusDialogComponent(tripService) {
        this.tripService = tripService;
    }
    BusDialogComponent.prototype.ngOnInit = function () {
        this.bus = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates: null,
            destination_coordinates: null
        };
    };
    BusDialogComponent.prototype.addBus = function (model) {
        model.transport = new __WEBPACK_IMPORTED_MODULE_3__models_transport_interface__["a" /* Transport */](3, "bus");
        console.log(model);
        this.tripService.setMovementSubject(new __WEBPACK_IMPORTED_MODULE_1__models_movements_interface__["a" /* Movement */](model.id, model.transport, model.travel, new Date(model.startTime), new Date(model.endTime), model.startAddress, model.destinationAddress, model.price, model.distance, model.description, model.ticket, new __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__["a" /* Coordinates */]("point", 0, 0), new __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__["a" /* Coordinates */]("point", 0, 0)));
        this.bus = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates: null,
            destination_coordinates: null
        };
    };
    BusDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bus-dialog',
            template: __webpack_require__(877),
            styles: [__webpack_require__(842)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object])
    ], BusDialogComponent);
    return BusDialogComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/bus-dialog.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarDialogComponent = (function () {
    function CarDialogComponent() {
    }
    CarDialogComponent.prototype.ngOnInit = function () {
    };
    CarDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-car-dialog',
            template: __webpack_require__(878),
            styles: [__webpack_require__(843)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarDialogComponent);
    return CarDialogComponent;
}());
//# sourceMappingURL=D:/projectunc/src/car-dialog.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.dt = new Date();
        this.minDate = void 0;
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
            'shortDate'];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.opened = false;
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
        (this.dateDisabled = []);
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
    }
    DatepickerComponent.prototype.getDate = function () {
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    DatepickerComponent.prototype.today = function () {
        this.dt = new Date();
    };
    DatepickerComponent.prototype.disableTomorrow = function () {
        this.dateDisabled = [{ date: this.tomorrow, mode: 'day' }];
    };
    // todo: implement custom class cases
    DatepickerComponent.prototype.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var event = _a[_i];
                var currentDay = new Date(event.date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return event.status;
                }
            }
        }
        return '';
    };
    DatepickerComponent.prototype.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };
    DatepickerComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    DatepickerComponent.prototype.clear = function () {
        this.dt = void 0;
        this.dateDisabled = undefined;
    };
    DatepickerComponent.prototype.toggleMin = function () {
        this.dt = new Date(this.minDate.valueOf());
    };
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    DatepickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(879),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
//# sourceMappingURL=D:/projectunc/src/datepicker.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(880),
            styles: [__webpack_require__(845)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('dialog', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100)
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogComponent);
    return DialogComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/dialog.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movements_interface__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_transport_interface__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlightDialogComponent = (function () {
    function FlightDialogComponent(tripService) {
        this.tripService = tripService;
    }
    FlightDialogComponent.prototype.ngOnInit = function () {
        this.flight = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates: null,
            destination_coordinates: null
        };
    };
    FlightDialogComponent.prototype.addFlight = function (model) {
        model.transport = new __WEBPACK_IMPORTED_MODULE_3__models_transport_interface__["a" /* Transport */](1, "plane");
        console.log(model);
        this.tripService.setMovementSubject(new __WEBPACK_IMPORTED_MODULE_1__models_movements_interface__["a" /* Movement */](model.id, model.transport, model.travel, new Date(model.startTime), new Date(model.endTime), model.startAddress, model.destinationAddress, model.price, model.distance, model.description, model.ticket, new __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__["a" /* Coordinates */]("point", 0.0, 0.0), new __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__["a" /* Coordinates */]("point", 0, 0)));
        this.flight = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates: null,
            destination_coordinates: null
        };
    };
    FlightDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flight-dialog',
            template: __webpack_require__(881),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object])
    ], FlightDialogComponent);
    return FlightDialogComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/flight-dialog.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_activities_interface__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_coordinates_interface__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_activityType_interface__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LodgingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LodgingComponent = (function () {
    function LodgingComponent(tripService) {
        this.tripService = tripService;
    }
    LodgingComponent.prototype.ngOnInit = function () {
        this.lodging = {
            id: null,
            travel: null,
            name: '',
            address: '',
            description: '',
            price: null,
            ticket: '',
            coordinates: null,
            startTime: null,
            endTime: null,
            activityType: null
        };
    };
    LodgingComponent.prototype.addLodging = function (model, isValid) {
        if (isValid) {
            this.tripService.setActivitySubject(new __WEBPACK_IMPORTED_MODULE_1__models_activities_interface__["a" /* Activities */](model.id, model.travel, model.name, model.address, model.description, model.price, model.ticket, new __WEBPACK_IMPORTED_MODULE_3__models_coordinates_interface__["a" /* Coordinates */]("point", 0.0, 0.0), new Date(model.startTime), new Date(model.endTime), new __WEBPACK_IMPORTED_MODULE_4__models_activityType_interface__["a" /* ActivityType */](1, 'lodging')));
            this.lodging = {
                id: null,
                travel: null,
                name: '',
                address: '',
                description: '',
                price: null,
                ticket: '',
                coordinates: null,
                startTime: null,
                endTime: null,
                activityType: null
            };
        }
    };
    LodgingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lodging',
            template: __webpack_require__(882),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object])
    ], LodgingComponent);
    return LodgingComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/lodging.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParticipantsComponent = (function () {
    function ParticipantsComponent(tripService, route, httpService, localStorageService) {
        var _this = this;
        this.tripService = tripService;
        this.route = route;
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.participants = [];
        this.tripPlanId = this.route.parent.snapshot.params['id'];
        tripService.participant$.subscribe(function (participant) {
            _this.participants = participant;
            //console.log(this.participants);
        });
    }
    ParticipantsComponent.prototype.ngOnInit = function () {
    };
    ParticipantsComponent.prototype.sendEmail = function (ivitation) {
        if (ivitation) {
            this.ivitation = ivitation;
            console.log(this.ivitation);
        }
        this.httpService.sendEmail(this.ivitation, this.tripPlanId, parseInt(localStorage.getItem('id')));
    };
    ParticipantsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-participants',
            template: __webpack_require__(883),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === 'function' && _d) || Object])
    ], ParticipantsComponent);
    return ParticipantsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projectunc/src/participants.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movements_interface__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_transport_interface__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RailDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RailDialogComponent = (function () {
    function RailDialogComponent(tripService) {
        this.tripService = tripService;
    }
    RailDialogComponent.prototype.ngOnInit = function () {
        this.rail = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates: null,
            destination_coordinates: null
        };
    };
    RailDialogComponent.prototype.addRail = function (model) {
        model.transport = new __WEBPACK_IMPORTED_MODULE_2__models_transport_interface__["a" /* Transport */](2, "rail");
        this.tripService.setMovementSubject(new __WEBPACK_IMPORTED_MODULE_1__models_movements_interface__["a" /* Movement */](model.id, model.transport, model.travel, new Date(model.startTime), new Date(model.endTime), model.startAddress, model.destinationAddress, model.price, model.distance, model.description, model.ticket, new __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__["a" /* Coordinates */]("point", 0, 0), new __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__["a" /* Coordinates */]("point", 0, 0)));
        this.rail = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates: null,
            destination_coordinates: null
        };
    };
    RailDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rail-dialog',
            template: __webpack_require__(884),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object])
    ], RailDialogComponent);
    return RailDialogComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/rail-dialog.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_activities_interface__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_activityType_interface__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SightsComponent = (function () {
    //sights: Sight[] = [];
    function SightsComponent(tripService) {
        this.tripService = tripService;
        // this.sights.push(new Sight("name", "location"));
        // this.sight$.subscribe(
        //     sight => {
        //         this.sights.push(sight);
        //         console.log(this.sights);
        //     });
    }
    SightsComponent.prototype.ngOnInit = function () {
        var $this = this;
        var sight;
        setTimeout(function () {
            var map = new google.maps.Map(document.getElementById('googleMap'), {
                center: { lat: 51.6754966, lng: 39.20888230000003 },
                zoom: 11,
                mapTypeId: 'roadmap'
            });
            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });
            var markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function () {
                var places = searchBox.getPlaces();
                if (places.length == 0) {
                    return;
                }
                // Clear out the old markers.
                markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                markers = [];
                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }
                    sight = place;
                    // Create a marker for each place.
                    var marker = new google.maps.Marker({
                        map: map,
                        title: place.name,
                        position: place.geometry.location
                    });
                    var infowindow = new google.maps.InfoWindow();
                    window['addSight'] = function () {
                        var date = new Date(document.getElementById("date").value);
                        var coord = sight.geometry.location.toString();
                        var b = coord.substring(2, coord.length - 1).split(',');
                        $this.tripService.setActivitySubject(new __WEBPACK_IMPORTED_MODULE_2__models_activities_interface__["a" /* Activities */](null, null, sight.name, sight.formatted_address, null, null, null, new __WEBPACK_IMPORTED_MODULE_4__models_coordinates_interface__["a" /* Coordinates */]("point", b[0], b[1]), date, new Date(), new __WEBPACK_IMPORTED_MODULE_3__models_activityType_interface__["a" /* ActivityType */](2, 'sight')));
                    };
                    var content = '<div style="height:100px">' +
                        '<strong>' + place.name + '</strong><br />' +
                        place.formatted_address + '<br >' +
                        '<div style="margin-top: 10px"><strong>Start time: </strong>' + '<input style="height: 20px" id="date" type="datetime-local"></div> ' + '<br >' +
                        '<input type="button" value="Add sight" onclick=addSight()>' +
                        '</div>';
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                    markers.push(marker);
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    }
                    else {
                        bounds.extend(place.geometry.location);
                    }
                });
                map.fitBounds(bounds);
            });
        });
    };
    SightsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sights',
            template: __webpack_require__(885),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object])
    ], SightsComponent);
    return SightsComponent;
    var _a;
}());
//# sourceMappingURL=D:/projectunc/src/sights.component.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransportationComponent = (function () {
    function TransportationComponent(route, httpService) {
        this.route = route;
        this.httpService = httpService;
        this.tripPlanId = this.route.parent.snapshot.params["id"];
        this.id = this.route.parent.snapshot.params["id"];
    }
    TransportationComponent.prototype.ngOnInit = function () {
    };
    TransportationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transportation',
            template: __webpack_require__(886),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object])
    ], TransportationComponent);
    return TransportationComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projectunc/src/transportation.component.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_day_interface__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_movements_interface__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_activities_interface__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_activityType_interface__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_transport_interface__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_coordinates_interface__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_photo_interface__ = __webpack_require__(695);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlanningComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var URL = 'http://localhost:8181/fileUploadPage';
var TripPlanningComponent = (function () {
    function TripPlanningComponent(_location, httpService, route, tripService, http, el) {
        var _this = this;
        this._location = _location;
        this.httpService = httpService;
        this.route = route;
        this.tripService = tripService;
        this.http = http;
        this.el = el;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__["FileUploader"]({
            url: URL,
        });
        this.flagOne = true;
        this.flag = false;
        this.visible = true;
        this.visible2 = false;
        this.activity = [];
        this.movement = [];
        this.routeSubscription = route.params.subscribe(function (params) { return _this.tripId = params['id']; });
        tripService.role$.subscribe(function (role) {
            if (role != 0) {
                _this.flag = true;
            }
        });
        tripService.path$.subscribe(function (path) {
            _this.pathToPhoto = path;
        });
        this.subOne = tripService.nameDay$.subscribe(function (nameDay) {
            _this.days = nameDay;
            _this.flagOne = false;
        });
        this.subTwo = tripService.activity$.subscribe(function (activity) {
            _this.tripService.setActivities(activity);
            if (new Date(activity.startTime).getDate() + new Date(activity.startTime).getMonth() ==
                _this.selectedDay.name.getDate() + _this.selectedDay.name.getMonth()) {
                _this.selectedDay.action.push(activity);
                _this.selectedDay.action.sort(function (a, b) {
                    return (a.startTime.valueOf() + 24 * 60 * 60 * 1000) - (b.startTime.valueOf() + 24 * 60 * 60 * 1000);
                });
            }
        });
        this.subThree = tripService.movement$.subscribe(function (movement) {
            _this.tripService.setMovement(movement);
            if (new Date(movement.startTime).getDate() + new Date(movement.startTime).getMonth() ==
                _this.selectedDay.name.getDate() + _this.selectedDay.name.getMonth()) {
                _this.selectedDay.action.push(movement);
            }
            _this.selectedDay.action.sort(function (a, b) {
                return (a.startTime.valueOf() + 24 * 60 * 60 * 1000) - (b.startTime.valueOf() + 24 * 60 * 60 * 1000);
            });
        });
    }
    TripPlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trip = {
            id: null,
            photo: '',
            name: '',
            startDate: null,
            endDate: null,
            info: '',
            active: false,
            days: [null],
            activities: [null],
            movements: [null],
            participants: [null],
            countries: [null],
            album: null,
        };
        this.httpService.getUser(parseInt(localStorage.getItem('id')))
            .subscribe(function (resp) {
            var user = resp.json();
            if (user)
                _this.userProfile = user;
        });
        this.pathToPhoto = this.trip.photo;
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
        this.days = [new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](1, new Date(), [])];
        if (this.tripId != 0) {
            this.tripService.addReadyTrip(this.tripId);
            this.tripService.addRole(this.tripId);
            this.pathToPhoto = this.trip.photo;
            this.tripService.trip$.subscribe(function (trip) {
                _this.trip = trip;
            });
        }
    };
    TripPlanningComponent.prototype.addOrUpdateTrip = function (model, isValid) {
        if (isValid) {
            this.days = [];
            if (this.tripId == 0) {
                this.trip.active = true;
                if (model.endDate != null) {
                    var i = 1;
                    this.days.push(new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](i, new Date(this.trip.startDate), []));
                    while (this.days[this.days.length - 1].name < new Date(model.endDate)) {
                        i++;
                        this.days.push(new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](i, new Date(this.days[this.days.length - 1].name.valueOf() + 24 * 60 * 60 * 1000), []));
                    }
                    this.trip.days = this.days;
                    this.trip.activities = [];
                    this.trip.movements = [];
                    this.tripService.addTrip(this.trip);
                    this.tripService.setNameDay(this.days);
                    this.tripService.addOrUpdateTrip(this.trip);
                    console.log(this.trip);
                }
                else {
                    this.trip.days[0] = new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](1, new Date(this.trip.startDate), []);
                    this.days.push(new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](1, new Date(this.trip.startDate), []));
                    this.trip.days = this.days;
                    this.trip.activities = [];
                    this.trip.movements = [];
                    this.tripService.addTrip(this.trip);
                    this.tripService.setNameDay(this.days);
                    this.tripService.addOrUpdateTrip(this.trip);
                }
            }
            else {
                this.tripService.addOrUpdateTrip(this.trip);
                var i = 1;
                this.days.push(new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](i, new Date(this.trip.startDate), []));
                while (this.days[this.days.length - 1].name < new Date(this.trip.endDate)) {
                    i++;
                    this.days.push(new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](i, new Date(this.days[this.days.length - 1].name.valueOf() + 24 * 60 * 60 * 1000), []));
                }
                this.trip.days = this.days;
                this.tripService.setNameDay(this.days);
            }
        }
    };
    TripPlanningComponent.prototype.setVisible = function () {
        this.visible = true;
        this.visible2 = false;
    };
    TripPlanningComponent.prototype.setVisible2 = function () {
        this.visible = false;
        this.visible2 = true;
    };
    TripPlanningComponent.prototype.backClick = function () {
        this._location.go("/trip-planning/" + this.tripId);
    };
    TripPlanningComponent.prototype.onSelect = function (day) {
        this.selectedDay = day;
        this.selectedDay.action = [];
        this.activity = this.tripService.getActivities();
        this.movement = this.tripService.getMovements();
        for (var i = 0; i < this.activity.length; i++) {
            if (new Date(this.activity[i].startTime).getDate() + new Date(this.activity[i].startTime).getMonth() ==
                this.selectedDay.name.getDate() + this.selectedDay.name.getMonth()) {
                this.selectedDay.action.push(this.activity[i]);
            }
        }
        for (var i = 0; i < this.movement.length; i++) {
            if (new Date(this.movement[i].startTime).getDate() + new Date(this.movement[i].startTime).getMonth() ==
                this.selectedDay.name.getDate() + this.selectedDay.name.getMonth()) {
                this.selectedDay.action.push(this.movement[i]);
            }
        }
        this.selectedDay.action.sort(function (a, b) {
            return (a.startTime.valueOf() + 24 * 60 * 60 * 1000) - (b.startTime.valueOf() + 24 * 60 * 60 * 1000);
        });
    };
    TripPlanningComponent.prototype.isMovement = function (variable) {
        //console.log(variable, variable instanceof Movement);
        return variable instanceof __WEBPACK_IMPORTED_MODULE_9__models_movements_interface__["a" /* Movement */];
    };
    TripPlanningComponent.prototype.isActivity = function (variable) {
        //console.log(variable, variable instanceof Activities);
        return variable instanceof __WEBPACK_IMPORTED_MODULE_10__models_activities_interface__["a" /* Activities */];
    };
    TripPlanningComponent.prototype.updateActivity = function (form, id, activityTypeId) {
        this.tripService.setActivities(new __WEBPACK_IMPORTED_MODULE_10__models_activities_interface__["a" /* Activities */](id, form.value.travel, form.value.name, form.value.address, form.value.description, form.value.price, form.value.ticket, new __WEBPACK_IMPORTED_MODULE_13__models_coordinates_interface__["a" /* Coordinates */]('point', 0.0, 0.0), new Date(form.value.startTime), new Date(form.value.endTime), new __WEBPACK_IMPORTED_MODULE_11__models_activityType_interface__["a" /* ActivityType */](activityTypeId, '')));
    };
    TripPlanningComponent.prototype.updateMovement = function (form, id, transportId) {
        console.log(transportId);
        this.tripService.setMovement(new __WEBPACK_IMPORTED_MODULE_9__models_movements_interface__["a" /* Movement */](id, new __WEBPACK_IMPORTED_MODULE_12__models_transport_interface__["a" /* Transport */](transportId, ''), form.value.travel, new Date(form.value.startTime), new Date(form.value.endTime), form.value.startAddress, form.value.destinationAddress, form.value.price, form.value.distance, form.value.description, form.value.ticket, new __WEBPACK_IMPORTED_MODULE_13__models_coordinates_interface__["a" /* Coordinates */]('point', 0.0, 0.0), new __WEBPACK_IMPORTED_MODULE_13__models_coordinates_interface__["a" /* Coordinates */]('point', 0.0, 0.0)));
    };
    TripPlanningComponent.prototype.upload = function () {
        var _this = this;
        console.log("dsadsadsadsadsadsadsadsadsadsadsa");
        // var csrf_token = jQuery("meta[name='_csrf']").attr("content");
        // var csrf_token_name = jQuery("meta[name='_csrf_header']").attr("content");
        // //noinspection TypeScriptValidateTypes
        //  let headers = new Headers({
        //      'Content-Type': 'application/json;charset=utf-8'
        //  });
        //  if (csrf_token_name && csrf_token)
        //      headers.set(csrf_token_name, csrf_token);
        //locate the file element meant for the file upload.
        var inputEl = this.el.nativeElement.querySelector('#photo');
        //get the total amount of files attached to the file input.
        var fileCount = inputEl.files.length;
        //create a new fromdata instance
        var formData = new FormData();
        //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) {
            //append the key name 'photo' with the first file in the element
            formData.append('file', inputEl.files.item(0));
            //call the angular http method
            this.http
                .post(URL, formData)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.pathToPhoto = data;
                _this.trip = _this.tripService.getTrip();
                _this.trip.photo = _this.pathToPhoto;
                _this.photo = new __WEBPACK_IMPORTED_MODULE_15__models_photo_interface__["a" /* Photo */](null, _this.trip.album, _this.userProfile, _this.pathToPhoto, new __WEBPACK_IMPORTED_MODULE_13__models_coordinates_interface__["a" /* Coordinates */]('point', 2.3, 3.2));
                _this.httpService.addPhoto(_this.photo).subscribe(function (data) {
                    _this.photo = data;
                });
                console.log(_this.trip);
                _this.httpService.addOrUpdateTrip(_this.trip, _this.userProfile.id).subscribe(function (data) {
                    _this.trip = data;
                });
            });
        }
    };
    TripPlanningComponent.prototype.addDay = function () {
        this.days.push(new __WEBPACK_IMPORTED_MODULE_4__models_day_interface__["a" /* Day */](this.days[this.days.length - 1].id + 1, new Date(this.days[this.days.length - 1].name.valueOf() + 24 * 60 * 60 * 1000), []));
        this.trip = this.tripService.getTrip();
        this.trip.endDate = this.days[this.days.length - 1].name;
        this.tripService.addOrUpdateTrip(this.trip);
    };
    TripPlanningComponent.prototype.delete = function () {
        this.days.pop();
        this.trip = this.tripService.getTrip();
        this.trip.endDate = this.days[this.days.length - 1].name;
        this.tripService.addOrUpdateTrip(this.trip);
    };
    TripPlanningComponent.prototype.deleteMovements = function (id) {
        this.httpService.deleteMovement(id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    TripPlanningComponent.prototype.deleteActivity = function (id) {
        this.httpService.deleteActivity(id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    TripPlanningComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
        this.subOne.unsubscribe();
        this.subTwo.unsubscribe();
        this.subThree.unsubscribe();
    };
    TripPlanningComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-planning',
            template: __webpack_require__(887),
            styles: [__webpack_require__(850)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_14__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_14__angular_common__["Location"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Http */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _f) || Object])
    ], TripPlanningComponent);
    return TripPlanningComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/projectunc/src/trip-planning.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_day_interface__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_activities_interface__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_movements_interface__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TripInfoComponent = (function () {
    function TripInfoComponent(route, tripService) {
        var _this = this;
        this.route = route;
        this.tripService = tripService;
        this.routeSubscription = route.params.subscribe(function (params) { return _this.tripId = params['id']; });
        tripService.path$.subscribe(function (path) {
            _this.pathToPhoto = path;
        });
        this.subOne = tripService.nameDay$.subscribe(function (nameDay) {
            _this.days = nameDay;
            _this.flagOne = false;
        });
        this.subTwo = tripService.activity$.subscribe(function (activity) {
            _this.tripService.setActivities(activity);
            if (new Date(activity.startTime).getDate() + new Date(activity.startTime).getMonth() ==
                _this.selectedDay.name.getDate() + _this.selectedDay.name.getMonth()) {
                _this.selectedDay.action.push(activity);
                _this.selectedDay.action.sort(function (a, b) {
                    return (a.startTime.valueOf() + 24 * 60 * 60 * 1000) - (b.startTime.valueOf() + 24 * 60 * 60 * 1000);
                });
            }
        });
        this.subThree = tripService.movement$.subscribe(function (movement) {
            _this.tripService.setMovement(movement);
            if (new Date(movement.startTime).getDate() + new Date(movement.startTime).getMonth() ==
                _this.selectedDay.name.getDate() + _this.selectedDay.name.getMonth()) {
                _this.selectedDay.action.push(movement);
            }
            _this.selectedDay.action.sort(function (a, b) {
                return (a.startTime.valueOf() + 24 * 60 * 60 * 1000) - (b.startTime.valueOf() + 24 * 60 * 60 * 1000);
            });
        });
    }
    TripInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trip = {
            id: null,
            photo: '',
            name: '',
            startDate: null,
            endDate: null,
            info: '',
            active: false,
            days: [null],
            activities: [null],
            movements: [null],
            participants: [null],
            countries: [null],
            album: null,
        };
        this.days = [new __WEBPACK_IMPORTED_MODULE_3__models_day_interface__["a" /* Day */](1, new Date(), [])];
        this.tripService.addReadyTrip(this.tripId);
        this.tripService.addRole(this.tripId);
        this.pathToPhoto = this.trip.photo;
        this.tripService.trip$.subscribe(function (trip) {
            _this.trip = trip;
        });
    };
    TripInfoComponent.prototype.addOrUpdateTrip = function (model, isValid) {
        if (isValid) {
            this.days = [];
            if (this.tripId == 0) {
                this.trip.active = true;
                if (model.endDate != null) {
                    var i = 1;
                    this.days.push(new __WEBPACK_IMPORTED_MODULE_3__models_day_interface__["a" /* Day */](i, new Date(this.trip.startDate), []));
                    while (this.days[this.days.length - 1].name < new Date(model.endDate)) {
                        i++;
                        this.days.push(new __WEBPACK_IMPORTED_MODULE_3__models_day_interface__["a" /* Day */](i, new Date(this.days[this.days.length - 1].name.valueOf() + 24 * 60 * 60 * 1000), []));
                    }
                    this.trip.days = this.days;
                    this.trip.activities = [];
                    this.trip.movements = [];
                    this.tripService.addTrip(this.trip);
                    this.tripService.setNameDay(this.days);
                    this.tripService.addOrUpdateTrip(this.trip);
                    console.log(this.trip);
                }
                else {
                    this.trip.days[0] = new __WEBPACK_IMPORTED_MODULE_3__models_day_interface__["a" /* Day */](1, new Date(this.trip.startDate), []);
                    this.days.push(new __WEBPACK_IMPORTED_MODULE_3__models_day_interface__["a" /* Day */](1, new Date(this.trip.startDate), []));
                    this.trip.days = this.days;
                    this.trip.activities = [];
                    this.trip.movements = [];
                    this.tripService.addTrip(this.trip);
                    this.tripService.setNameDay(this.days);
                    this.tripService.addOrUpdateTrip(this.trip);
                }
            }
            else {
                this.tripService.addOrUpdateTrip(this.trip);
                var i = 1;
                this.days.push(new __WEBPACK_IMPORTED_MODULE_3__models_day_interface__["a" /* Day */](i, new Date(this.trip.startDate), []));
                while (this.days[this.days.length - 1].name < new Date(this.trip.endDate)) {
                    i++;
                    this.days.push(new __WEBPACK_IMPORTED_MODULE_3__models_day_interface__["a" /* Day */](i, new Date(this.days[this.days.length - 1].name.valueOf() + 24 * 60 * 60 * 1000), []));
                }
                this.trip.days = this.days;
                this.tripService.setNameDay(this.days);
            }
        }
    };
    TripInfoComponent.prototype.setVisible = function () {
        this.visible = true;
        this.visible2 = false;
    };
    TripInfoComponent.prototype.setVisible2 = function () {
        this.visible = false;
        this.visible2 = true;
    };
    TripInfoComponent.prototype.onSelect = function (day) {
        this.selectedDay = day;
        this.selectedDay.action = [];
        this.activity = this.tripService.getActivities();
        this.movement = this.tripService.getMovements();
        for (var i = 0; i < this.activity.length; i++) {
            if (new Date(this.activity[i].startTime).getDate() + new Date(this.activity[i].startTime).getMonth() ==
                this.selectedDay.name.getDate() + this.selectedDay.name.getMonth()) {
                this.selectedDay.action.push(this.activity[i]);
            }
        }
        for (var i = 0; i < this.movement.length; i++) {
            if (new Date(this.movement[i].startTime).getDate() + new Date(this.movement[i].startTime).getMonth() ==
                this.selectedDay.name.getDate() + this.selectedDay.name.getMonth()) {
                this.selectedDay.action.push(this.movement[i]);
            }
        }
        this.selectedDay.action.sort(function (a, b) {
            return (a.startTime.valueOf() + 24 * 60 * 60 * 1000) - (b.startTime.valueOf() + 24 * 60 * 60 * 1000);
        });
    };
    TripInfoComponent.prototype.isMovement = function (variable) {
        //console.log(variable, variable instanceof Movement);
        return variable instanceof __WEBPACK_IMPORTED_MODULE_5__models_movements_interface__["a" /* Movement */];
    };
    TripInfoComponent.prototype.isActivity = function (variable) {
        //console.log(variable, variable instanceof Activities);
        return variable instanceof __WEBPACK_IMPORTED_MODULE_4__models_activities_interface__["a" /* Activities */];
    };
    TripInfoComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
        this.subOne.unsubscribe();
        this.subTwo.unsubscribe();
        this.subThree.unsubscribe();
    };
    TripInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-info',
            template: __webpack_require__(888),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _b) || Object])
    ], TripInfoComponent);
    return TripInfoComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projectunc/src/trip-info.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(route, httpService) {
        var _this = this;
        this.route = route;
        this.httpService = httpService;
        this.trips = [];
        this.albums = [];
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    UserComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getUser(this.id)
            .subscribe(function (resp) {
            var user = resp.json();
            if (user)
                _this.userAccount = user;
        });
        this.httpService.getTravelsToUser(this.id)
            .subscribe(function (resp) {
            var tripList = resp.json();
            for (var index in tripList) {
                console.log(tripList[index]);
                var trip = tripList[index];
                _this.trips.push(trip);
            }
        });
        this.httpService.getAlbums()
            .subscribe(function (resp) {
            var albumList = resp.json().albums;
            for (var index in albumList) {
                console.log(albumList[index]);
                var album = albumList[index];
                _this.albums.push(album);
            }
        });
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(889),
            styles: [__webpack_require__(832)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === 'function' && _b) || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projectunc/src/user.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/projectunc/src/environment.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coordinates; });
/**
 * Created by Сергей on 17.05.2017.
 */
var Coordinates = (function () {
    function Coordinates(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }
    return Coordinates;
}());
//# sourceMappingURL=D:/projectunc/src/coordinates.interface.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movement; });
/**
 * Created by Сергей on 11.05.2017.
 */
var Movement = (function () {
    function Movement(id, transport, travel, startTime, endTime, startAddress, destinationAddress, price, distance, description, ticket, start_coordinates, destination_coordinates) {
        this.id = id;
        this.transport = transport;
        this.travel = travel;
        this.startTime = startTime;
        this.endTime = endTime;
        this.startAddress = startAddress;
        this.destinationAddress = destinationAddress;
        this.price = price;
        this.distance = distance;
        this.description = description;
        this.ticket = ticket;
        this.start_coordinates = start_coordinates;
        this.destination_coordinates = destination_coordinates;
    }
    return Movement;
}());
//# sourceMappingURL=D:/projectunc/src/movements.interface.js.map

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 371,
	"./af.js": 371,
	"./ar": 378,
	"./ar-dz": 372,
	"./ar-dz.js": 372,
	"./ar-kw": 373,
	"./ar-kw.js": 373,
	"./ar-ly": 374,
	"./ar-ly.js": 374,
	"./ar-ma": 375,
	"./ar-ma.js": 375,
	"./ar-sa": 376,
	"./ar-sa.js": 376,
	"./ar-tn": 377,
	"./ar-tn.js": 377,
	"./ar.js": 378,
	"./az": 379,
	"./az.js": 379,
	"./be": 380,
	"./be.js": 380,
	"./bg": 381,
	"./bg.js": 381,
	"./bn": 382,
	"./bn.js": 382,
	"./bo": 383,
	"./bo.js": 383,
	"./br": 384,
	"./br.js": 384,
	"./bs": 385,
	"./bs.js": 385,
	"./ca": 386,
	"./ca.js": 386,
	"./cs": 387,
	"./cs.js": 387,
	"./cv": 388,
	"./cv.js": 388,
	"./cy": 389,
	"./cy.js": 389,
	"./da": 390,
	"./da.js": 390,
	"./de": 393,
	"./de-at": 391,
	"./de-at.js": 391,
	"./de-ch": 392,
	"./de-ch.js": 392,
	"./de.js": 393,
	"./dv": 394,
	"./dv.js": 394,
	"./el": 395,
	"./el.js": 395,
	"./en-au": 396,
	"./en-au.js": 396,
	"./en-ca": 397,
	"./en-ca.js": 397,
	"./en-gb": 398,
	"./en-gb.js": 398,
	"./en-ie": 399,
	"./en-ie.js": 399,
	"./en-nz": 400,
	"./en-nz.js": 400,
	"./eo": 401,
	"./eo.js": 401,
	"./es": 403,
	"./es-do": 402,
	"./es-do.js": 402,
	"./es.js": 403,
	"./et": 404,
	"./et.js": 404,
	"./eu": 405,
	"./eu.js": 405,
	"./fa": 406,
	"./fa.js": 406,
	"./fi": 407,
	"./fi.js": 407,
	"./fo": 408,
	"./fo.js": 408,
	"./fr": 411,
	"./fr-ca": 409,
	"./fr-ca.js": 409,
	"./fr-ch": 410,
	"./fr-ch.js": 410,
	"./fr.js": 411,
	"./fy": 412,
	"./fy.js": 412,
	"./gd": 413,
	"./gd.js": 413,
	"./gl": 414,
	"./gl.js": 414,
	"./gom-latn": 415,
	"./gom-latn.js": 415,
	"./he": 416,
	"./he.js": 416,
	"./hi": 417,
	"./hi.js": 417,
	"./hr": 418,
	"./hr.js": 418,
	"./hu": 419,
	"./hu.js": 419,
	"./hy-am": 420,
	"./hy-am.js": 420,
	"./id": 421,
	"./id.js": 421,
	"./is": 422,
	"./is.js": 422,
	"./it": 423,
	"./it.js": 423,
	"./ja": 424,
	"./ja.js": 424,
	"./jv": 425,
	"./jv.js": 425,
	"./ka": 426,
	"./ka.js": 426,
	"./kk": 427,
	"./kk.js": 427,
	"./km": 428,
	"./km.js": 428,
	"./kn": 429,
	"./kn.js": 429,
	"./ko": 430,
	"./ko.js": 430,
	"./ky": 431,
	"./ky.js": 431,
	"./lb": 432,
	"./lb.js": 432,
	"./lo": 433,
	"./lo.js": 433,
	"./lt": 434,
	"./lt.js": 434,
	"./lv": 435,
	"./lv.js": 435,
	"./me": 436,
	"./me.js": 436,
	"./mi": 437,
	"./mi.js": 437,
	"./mk": 438,
	"./mk.js": 438,
	"./ml": 439,
	"./ml.js": 439,
	"./mr": 440,
	"./mr.js": 440,
	"./ms": 442,
	"./ms-my": 441,
	"./ms-my.js": 441,
	"./ms.js": 442,
	"./my": 443,
	"./my.js": 443,
	"./nb": 444,
	"./nb.js": 444,
	"./ne": 445,
	"./ne.js": 445,
	"./nl": 447,
	"./nl-be": 446,
	"./nl-be.js": 446,
	"./nl.js": 447,
	"./nn": 448,
	"./nn.js": 448,
	"./pa-in": 449,
	"./pa-in.js": 449,
	"./pl": 450,
	"./pl.js": 450,
	"./pt": 452,
	"./pt-br": 451,
	"./pt-br.js": 451,
	"./pt.js": 452,
	"./ro": 453,
	"./ro.js": 453,
	"./ru": 454,
	"./ru.js": 454,
	"./sd": 455,
	"./sd.js": 455,
	"./se": 456,
	"./se.js": 456,
	"./si": 457,
	"./si.js": 457,
	"./sk": 458,
	"./sk.js": 458,
	"./sl": 459,
	"./sl.js": 459,
	"./sq": 460,
	"./sq.js": 460,
	"./sr": 462,
	"./sr-cyrl": 461,
	"./sr-cyrl.js": 461,
	"./sr.js": 462,
	"./ss": 463,
	"./ss.js": 463,
	"./sv": 464,
	"./sv.js": 464,
	"./sw": 465,
	"./sw.js": 465,
	"./ta": 466,
	"./ta.js": 466,
	"./te": 467,
	"./te.js": 467,
	"./tet": 468,
	"./tet.js": 468,
	"./th": 469,
	"./th.js": 469,
	"./tl-ph": 470,
	"./tl-ph.js": 470,
	"./tlh": 471,
	"./tlh.js": 471,
	"./tr": 472,
	"./tr.js": 472,
	"./tzl": 473,
	"./tzl.js": 473,
	"./tzm": 475,
	"./tzm-latn": 474,
	"./tzm-latn.js": 474,
	"./tzm.js": 475,
	"./uk": 476,
	"./uk.js": 476,
	"./ur": 477,
	"./ur.js": 477,
	"./uz": 479,
	"./uz-latn": 478,
	"./uz-latn.js": 478,
	"./uz.js": 479,
	"./vi": 480,
	"./vi.js": 480,
	"./x-pseudo": 481,
	"./x-pseudo.js": 481,
	"./yo": 482,
	"./yo.js": 482,
	"./zh-cn": 483,
	"./zh-cn.js": 483,
	"./zh-hk": 484,
	"./zh-hk.js": 484,
	"./zh-tw": 485,
	"./zh-tw.js": 485
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 802;


/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white;\n  margin-top: 80px;\n  padding-bottom: 15px;\n  width: 90%;\n  margin-bottom: 20px;\n  z-index: 10;\n  border-radius: 0.5rem;\n  height: 100%; }\n\n.panel.trip-panel {\n  padding: 7px;\n  background-color: #edeef0; }\n\n.trip-pic img {\n  border-radius: 2px; }\n\n.flex {\n  padding: 40px 50px 40px 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.flex-itm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 33.3%;\n  padding-left: 10px; }\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white;\n  margin-top: 80px;\n  width: 90%;\n  margin-bottom: 20px;\n  z-index: 10;\n  border-radius: 0.5rem;\n  height: 100%;\n  padding: 20px 40px 40px 40px; }\n\n.panel.trip-panel {\n  padding: 7px;\n  margin: 2px 2px 10px 2px;\n  background-color: #edeef0; }\n\n.trip-pic img {\n  border-radius: 2px; }\n\n.img-trips {\n  width: 100px;\n  height: 100px; }\n\n.title {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 20px; }\n\n.btn-trips {\n  padding-left: 0px;\n  padding-right: 0px;\n  width: 40px;\n  visibility: hidden; }\n\n.trip-panel:hover .btn-trips {\n  visibility: visible; }\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ".panel.trip-panel {\n  padding: 7px;\n  margin: 2px; }\n\n.trip-pic img {\n  border-radius: 2px; }\n\n.flex {\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.flex-itm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 33.3%;\n  margin-bottom: 10px;\n  padding-left: 10px; }\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = ".list-of-msg {\n  max-height: 200px;\n  height: 200px;\n  overflow-y: scroll; }\n\n.list-of-msg::-webkit-scrollbar {\n  width: 2px; }\n\n.list-of-msg::-webkit-scrollbar-thumb {\n  border: none;\n  background-color: transparent;\n  max-height: 5px; }\n\n.list-of-msg:hover::-webkit-scrollbar-thumb {\n  border: none;\n  background-color: blue;\n  max-height: 20px; }\n\n.list-of-msg::-webkit-scrollbar-track {\n  border: none;\n  background-color: transparent; }\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = ".window {\n  position: fixed;\n  width: 250px;\n  height: 485px; }\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = ".nav.nav-tabs.nav-justified li {\n  float: none; }\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white;\n  margin-top: 80px;\n  width: 90%;\n  margin-bottom: 20px;\n  z-index: 10;\n  border-radius: 0.5rem;\n  padding: 40px; }\n\n.sidebar-planning {\n  max-height: 280px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  width: 200px; }\n\n.sidebar-planning::-webkit-scrollbar {\n  width: 2px; }\n\n.sidebar-planning::-webkit-scrollbar-thumb {\n  border: none;\n  background-color: transparent;\n  max-height: 5px; }\n\n.sidebar-planning:hover::-webkit-scrollbar-thumb {\n  border: none;\n  background-color: blue;\n  max-height: 20px; }\n\n.sidebar-planning::-webkit-scrollbar-track {\n  border: none;\n  background-color: transparent; }\n\n.sidebar-img {\n  width: 200px;\n  display: inline-block;\n  text-align: center; }\n\n.image {\n  width: 100%;\n  height: 100%; }\n\n.trip-avatar {\n  border-radius: 100%;\n  width: 140px;\n  height: 140px;\n  background-color: grey;\n  position: relative;\n  overflow: hidden; }\n\n.trip-avatar span {\n  display: none; }\n\n.trip-avatar:hover span {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  line-height: 140px;\n  display: block; }\n\n.nav-stacked li {\n  float: none;\n  text-align: center; }\n\n.button-menu {\n  width: 198px;\n  margin-top: 2px; }\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: black; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  width: 667px; }\n\n.trip-label {\n  float: left; }\n\n.trip-input {\n  margin-left: 100px; }\n\nsmall {\n  margin-left: 20px;\n  color: red; }\n\ninput.ng-touched.ng-invalid {\n  border: solid red 1.5px; }\n\n.modal-sm {\n  width: 170px;\n  margin: 100px 400px auto auto;\n  float: right; }\n\n.btn-group-vertical > .btn {\n  position: relative;\n  background: transparent;\n  width: 170px; }\n\n.trippanel i.fa-close {\n  font-size: 1em;\n  margin: 0 0 0 70px; }\n\n.activities {\n  margin-top: 20px; }\n\n.btn-action {\n  padding-left: 0px;\n  padding-right: 0px;\n  width: 40px;\n  visibility: hidden; }\n\n.panel:hover .btn-action {\n  visibility: visible; }\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = ".panel.trip-panel {\n  padding: 7px;\n  margin: 2px;\n  background-color: #edeef0; }\n\n.trip-pic img {\n  border-radius: 2px; }\n\n.flex {\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.flex-itm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 33.3%;\n  margin-bottom: 10px;\n  padding-left: 10px; }\n\n.profile-label {\n  float: left; }\n\n.profile-input {\n  width: 70%;\n  padding-left: 20px;\n  margin-left: 120px; }\n\n.profile-input-button {\n  display: none; }\n\n.profile-input:hover .profile-input-button {\n  display: block; }\n\n.icon-edit {\n  margin-left: 0;\n  margin-right: 0; }\n\n.profile-button-edit {\n  height: 34px; }\n\n.container {\n  background-color: white;\n  margin-top: 80px;\n  width: 90%;\n  margin-bottom: 20px;\n  z-index: 10;\n  border-radius: 0.5rem;\n  height: 100%;\n  padding: 40px; }\n\n.profile-info {\n  padding-right: 40px; }\n\n.sidebar-profile {\n  width: 200px;\n  padding-top: 20px; }\n\n.sidebar-img {\n  width: 200px;\n  display: inline-block;\n  text-align: center; }\n\n.image {\n  width: 100%;\n  height: 100%; }\n\n.user-avatar {\n  border-radius: 100%;\n  width: 140px;\n  height: 140px;\n  background-color: grey;\n  position: relative;\n  overflow: hidden; }\n\n.user-avatar span {\n  display: none; }\n\n.user-avatar:hover span {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  line-height: 140px;\n  display: block; }\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background-color: white;\r\n    margin-top: 80px;\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n    z-index: 10;\r\n    border-radius: 0.5rem;\r\n    height: 100%;\r\n    padding: 40px;\r\n}\r\n\r\n.profile-info {\r\n    padding-right: 40px;\r\n}\r\n\r\n.sidebar-profile {\r\n    width: 200px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.sidebar-img {\r\n    width: 200px;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.image {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.user-avatar {\r\n    border-radius: 100%;\r\n    width: 140px;\r\n    height: 140px;\r\n    background-color: grey;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.user-avatar span {\r\n    display: none;\r\n}\r\n\r\n.user-avatar:hover span {\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.4);\r\n    color: #fff;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    line-height: 140px;\r\n    display: block;\r\n}\r\n\r\n.profile-label{\r\n    float: left;\r\n}\r\n.profile-input{\r\n    width: 70%;\r\n    padding-left: 20px;\r\n    margin-left: 120px;\r\n}\r\n.profile-input-button{\r\n    display: none;\r\n}\r\n.profile-input:hover .profile-input-button{\r\n    display: block;\r\n}\r\n.icon-edit{\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n.profile-button-edit{\r\n    height: 34px;\r\n}\r\n\r\n.profile-password{\r\n    width: 300px;\r\n    margin-left: 150px;\r\n    padding-left: 20px;\r\n}\r\n.profile-email{\r\n    width: 300px;\r\n    margin-left: 70px;\r\n    padding-left: 20px;\r\n}"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "\r\n.chat {\r\n  position: fixed;\r\n  width: 250px;\r\n  height: 485px;\r\n}\r\n\r\n.list {\r\n  height: 381px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.list::-webkit-scrollbar{\r\n  width: 2px;\r\n}\r\n\r\n.list::-webkit-scrollbar-thumb {\r\n  border: none;\r\n  background-color: #ccc;\r\n  max-height: 5px;\r\n}\r\n\r\n.list::-webkit-scrollbar-track{\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "\r\n.carousel,\r\n.item,\r\n.active {\r\n    position: initial;\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n    .carousel-indicators {\r\n        bottom: auto;\r\n        top: 570px;\r\n    }\r\n}\r\n.carousel-inner {\r\n    position: absolute;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.carousel-indicators li {\r\n    height: 0;\r\n    margin: 0;\r\n}\r\n\r\n.carousel-indicators .active {\r\n    border-color: rgb(88, 209, 226);\r\n}\r\n\r\n.carousel-control {\r\n    height: 620px;\r\n}\r\n\r\n/* Background images are set within the HTML using inline CSS, not here */\r\n\r\n.fill {\r\n    width: 100%;\r\n    height: 620px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    -o-background-size: cover;\r\n}"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin: 80px auto 0 auto;\r\n    padding-top: 15px;\r\n    width: 340px;\r\n    background-color: white;\r\n    border-radius: 0.5rem;\r\n}\r\n.form-control{\r\n    width: 150px;\r\n}\r\nsmall{\r\n    color:red;\r\n}\r\ninput.ng-touched.ng-invalid {border:solid red 1.5px;}\r\ninput.ng-touched.ng-valid {border:solid green 1.5px;}\r\n.form-input{\r\n    width: 310px\r\n}\r\n.or-sign-up{\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: #7d97a4;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n\r\n}\r\n.or-sign-up span{\r\n    background-color: white;\r\n    position: relative;\r\n    z-index: 20;\r\n    padding-left: 12px;\r\n    padding-right: 12px;\r\n}\r\n.line{\r\n    position: absolute;\r\n    content: '';\r\n    z-index: 10;\r\n    height: 2px;\r\n    width: 100%;\r\n    background-color: #ecf0f2;\r\n    top:calc(50% - 1px);\r\n}\r\n.sign-up-other{\r\n    width: 310px;\r\n    height: 45px;\r\n    background-color: #3b5998;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n}\r\n.sign-up-other span{\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n.sign-up-other-a{\r\n    text-decoration: none;\r\n}\r\n.sign-up-other:hover{\r\n    background-color: #36a3ff;\r\n}\r\n.sign-up-other-vk{\r\n    background-color: #507299\r\n}\r\n.location{\r\n  margin-top: 15px;\r\n}\r\n"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = ".container{\r\n    z-index: 20;\r\n    position: relative;\r\n}\r\n.i-position{\r\n    position: relative;\r\n    top: 5px;\r\n}"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin: 80px auto 0 auto;\r\n    width: 340px;\r\n    background-color: white;\r\n    border-radius: 0.5rem;\r\n    padding-top: 15px;\r\n}\r\n.form-control{\r\n    width: 150px;\r\n}\r\nsmall{\r\n    color:red;\r\n}\r\ninput.ng-touched.ng-invalid {border:solid red 1.5px;}\r\ninput.ng-touched.ng-valid {border:solid green 1.5px;}\r\n.form-input{\r\n    width: 310px\r\n}\r\n.or-sign-in{\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: #7d97a4;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n\r\n}\r\n.or-sign-in span{\r\n    background-color: white;\r\n    position: relative;\r\n    z-index: 20;\r\n    padding-left: 12px;\r\n    padding-right: 12px;\r\n}\r\n.line{\r\n    position: absolute;\r\n    content: '';\r\n    z-index: 10;\r\n    height: 2px;\r\n    width: 100%;\r\n    background-color: #ecf0f2;\r\n    top:calc(50% - 1px);\r\n}\r\n.sign-in-other{\r\n    width: 310px;\r\n    height: 45px;\r\n    background-color: #3b5998;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n}\r\n.sign-in-other:hover{\r\n    background-color: #36a3ff;\r\n}\r\n.sign-in-other-a{\r\n    text-decoration: none;\r\n}\r\n.sign-in-other span{\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\n.sign-in-other-vk{\r\n    background-color: #507299;\r\n}\r\n"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n  display: inline-block;\r\n}\r\n\r\n.form-group.to {\r\n  float: right;\r\n}\r\n\r\n.from-to input.form-control {\r\n  width: 250px;\r\n}\r\n\r\n.price-dist input.form-control {\r\n  width: 290px;\r\n}\r\n\r\n.bus-info {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n  display: inline-block;\r\n}\r\n\r\n.form-group.to {\r\n  float: right;\r\n}\r\n\r\n.from-to input.form-control {\r\n  width: 250px;\r\n}\r\n.station {\r\n  margin-top: 20px;\r\n}\r\n\r\n.station input.form-control {\r\n  width: 290px;\r\n}\r\n\r\n.price input.form-control {\r\n  width: 290px;\r\n}\r\n"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = ".full button span {\r\n    background-color: limegreen;\r\n    border-radius: 32px;\r\n    color: black;\r\n}\r\n.partially button span {\r\n    background-color: orange;\r\n    border-radius: 32px;\r\n    color: black;\r\n}\r\n\r\n.fa.fa-calendar {\r\n    margin: 3px 15px 0 12px;\r\n}\r\n\r\n.dp.input-group {\r\n    text-align: center;\r\n    width: 300px;\r\n}\r\n\r\n.modal-sm {\r\n    width: 350px;\r\n}\r\n.modal-dialog {\r\n    margin: 50px auto;\r\n}"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n}\r\n\r\n.dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    min-height: 200px;\r\n    width: 100%;\r\n    max-width: 650px;\r\n    background: none;\r\n    padding: 12px;\r\n    box-shadow: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .dialog {\r\n        top: 40px;\r\n    }\r\n}\r\n\r\n.dialog__close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #2d2d2d;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    font-size: 1.2em;\r\n}\r\n"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    display: inline-block;\r\n}\r\n\r\n.form-group.to {\r\n    float: right;\r\n}\r\n\r\n.from-to input.form-control {\r\n    width: 250px;\r\n}\r\n\r\n.price-dist input.form-control {\r\n    width: 290px;\r\n}\r\n\r\n.flight-info {\r\n    margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    display: inline-block;\r\n}\r\n\r\n.form-group.to,\r\n.form-group.hotel-address {\r\n    float: right;\r\n}\r\n\r\ninput.form-control {\r\n    width: 250px;\r\n}\r\nsmall{\r\n    position: absolute;\r\n    color: red;\r\n}\r\ninput.ng-touched.ng-invalid {border:solid red 1.5px;}\r\n\r\n\r\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n  display: inline-block;\r\n}\r\n\r\n.form-group.to {\r\n  float: right;\r\n}\r\n\r\n.from-to input.form-control {\r\n  width: 250px;\r\n}\r\n\r\n.station input.form-control {\r\n  width: 290px;\r\n}\r\n\r\n.price-dist input.form-control {\r\n  width: 290px;\r\n}\r\n\r\n.station {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = ".trip-sights div.form-group {\r\n  display: inline-block;\r\n}\r\n\r\n.trip-sights select.form-control {\r\n  width: 196.5px;\r\n}\r\n\r\n.list-of-sights li {\r\n  display: inline-block;\r\n}\r\n\r\n.list-of-sights i.fa-2x {\r\n  font-size: 1em;\r\n  margin: 1px;\r\n}\r\n.list-of-sights button {\r\n  width: 35px;\r\n  height: 25px;\r\n  padding: 1px;\r\n  margin-left: 320px;\r\n}\r\n\r\n.list-of-sights {\r\n  max-height: 200px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.list-of-sights::-webkit-scrollbar{\r\n  width: 2px;\r\n}\r\n\r\n.list-of-sights::-webkit-scrollbar-thumb {\r\n  border: none;\r\n  background-color: transparent;\r\n  max-height: 5px;\r\n}\r\n\r\n.list-of-sights:hover::-webkit-scrollbar-thumb{\r\n  border: none;\r\n  background-color: blue;\r\n  max-height: 20px;\r\n}\r\n\r\n.list-of-sights::-webkit-scrollbar-track{\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n\r\n.controls {\r\n  margin-top: 10px;\r\n  border: 1px solid transparent;\r\n  border-radius: 2px 0 0 2px;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  height: 32px;\r\n  outline: none;\r\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#pac-input {\r\n  background-color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  margin-left: 12px;\r\n  padding: 0 11px 0 13px;\r\n  text-overflow: ellipsis;\r\n  width: 300px;\r\n}\r\n\r\n#pac-input:focus {\r\n  border-color: #4d90fe;\r\n}\r\n\r\n.pac-container {\r\n  font-family: Roboto;\r\n}\r\n\r\n#type-selector {\r\n  color: #fff;\r\n  background-color: #4d90fe;\r\n  padding: 5px 11px 0px 11px;\r\n}\r\n\r\n#type-selector label {\r\n  font-family: Roboto;\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n}\r\n#target {\r\n  width: 345px;\r\n}"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-color: white;\r\n  margin-top: 80px;\r\n  width: 90%;\r\n  margin-bottom: 20px;\r\n  z-index: 10;\r\n  border-radius: 0.5rem;\r\n  padding: 40px;\r\n}\r\n\r\n.planning-info {\r\n}\r\n\r\n.sidebar-planning {\r\n  max-height: 280px;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  width: 200px\r\n}\r\n\r\n.sidebar-planning::-webkit-scrollbar{\r\n  width: 2px;\r\n}\r\n\r\n.sidebar-planning::-webkit-scrollbar-thumb {\r\n  border: none;\r\n  background-color: transparent;\r\n  max-height: 5px;\r\n}\r\n\r\n.sidebar-planning:hover::-webkit-scrollbar-thumb{\r\n  border: none;\r\n  background-color: blue;\r\n  max-height: 20px;\r\n}\r\n\r\n.sidebar-planning::-webkit-scrollbar-track{\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n.sidebar-img {\r\n  width: 200px;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.trip-avatar {\r\n  border-radius: 100%;\r\n  width: 140px;\r\n  height: 140px;\r\n  background-color: grey;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.trip-avatar span {\r\n  display: none;\r\n}\r\n\r\n.trip-avatar:hover span {\r\n  position: absolute;\r\n  background-color: rgba(0,0,0,0.4);\r\n  color: #fff;\r\n  font-size: 12px;\r\n  text-align: center;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  line-height: 140px;\r\n  display: block;\r\n}\r\n\r\n.nav-stacked li {\r\n  float: none;\r\n  text-align: center;\r\n}\r\n\r\n.button-menu{\r\n  width: 198px;\r\n  margin-top: 2px;\r\n}\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: black;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  width: 667px;\r\n}\r\n.trip-label{\r\n  float: left;\r\n}\r\n.trip-input{\r\n  margin-left: 100px;\r\n}\r\nsmall{\r\n  margin-left: 20px;\r\n  color: red;\r\n}\r\ninput.ng-touched.ng-invalid {border:solid red 1.5px;}\r\n\r\n.modal-sm {\r\n  width: 170px;\r\n  margin: 100px 400px auto auto;\r\n  float: right;\r\n}\r\n.btn-group-vertical>.btn {\r\n  position: relative;\r\n  background: transparent;\r\n  width: 170px;\r\n}\r\n\r\n.trippanel i.fa-close {\r\n  font-size: 1em;\r\n  margin: 0 0 0 70px;\r\n}\r\n.activities{\r\n  margin-top: 20px;\r\n}\r\n.btn-action{\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  width: 40px;\r\n  visibility: hidden;\r\n}\r\n.panel:hover .btn-action{\r\n  visibility: visible;\r\n}"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"flex\">\r\n      <div class=\"flex-itm\" *ngFor=\"let album of (albums | slice:albums.length - albums.length)\">\r\n        <div class=\"panel trip-panel\">\r\n          <div class=\"trip-pic\">\r\n            <div class=\"trippic-wrapper\">\r\n              <img class=\"img-responsive\" src=\"{{album?.img}}\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <h3><a href=\"#\">{{album?.name}}</a></h3>\r\n          <h4>{{album?.date_of_creation}}</h4>\r\n          <p>{{album?.description}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"min-height: 700px\">\r\n    <div class=\"row\">\r\n        <div class=\"profile-menu col-md-3\">\r\n            <div class=\"sidebar-img\">\r\n                <label for=\"photo\" class=\"user-avatar\">\r\n                    <img src=\"{{pathToPhoto}}\" class=\"img-circle image\">\r\n                    <span>Click here to upload</span>\r\n                </label>\r\n                <h3 class=\"text-center\" *ngIf=\"userProfile\">{{userProfile.lastName}} {{userProfile.firstName}}</h3>\r\n            </div>\r\n            <div class=\"sidebar-profile\">\r\n                <ul class=\"nav nav-pills nav-stacked\">\r\n                    <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">Account</a></li>\r\n                    <li><a href=\"#password\" data-toggle=\"tab\">Password</a></li>\r\n                    <li><a href=\"#email\" data-toggle=\"tab\">Email</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"profile-info col-md-9\">\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"profile\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"form-horizontal\" *ngIf=\"userProfile\" #f=\"ngForm\" novalidate\r\n                              (ngSubmit)=\"updateUser(f.value, f.valid)\">\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Lastname</h4>\r\n                                <div class=\"input-group profile-input\">\r\n                                    <input id=\"foobar\" type=\"text\" #lastname=\"ngModel\" class=\"form-control\"\r\n                                           name=\"lastName\"\r\n                                           [(ngModel)]=\"userProfile.lastName\" minlength=\"2\" maxlength=\"8\" required>\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"document.getElementById('foobar').removeAttribute('disabled')\">\r\n                                            <i\r\n                                                    class=\"fa fa-pencil fa-lg icon-edit\"\r\n                                                    aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Firstname</h4>\r\n                                <div class=\"input-group profile-input\">\r\n                                    <input type=\"text\" maxlength=\"20\" required class=\"form-control\"\r\n                                           name=\"firstName\"\r\n                                           [(ngModel)]=\"userProfile.firstName\">\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"document.getElementById('foobar').setAttribute('disabled', 'disabled');\">\r\n                                            <i\r\n                                                    class=\"fa fa-pencil fa-lg icon-edit\"\r\n                                                    aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Day of birth</h4>\r\n                                <div class=\"input-group profile-input\">\r\n                                    <input type=\"date\" required class=\"form-control\" name=\"birthday\"\r\n                                           [(ngModel)]=\"userProfile.birthday\">\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"this.form.birthday.disabled = 0\"><i\r\n                                                class=\"fa fa-pencil fa-lg icon-edit\"\r\n                                                aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Gender</h4>\r\n                                <div class=\"input-group profile-input\">\r\n                                    <select [(ngModel)]=\"userProfile.gender.id\" required name=\"gender\"\r\n                                            class=\"form-control form-input\">\r\n                                        <option [value]=\"userProfile.gender.id\" hidden>{{userProfile.gender.gender}}\r\n                                        </option>\r\n                                        <option value=\"1\">Male</option>\r\n                                        <option value=\"2\">Female</option>\r\n                                    </select>\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"this.form.gender.disabled = 0\"><i\r\n                                                class=\"fa fa-pencil fa-lg icon-edit\"\r\n                                                aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Country</h4>\r\n                                <div class=\"input-group profile-input\">\r\n                                    <select class=\"form-control form-input\" name=\"country\"\r\n                                            (change)=\"setCountryId(userProfile.city.state.country.name)\"\r\n                                            [(ngModel)]=\"userProfile.city.state.country.name\" #country=\"ngModel\" required>\r\n\r\n                                        <option hidden>\r\n                                            {{userProfile.city.state.country.name}}\r\n                                        </option>\r\n\r\n                                        <option value=\"{{country?.id}}\" *ngFor=\"let country of listCities\">\r\n                                            {{country?.name}}\r\n                                        </option>\r\n\r\n                                    </select>\r\n\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"this.form.country.disabled = 0\"><i\r\n                                                class=\"fa fa-pencil fa-lg icon-edit\"\r\n                                                aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">State</h4>\r\n                                <div class=\"input-group profile-input\">\r\n\r\n                                    <select class=\"form-control form-input location\" name=\"state\"\r\n                                            (change)=\"setStateId(userProfile.city.state.name)\"\r\n                                            [(ngModel)]=\"userProfile.city.state.name\" #state=\"ngModel\" required>\r\n\r\n                                        <option hidden>\r\n                                            {{userProfile.city.state.name}}\r\n                                        </option>\r\n\r\n                                        <option value=\"{{state?.id}}\"\r\n                                                *ngFor=\"let state of listStateOfTheCountry\">\r\n                                            {{state?.name}}\r\n                                        </option>\r\n                                    </select>\r\n\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"this.form.state.disabled = 0\"><i\r\n                                                class=\"fa fa-pencil fa-lg icon-edit\"\r\n                                                aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">City</h4>\r\n                                <div class=\"input-group profile-input\">\r\n\r\n                                    <select class=\"form-control form-input location\" name=\"city\"\r\n                                            [ngModel]=\"userProfile.city.name\" #city=\"ngModel\" required>\r\n                                        <option hidden>\r\n                                            {{userProfile.city.name}}\r\n                                        </option>\r\n                                        <option value=\"{{city?.id}}\"\r\n                                                *ngFor=\"let city of (listCityesOfTheState | slice:listCityesOfTheState.length - listCityesOfTheState.length)\">\r\n                                            {{city?.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"this.form.city.disabled = 0\"><i\r\n                                                class=\"fa fa-pencil fa-lg icon-edit\"\r\n                                                aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Info</h4>\r\n                                <div class=\"input-group profile-input\">\r\n                        <textarea required class=\"form-control\" rows=\"7\" maxlength=\"150\"\r\n                                  style=\"width: 400px; resize: none\" name=\"info\" [(ngModel)]=\"userProfile.info\">\r\n                            </textarea>\r\n                                    <div class=\"input-group-btn profile-input-button\">\r\n                                        <button class=\"btn btn-default profile-button-edit\" type=\"button\"\r\n                                                onclick=\"this.form.info.disabled = 0\" style=\"height: 148.5px\"><i\r\n                                                class=\"fa fa-pencil fa-lg icon-edit\" aria-hidden=\"true\"></i></button>\r\n                                    </div>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n                            <div class=\"form-group\" style=\"padding-top: 10px\">\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"password\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"updatePassword(f.value, f.valid)\">\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Current password</h4>\r\n                                <div class=\"profile-password\">\r\n                                    <input type=\"password\" [ngModel]=\"userPassword.oldPassword\" style=\"float: left; width: 139px; margin-right: 10px\"\r\n                                           #oldPassword=\"ngModel\"  maxlength=\"10\" minlength=\"6\" required class=\"form-control\" name=\"oldPassword\">\r\n                                    <button type=\"button\" style=\"float: left\" class=\"btn btn-primary\">Forgot password\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">New password</h4>\r\n                                <div class=\"profile-password\">\r\n                                    <input type=\"password\" minlength=\"6\" maxlength=\"10\" required class=\"form-control\"\r\n                                           name=\"password\"\r\n                                           validateEqual=\"confirmPassword\"\r\n                                           reverse=\"true\" [ngModel]=\"userPassword.password\" #password=\"ngModel\">\r\n                                    <small [hidden]=\"password.valid ||  (password.pristine && !f.submitted)\">\r\n                                        Password mismatch(at least six characters)\r\n                                    </small>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Confirm password</h4>\r\n                                <div class=\"profile-password\">\r\n                                    <input type=\"password\" maxlength=\"10\" required class=\"form-control\"\r\n                                           name=\"confirmPassword\"\r\n                                           validateEqual=\"password\" [ngModel]=\"userPassword.confirmPassword\"\r\n                                           #confirmPassword=\"ngModel\">\r\n                                    <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\">\r\n                                        Password is required\r\n                                    </small>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\" style=\"padding-top: 10px\">\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Update password</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"email\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"form-horizontal\" #f=\"ngForm\" novalidate>\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">E-mail</h4>\r\n                                <div class=\"profile-email\">\r\n                                    <input type=\"password\" style=\"float: left; margin-right: 10px\" maxlength=\"10\"\r\n                                           required\r\n                                           class=\"form-control\" name=\"oldPassword\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\">Inform about the invitation to travel\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\" style=\"padding-top: 10px\">\r\n                                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <form style=\"visibility: hidden\">\r\n            <input type=\"file\" id=\"photo\" (change)=\"upload()\">\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\"style=\"min-height: 700px\">\r\n    <div  class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div>\r\n                <button routerLink=\"/trip-planning/0\" style=\"position: absolute; margin-left: 8px\" type=\"button\" class=\"btn btn-primary  btn-lg\">New trip</button>\r\n                 <h2 class=\"title\">Active trips</h2>\r\n            </div>\r\n            <div *ngFor=\"let trip of (profileTripsActive | slice:profileTripsActive.length - profileTripsActive.length)\">\r\n                <div class=\"panel trip-panel row\">\r\n                    <div class=\"trip-pic col-md-3\" style=\"padding-left: 0px\">\r\n                        <div class=\"trippic-wrapper\">\r\n                            <img class=\"img-responsive img-trips\" src=\"{{trip?.photo}}\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                        <h3><a routerLink=\"/trip-planning/{{trip?.id}}\">{{trip?.name}}</a></h3>\r\n                        <h4>{{trip?.startDate | date :'dd.MM.yyyy' }} - {{trip?.endDate | date :'dd.MM.yyyy'}}</h4>\r\n                    </div>\r\n                    <div class=\"col-md-2\" style=\"text-align: center; padding-top: 35px;\">\r\n                        <button (click)=\"deleteTrip(trip?.id)\" type=\"button\" class=\"btn btn-primary btn-trips\">\r\n                            <i class=\"fa  fa-times fa-lg\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <h2 class=\"title\">Completed trips</h2>\r\n            <div *ngFor=\"let trip of (profileTripsComplited | slice:profileTripsComplited.length - profileTripsComplited.length )\">\r\n                <div class=\"panel trip-panel row\">\r\n                    <div class=\"trip-pic col-md-3\" style=\"padding-left: 0px\">\r\n                        <div class=\"trippic-wrapper\">\r\n                            <img class=\"img-responsive img-trips\" src=\"{{trip?.img}}\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                        <h3><a routerLink=\"/trip-planning/{{trip?.id}}\">{{trip?.name}}</a></h3>\r\n                        <h4>{{trip?.startDate | date :'dd.MM.yyyy'}} - {{trip?.endDate | date :'dd.MM.yyyy'}}</h4>\r\n                    </div>\r\n                    <div class=\"col-md-2\" style=\"text-align: center; padding-top: 35px;\">\r\n                        <button (click)=\"deleteTrip(trip?.id)\" type=\"button\" class=\"btn btn-primary btn-trips\">\r\n                            <i class=\"fa  fa-times fa-lg\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"chat\">\r\n        <header style=\"color: blue; text-align: center; font-size: x-large; padding: 10px\">Discussion</header>\r\n        <div class=\"msg-body\">\r\n            <ul #list class=\"list\" [scrollTop]=\"list.scrollHeight\">\r\n                <li id=\"sender\" *ngFor=\"let message of messages\" style=\"list-style-type: none\" >\r\n                  <div style=\"margin-top: 30px; padding-bottom: 10px;\">\r\n                    <div style=\"margin-top: 10px\"><span><img src=\"assets/img/user_pic.jpg\" class=\"img-circle image\" style=\"max-height: 20px;max-width: 20px;-webkit-border-radius: 100%; -moz-border-radius: 100%; border-radius: 100%;width: 100%;height: 100%\"></span>\r\n                  {{message.sender.lastName}} {{message.sender.firstName}}</div>\r\n                  <div style=\"margin-top: 10px\">{{message.body}}</div>\r\n                  <small style=\"color: dimgray; text-align: center\">{{message.sendTime | amCalendar : referenceTime : formats }}</small><br></div>\r\n\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"msg\" (keyup.enter)=\"sendMessage()\"\r\n               placeholder=\"Type message...\" style=\"box-shadow: #00b3ee\"/>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  created-trip works!\r\n</p>\r\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "<header id=\"myCarousel\" class=\"carousel slide\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\r\n  </ol>\r\n\r\n  <!-- Wrapper for Slides -->\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"item active\">\r\n      <!-- Set the first background image using inline CSS below. -->\r\n      <div class=\"fill\" style=\"background-image:url('assets/img/pyramids.png');\"></div>\r\n      <div class=\"carousel-caption\">\r\n        <h2>Caption 1</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <!-- Set the second background image using inline CSS below. -->\r\n      <div class=\"fill\" style=\"background-image:url('assets/img/venice.png');\"></div>\r\n      <div class=\"carousel-caption\">\r\n        <h2>Caption 2</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <!-- Set the third background image using inline CSS below. -->\r\n      <div class=\"fill\" style=\"background-image:url('assets/img/india.png');\"></div>\r\n      <div class=\"carousel-caption\">\r\n        <h2>Caption 3</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <!-- Set the third background image using inline CSS below. -->\r\n      <div class=\"fill\" style=\"background-image:url('assets/img/australia.png');\"></div>\r\n      <div class=\"carousel-caption\">\r\n        <h2>Caption 4</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <!-- Set the third background image using inline CSS below. -->\r\n      <div class=\"fill\" style=\"background-image:url('assets/img/new_york.png');\"></div>\r\n      <div class=\"carousel-caption\">\r\n        <h2>Caption 5</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Controls -->\r\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n    <span class=\"icon-prev\"></span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n    <span class=\"icon-next\"></span>\r\n  </a>\r\n</header>\r\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"flex\">\r\n      <div class=\"flex-itm\" *ngFor=\"let trip of homeTrips\">\r\n        <div class=\"panel trip-panel\">\r\n          <div class=\"trip-pic\">\r\n            <div class=\"trippic-wrapper\">\r\n              <img class=\"img-responsive\" src=\"{{trip?.photo}}\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <h3><a routerLink=\"/trip-info/{{trip?.id}}\">{{trip?.name}}</a></h3>\r\n          <h4>{{trip?.startDate | date :'dd.MM.yyyy' }} - {{trip?.endDate| date :'dd.MM.yyyy' }}</h4>\r\n          <p>{{trip?.info}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\r\n<div class=\"container-fluid\" style=\"text-align: center; padding-top: 650px\">\r\n    <h3>\r\n        TRIPS\r\n    </h3>\r\n</div>\r\n<app-home-trips></app-home-trips>"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 60px\">\r\n    <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Enter sight\">\r\n    <div id=\"googleMap\" style=\"width:1200px;height:600px;\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n  <h4> Messages</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"list-of-msg\">\r\n  <ul>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n    <li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li><li style=\"background-color: #66afe9; height: 15px; border-bottom-color: #5993cd\">Msg</li>\r\n    <li style=\"height: 15px; border-bottom-color: #5993cd\">Msg 2</li>\r\n  </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<h3>Страница не найдена</h3>\r\n\r\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-12\">\r\n    <form class=\"form-horizontal\" #f=\"ngForm\" novalidate\r\n          (ngSubmit)=\"addOrUpdateUser(f.value, f.valid)\">\r\n      <div class=\"form-group\">\r\n        <div style=\"float: left; margin:0 10px 0 0\">\r\n          <input class=\"form-control\" name=\"lastName\" placeholder=\"Last name\"\r\n                 [(ngModel)]=\"form.lastName\" #lastname=\"ngModel\" minlength=\"2\" maxlength=\"8\" required/>\r\n        </div>\r\n        <div>\r\n          <input class=\"form-control\" name=\"firstName\" placeholder=\"First name\"\r\n                 [(ngModel)]=\"form.firstName\" #firstname=\"ngModel\" minlength=\"2\" maxlength=\"8\" required/>\r\n        </div>\r\n        <small\r\n          [hidden]=\"(firstname.valid || (firstname.pristine && !f.submitted))&&(lastname.valid || (lastname.pristine && !f.submitted))\">\r\n          First name or last name is required (minimum 2 characters).\r\n        </small>\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control form-input\" name=\"email\" type=\"email\" placeholder=\"Email\"\r\n               required [(ngModel)]=\"form.email\" #email=\"ngModel\" (change)=\"checkEmail(email.valid )\"\r\n               pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\"/>\r\n        <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\">\r\n          Email is required and format should be <i>john@doe.com</i>.\r\n        </small>\r\n        <small [hidden]=\"freeEmail\">\r\n          Email in use by another user.\r\n        </small>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control form-input\" minlength=\"6\" name=\"password\" type=\"password\"\r\n               validateEqual=\"confirmPassword\"\r\n               reverse=\"true\" [ngModel]=\"form.password\" #password=\"ngModel\" placeholder=\"Password\"\r\n               required/>\r\n        <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\">\r\n          Password mismatch(at least six characters)\r\n        </small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control form-input\" name=\"confirmPassword\" type=\"password\" validateEqual=\"password\"\r\n               [ngModel]=\"form.confirmPassword\" #confirmPassword=\"ngModel\" placeholder=\"Confirm password\"\r\n               required/>\r\n        <small [hidden]=\"confirmPassword.valid ||  (confirmPassword.pristine && !f.submitted)\">\r\n          Password mismatch\r\n        </small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <select class=\"form-control form-input\" name=\"gender\"\r\n                [(ngModel)]=\"form.gender\" #gender=\"ngModel\" required>\r\n          <option value=\"\" hidden selected>Gender</option>\r\n          <option value=\"1\">Male</option>\r\n          <option value=\"2\">Female</option>\r\n        </select>\r\n        <small [hidden]=\"gender.valid ||  (gender.pristine && !f.submitted)\">\r\n          Gender is required\r\n        </small>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\" style=\"margin-bottom: 10px\">\r\n        <select  class=\"form-control form-input\" name=\"country\" (change)=\"setCountryId(form.country)\"\r\n                [(ngModel)]=\"form.country\" #country=\"ngModel\" required>\r\n          <option value=\"\" hidden selected>Country</option>\r\n          <option value=\"{{country?.id}}\" *ngFor=\"let country of (listCities | slice:listCities.length - listCities.length)\">\r\n            {{country?.name}}\r\n          </option>\r\n\r\n        </select>\r\n        <small [hidden]=\"country.valid ||  (country.pristine && !f.submitted)\">\r\n          Country is required\r\n        </small>\r\n\r\n        <small [hidden]=\"country.pristine \">\r\n          <select class=\"form-control form-input location\" name=\"state\" (change)=\"setStateId(form.state)\"\r\n                  [(ngModel)]=\"form.state\" #state=\"ngModel\" required>\r\n            <option value=\"\" hidden selected>State</option>\r\n            <option value=\"{{state?.id}}\"\r\n                    *ngFor=\"let state of (listStateOfTheCountry | slice:listStateOfTheCountry.length - listStateOfTheCountry.length)\">\r\n              {{state?.name}}\r\n            </option>\r\n          </select>\r\n\r\n          <small [hidden]=\"state.valid ||  (state.pristine && !f.submitted)\">\r\n            State is required\r\n          </small>\r\n\r\n          <small [hidden]=\"state.pristine \">\r\n            <select class=\"form-control form-input location\" name=\"city\"\r\n                    [(ngModel)]=\"form.city\" #city=\"ngModel\" required>\r\n              <option value=\"\" hidden selected>City</option>\r\n              <option value=\"{{city?.id}}\"\r\n                      *ngFor=\"let city of (listCityesOfTheState | slice:listCityesOfTheState.length - listCityesOfTheState.length)\">\r\n                {{city?.name}}\r\n              </option>\r\n            </select>\r\n\r\n            <small [hidden]=\"city.valid ||  (city.pristine && !f.submitted)\">\r\n              City is required\r\n            </small>\r\n          </small>\r\n        </small>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\" style=\"margin-bottom: 10px\">\r\n        <div class=\"checkbox\" style=\"padding-top: 5px;\">\r\n          <label>\r\n            <input  #remembercb type=\"checkbox\" (change)=\"remember = remembercb.checked\"> Remember me\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\" style=\"width:150px; float:left\">\r\n        <input type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Sign up\">\r\n      </div>\r\n      <div style=\"padding: 13px 0 0 120px;margin-left: 40px;\">\r\n        <a routerLink=\"/login\" class=\"fade-link\"> Have an account?</a>\r\n      </div>\r\n      <div class=\"or-sign-up\">\r\n        <span>Or Sign up With</span>\r\n        <div class=\"line\">\r\n        </div>\r\n      </div>\r\n      <a href=\"\" class=\"sign-up-other-a\">\r\n        <div class=\"form-group sign-up-other link\">\r\n          <span><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i>Facebook</span>\r\n        </div>\r\n      </a>\r\n      <a href=\"\" class=\"sign-up-other-a\">\r\n        <div class=\"form-group sign-up-other sign-up-other-vk link\">\r\n          <span><i class=\"fa fa-vk fa-lg\" aria-hidden=\"true\"></i>VK</span>\r\n        </div>\r\n      </a>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\" class=\"container\" >\r\n  <div style=\"top: 50%;left: 50%; transform: translate(-50%,5%);z-index: inherit; position: absolute\" class=\"alert alert-danger\" *ngIf=\"signOutSuccess\">\r\n    <a class=\"close\" data-dismiss=\"alert\"> &times;</a>\r\n    You signed out &nbsp;\r\n  </div>\r\n\r\n  <ul class=\"gn-menu-main\" style=\"border-bottom: 1px solid #c6d0da\" >\r\n    <li id=\"menu\" class=\"gn-trigger\">\r\n      <div [hidden]=\"signOutMenu\">\r\n        <a style=\"padding-left: 13px;\" class=\"gn-icon gn-icon-menu\"><span>Menu</span></a>\r\n      </div>\r\n      <nav class=\"gn-menu-wrapper\" style=\"border-right:1px solid #c6d0da\">\r\n        <div class=\"gn-scroller\">\r\n          <ul class=\"gn-menu\">\r\n            <li><a href=\"#\"> <i class=\"fa fa-home fa-2x i-position\" aria-hidden=\"true\" style=\"position: relative\"></i>Home</a></li>\r\n            <li><a routerLink=\"/account/{{id}}/profile\"><i class=\"fa fa-user fa-2x i-position\" aria-hidden=\"true\" style=\" margin:0 18px 0 17px;\"></i>Profile</a></li>\r\n            <li><a routerLink=\"account/{{id}}/trips/\"><i class=\"fa fa-map-marker fa-2x i-position\" aria-hidden=\"true\" style=\" margin:0 20px 0 20px;\"></i>Trips</a></li>\r\n           <!--// <li (click)=\"showMsgDialog = !showMsgDialog\" data-toggle=\"modal\"><a><i class=\"fa fa-envelope fa-2x i-position\" aria-hidden=\"true\"></i>Messages</a></li>-->\r\n            <li><a (click)=\"logout()\"><i class=\"fa fa-sign-out fa-2x i-position\" aria-hidden=\"true\"></i>Log out</a></li>\r\n          </ul>\r\n        </div><!-- /gn-scroller -->\r\n      </nav>\r\n    </li>\r\n\r\n    <li style=\"border: none\">\r\n      <img src=\"assets/img/logo.png\">\r\n    </li>\r\n\r\n    <li id=\"reg\" style=\"float: right; border: none\"><a routerLink=\"/registered\"><span>Sign up</span></a></li>\r\n    <li id=\"log\" style=\"float: right; border: none\"><a routerLink=\"/login\"><span>Sign in</span></a></li>\r\n  </ul>\r\n\r\n</div><!-- /container -->\r\n\r\n\r\n<!--&lt;!&ndash;SightsDialog&ndash;&gt;-->\r\n<!--<app-dialog [(visible)]=\"showMsgDialog\">-->\r\n  <!--<div class=\"modal-content\">-->\r\n    <!--<app-messages></app-messages>-->\r\n    <!--<div class=\"modal-footer\">-->\r\n      <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"showMsgDialog = !showMsgDialog\">Close</button>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</app-dialog>-->\r\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"signInSuccess\">\r\n          <a class=\"close\" data-dismiss=\"alert\">&times;</a>\r\n          Entered incorrect password or email\r\n      </div>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"signInUser(f.value, f.valid)\">\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control form-input\" name=\"email\" type=\"email\" placeholder=\"Email\"\r\n                       required [(ngModel)]=\"userSignIn.email\" #email=\"ngModel\"\r\n                       pattern=\"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$\"/>\r\n                <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\">\r\n                    Email is required and format should be <i>john@doe.com</i>.\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control form-input\" name=\"password\" type=\"password\"\r\n                       [ngModel]=\"userSignIn.password\" #password=\"ngModel\" placeholder=\"Password\"\r\n                       required/>\r\n                <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\">\r\n                    Password is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\" style=\"width:150px; float:left\">\r\n                <input type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Sign in\">\r\n            </div>\r\n            <div style=\"padding: 13px 0 0 120px;margin-left: 40px;\">\r\n                <a href=\"/login\" class=\"fade-link\"> Forgot password?</a>\r\n            </div>\r\n            <div class=\"or-sign-in\">\r\n                <span>Or Sign in With</span>\r\n                <div class=\"line\">\r\n                </div>\r\n            </div>\r\n            <a href=\"\" class=\"sign-in-other-a\">\r\n                <div class=\"form-group sign-in-other link\">\r\n                    <span><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i>Facebook</span>\r\n                </div>\r\n            </a>\r\n            <a href=\"\" class=\"sign-in-other-a\">\r\n                <div class=\"form-group sign-in-other link sign-in-other-vk\" >\r\n                    <span><i class=\"fa fa-vk fa-lg\" aria-hidden=\"true\"></i>VK</span>\r\n                </div>\r\n            </a>\r\n            <a routerLink=\"/registered\" class=\"sign-in-other-a\">\r\n                <div class=\"form-group sign-in-other sign-in-other-vk link\">\r\n                    <span>No account ? Sign up</span>\r\n                </div>\r\n            </a>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<div class=\"trip-bus\">\r\n    <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"addBus(f.value)\">\r\n        <div class=\"from-to\">\r\n            <div class=\"form-group from\">\r\n\r\n                <label>From</label>\r\n                <input class=\"form-control\" name=\"startAddress\" type=\"text\" maxlength=\"30\" required placeholder=\"Russia\"\r\n                       [(ngModel)]=\"bus.start_address\"/>\r\n\r\n                <label>Departure Time</label>\r\n                <input class=\"form-control\" name=\"startTime\" type=\"datetime-local\" required\r\n                       placeholder=\"2017-05-29T10:25:OOZ\" [(ngModel)]=\"bus.start_time\"/>\r\n            </div>\r\n            <div class=\"form-group to\">\r\n\r\n                <label>To</label>\r\n                <input class=\"form-control\" name=\"destinationAddress\" type=\"text\" maxlength=\"30\" required\r\n                       placeholder=\"Italy\" [(ngModel)]=\"bus.destination_address\"/>\r\n\r\n                <label>Arrival Time</label>\r\n                <input class=\"form-control\" name=\"endTime\" type=\"datetime-local\" required\r\n                       placeholder=\"2017-05-29T10:25:OOZ\" [(ngModel)]=\"bus.end_time\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"price-dist\">\r\n            <div class=\"form-group\">\r\n                <label>Price</label>\r\n                <input class=\"form-control\" name=\"price\" type=\"text\" maxlength=\"5\" placeholder=\"5200\"\r\n                       [(ngModel)]=\"bus.price\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Distance</label>\r\n                <input class=\"form-control\" name=\"distance\" type=\"text\" maxlength=\"5\" placeholder=\"451\"\r\n                       [(ngModel)]=\"bus.distance\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"bus-info\">\r\n            <textarea class=\"form-control\" style=\"width: 400px; resize: none\" maxlength=\"100\" name=\"description\"\r\n                      [(ngModel)]=\"bus.description\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"input-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"trip-car\">\r\n  <div class=\"from-to\">\r\n    <div class=\"form-group from\">\r\n      <label>Pick-up Time</label>\r\n      <input class=\"form-control\" name=\"pickup-time-date\" placeholder=\"2017-05-29T10:25:OOZ\"/>\r\n      <label>Address</label>\r\n      <input class=\"form-control\" name=\"pickup-address\" placeholder=\"Address\"/>\r\n    </div>\r\n    <div class=\"form-group to\">\r\n      <label>Drop-off Time</label>\r\n      <input class=\"form-control\" name=\"dropoff-time-date\" placeholder=\"2017-05-29T10:25:OOZ\"/>\r\n      <label>Address</label>\r\n      <input class=\"form-control\" name=\"dropoff-address\" placeholder=\"Address\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"station\">\r\n    <div class=\"form-group\">\r\n      <label>Company</label>\r\n      <input class=\"form-control\" name=\"car-company\" placeholder=\"company\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Car</label>\r\n      <input class=\"form-control\" name=\"car-model-number\" placeholder=\"model-number\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"price\">\r\n    <div class=\"form-group\">\r\n      <label>Price</label>\r\n      <input class=\"form-control\" name=\"price\" placeholder=\"5200\"/>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"dp input-group\">\r\n    <pre class=\"form-control\" (click)=\"staticModal.show()\"><em *ngIf=\"dt\">{{ getDate() | date:'fullDate'}}</em></pre>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: false}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabl\" aria-hidden=\"true\" >\r\n\r\n    <div class=\"model-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n\r\n                <div style=\"display:inline-block; min-height:290px;\">\r\n                    <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\" [dateDisabled]=\"dateDisabled\"></datepicker>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"today()\">Today</button>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\r\n                <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"staticModal.hide()\">\r\n                    Submit<span aria-hidden=\"true\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\" style=\"padding: 10px\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<div *ngIf=\"visible\" class=\"overlay\"></div>\r\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<div class=\"trip-flights\">\r\n    <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"addFlight(f.value)\">\r\n        <div class=\"from-to\">\r\n            <div class=\"form-group from\">\r\n                <label>From</label>\r\n                <input class=\"form-control\" name=\"startAddress\" type=\"text\" maxlength=\"30\" required placeholder=\"Russia\"\r\n                       [(ngModel)]=\"flight.start_address\"/>\r\n\r\n                <label>Departure Time</label>\r\n                <input class=\"form-control\" name=\"startTime\" type=\"datetime-local\" required\r\n                       placeholder=\"2017-05-29T10:25:OOZ\" [(ngModel)]=\"flight.start_time\"/>\r\n            </div>\r\n            <div class=\"form-group to\">\r\n\r\n                <label>To</label>\r\n                <input class=\"form-control\" name=\"destinationAddress\" type=\"text\" maxlength=\"30\" required\r\n                       placeholder=\"Italy\" [(ngModel)]=\"flight.destination_address\"/>\r\n\r\n                <label>Arrival Time</label>\r\n                <input class=\"form-control\" name=\"endTime\" type=\"datetime-local\" required\r\n                       placeholder=\"2017-05-29T10:25:OOZ\" [(ngModel)]=\"flight.end_time\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"price-dist\">\r\n            <div >\r\n                <label>Price</label>\r\n                <input class=\"form-control\" name=\"price\" type=\"text\" maxlength=\"5\" placeholder=\"5200\"\r\n                       [(ngModel)]=\"flight.price\"/>\r\n            </div>\r\n            <div >\r\n                <label>Distance</label>\r\n                <input class=\"form-control\" name=\"distance\" type=\"text\" maxlength=\"5\" placeholder=\"451\"\r\n                       [(ngModel)]=\"flight.distance\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"flight-info\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control\" style=\"width: 400px; resize: none\" maxlength=\"100\" name=\"description\"\r\n                      [(ngModel)]=\"flight.description\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"input-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4> Lodging</h4>\r\n</div>\r\n<div class=\"modal-body\" style=\"margin: 15px;\">\r\n    <div class=\"trip-lodging\">\r\n        <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"addLodging(f.value, f.valid)\">\r\n            <div class=\"address\">\r\n                <div class=\"form-group\">\r\n                    <label>Hotel</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"name\" minlength=\"2\" maxlength=\"20\" required\r\n                           placeholder=\"Name\"\r\n                           [(ngModel)]=\"lodging.name\" #name=\"ngModel\"/>\r\n                    <small\r\n                            [hidden]=\"name.valid || (name.pristine && !f.submitted)  || name.untouched\">\r\n                        Name hotel is required (minimum 2 characters).\r\n                    </small>\r\n                </div>\r\n\r\n                <div class=\"form-group hotel-address\">\r\n                    <label>Address</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"address\" minlength=\"2\" maxlength=\"30\"\r\n                           placeholder=\"Address\"\r\n                           [(ngModel)]=\"lodging.address\" #address=\"ngModel\"/>\r\n                    <small\r\n                            [hidden]=\"address.valid || (address.pristine && !f.submitted)  || address.untouched\">\r\n                        Address hotel is required (minimum 2 characters).\r\n                    </small>\r\n                </div>\r\n            </div>\r\n            <div class=\"from-to\">\r\n                <div class=\"form-group from\">\r\n                    <label>Check-in Time</label>\r\n                    <input class=\"form-control\" type=\"datetime-local\" name=\"startTime\" required\r\n                           placeholder=\"2017-05-29T10:25:OOZ\" [(ngModel)]=\"lodging.startTime\" #startTime=\"ngModel\"/>\r\n                    <small\r\n                            [hidden]=\"startTime.valid || (startTime.pristine && !f.submitted)  || startTime.untouched\">\r\n                        Check-in Time is required.\r\n                    </small>\r\n                </div>\r\n                <div class=\"form-group to\">\r\n                    <label>Check-out Time</label>\r\n                    <input class=\"form-control\" type=\"datetime-local\" name=\"endTime\" placeholder=\"2017-05-29T10:25:OOZ\"\r\n                           [(ngModel)]=\"lodging.endTime\" #endTime=\"ngModel\"/>\r\n                    <small\r\n                            [hidden]=\"endTime.valid || (endTime.pristine && !f.submitted)  || endTime.untouched\">\r\n                        Check-out Time is required.\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"price-dist\">\r\n                <div class=\"form-group\">\r\n                    <label>Price</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"price\" placeholder=\"5200\"\r\n                           [(ngModel)]=\"lodging.price\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n  <div >\r\n    <header style=\"color: blue; text-align: center; font-size: x-large; padding: 10px\">Participants</header>\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <td>Participant name</td>\r\n        <td>Role to trip</td>\r\n        <td></td>\r\n      </tr>\r\n      <tr  *ngFor=\"let participant of participants\">\r\n        <td>{{participant?.user.lastName}} {{participant?.user.firstName}}</td>\r\n        <td>{{participant?.role.name}}</td>\r\n        <td><button  routerLink=\"/user/{{participant?.user.id}}\" class=\"btn btn-info\">Account</button></td>\r\n      </tr>\r\n    </table>\r\n    <div class=\"send-email\">\r\n      <input type=\"text\" placeholder=\"Email\" #ivitation (keyup.enter)=\"sendEmail(ivitation.value)\" >\r\n      <button class=\"btn btn-primary\" (click)=\"sendEmail(ivitation.value)\">Invite user</button>\r\n    </div>\r\n    <!--<button class=\"btn btn-primary\">Invite user</button>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<div class=\"trip-rail\">\r\n    <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"addRail(f.value)\">\r\n        <div class=\"from-to\">\r\n            <div class=\"form-group from\">\r\n\r\n                <label>From</label>\r\n                <input class=\"form-control\" name=\"startAddress\" type=\"text\" maxlength=\"30\" required placeholder=\"Russia\"\r\n                       [(ngModel)]=\"rail.start_address\"/>\r\n\r\n                <label>Departure Time</label>\r\n                <input class=\"form-control\" name=\"startTime\" type=\"datetime-local\" required\r\n                       placeholder=\"2017-05-29T10:25:OOZ\" [(ngModel)]=\"rail.start_time\"/>\r\n            </div>\r\n            <div class=\"form-group to\">\r\n\r\n                <label>To</label>\r\n                <input class=\"form-control\" name=\"destinationAddress\" type=\"text\" maxlength=\"30\" required\r\n                       placeholder=\"Italy\" [(ngModel)]=\"rail.destination_address\"/>\r\n\r\n\r\n                <label>Arrival Time</label>\r\n                <input class=\"form-control\" name=\"endTime\" type=\"datetime-local\" required\r\n                       placeholder=\"2017-05-29T10:25:OOZ\" [(ngModel)]=\"rail.end_time\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"price-dist\">\r\n            <div class=\"form-group\">\r\n                <label>Price</label>\r\n                <input class=\"form-control\" name=\"price\" type=\"text\" maxlength=\"5\" placeholder=\"5200\"\r\n                       [(ngModel)]=\"rail.price\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Distance</label>\r\n                <input class=\"form-control\" name=\"distance\" type=\"text\" maxlength=\"5\" placeholder=\"451\"\r\n                       [(ngModel)]=\"rail.distance\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"rail-info\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control\" style=\"width: 400px; resize: none\" maxlength=\"100\" name=\"description\"\r\n                      [(ngModel)]=\"rail.description\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"input-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\" style=\"height: 85%;display: inline-flex;width: 100%;\">\r\n    <div style=\"width: 100%\">\r\n        <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Enter sight\">\r\n        <div id=\"googleMap\" style=\"width:1170px;height:100%;\"></div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "    <div>\r\n    <ul class=\"nav nav-tabs nav-justified\">\r\n      <li class=\"active\" style=\"cursor: pointer\"><a routerLink=\"/trip-planning/{{tripPlanId}}/transport/flight\"><span>Flight</span></a></li>\r\n      <li style=\"cursor: pointer\"><a routerLink=\"/trip-planning/{{tripPlanId}}/transport/rail\"><span>Rail</span></a></li>\r\n      <li style=\"cursor: pointer\"><a routerLink=\"/trip-planning/{{tripPlanId}}/transport/bus\" ><span>Bus</span></a></li>\r\n      <li style=\"cursor: pointer\"><a routerLink=\"/trip-planning/{{tripPlanId}}/transport/car\" ><span>Car Rental</span></a></li>\r\n    </ul>\r\n\r\n\r\n    </div>\r\n    <div class=\"modal-body\" style=\"margin: 15px\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"planning col-md-3\">\r\n            <div class=\"sidebar-img\">\r\n                <label for=\"photo\" class=\"trip-avatar trip-avatar\">\r\n                    <img src=\"{{pathToPhoto}}\" class=\"img-circle image\">\r\n                    <span>Click here to upload</span>\r\n                </label>\r\n            </div>\r\n            <form style=\"visibility: hidden\">\r\n                <input type=\"file\" id=\"photo\" (change)=\"upload()\">\r\n            </form>\r\n\r\n            <div>\r\n                <button (click)=\"setVisible()\" style=\"height: 40px;\" class=\"btn btn-primary button-menu\">Trip info\r\n                    <i class=\"fa fa-caret-right\" style=\"float: right;padding-top: 4px;\"></i></button>\r\n                <div class=\"sidebar-planning\">\r\n                    <ul class=\"nav nav-pills nav-stacked\">\r\n                        <div *ngFor=\"let day of days;\">\r\n                            <button [class.selected]=\"day === selectedDay\" (click)=\"onSelect(day)\"\r\n                                    (click)=\"setVisible2()\"\r\n                                    class=\"btn btn-default button-menu\" [disabled]=\"flagOne\">\r\n                                {{day.name | date:\"dd.MM.yyyy\"}}\r\n                            </button>\r\n                        </div>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div style=\"padding-top: 2px; padding-left: 6px\">\r\n                <button [disabled]=\"flag\" [disabled]=\"flagOne\" class=\"btn btn-primary day\" (click)=\"addDay()\"\r\n                        style=\"width: 90px;\">\r\n                    Add day\r\n                </button>\r\n                <button [disabled]=\"flag\" [disabled]=\"flagOne\" class=\"btn btn-primary day\" (click)=\"delete() \"\r\n                        style=\"width: 90px;\">\r\n                    Delete day\r\n                </button>\r\n            </div>\r\n            <form style=\"visibility: hidden\">\r\n                <input type=\"file\" id=\"tripAvatar\">\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"planning-info col-md-6 col-xs-9\">\r\n\r\n            <div *ngIf=\"visible\">\r\n                <div class=\"container-fluid\" style=\"margin-top: 25px\">\r\n                    <div>\r\n                        <form class=\"form-horizontal\" #f=\"ngForm\" *ngIf=\"trip\" novalidate\r\n                              (ngSubmit)=\"addOrUpdateTrip(f.value, f.valid)\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\"trip-label\">Trip name</h4>\r\n                                <div class=\"trip-input\">\r\n                                    <input [disabled]=\"flag\" type=\"text\" style=\"width: 70%\" minlength=\"2\" maxlength=\"20\"\r\n                                           required class=\"form-control\" name=\"name\"\r\n                                           placeholder=\"Trip name\" [(ngModel)]=\"trip.name\" #name=\"ngModel\">\r\n                                </div>\r\n                                <small\r\n                                        [hidden]=\"name.valid || (name.pristine && !f.submitted)  || name.untouched\">\r\n                                    Name trip is required (minimum 2 characters).\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" trip-label\">Start date</h4>\r\n                                <div class=\"trip-input\">\r\n                                    <input [disabled]=\"flag\" type=\"date\" style=\"width: 70%\" required\r\n                                           class=\"form-control\" name=\"startDate\" [(ngModel)]=\"trip.startDate\"\r\n                                           #startDate=\"ngModel\">\r\n\r\n\r\n                                </div><!-- /input-group -->\r\n                                <small\r\n                                        [hidden]=\"startDate.valid || (startDate.pristine && !f.submitted)\">\r\n                                    Date trip is required.\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" trip-label\">End date</h4>\r\n                                <div class=\"trip-input\">\r\n                                    <input [disabled]=\"flag\" type=\"date\" style=\"width: 70%\" class=\"form-control\"\r\n                                           name=\"endDate\" [(ngModel)]=\"trip.endDate\" #endDate=\"ngModel\">\r\n                                </div><!-- /input-group -->\r\n                                <small\r\n                                        [hidden]=\"endDate.valid || (endDate.pristine && !f.submitted)\">\r\n                                    Date trip is required.\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" trip-label\">Info</h4>\r\n                                <div class=\"trip-input\">\r\n                    <textarea [disabled]=\"flag\" class=\"form-control\" rows=\"7\" maxlength=\"150\" placeholder=\"Info\"\r\n                              style=\"width: 400px; resize: none\" name=\"info\" [(ngModel)]=\"trip.info\" #info=\"ngModel\">\r\n                    </textarea>\r\n                                </div><!-- /input-group -->\r\n                                <small\r\n                                        [hidden]=\"info.valid || (info.pristine && !f.submitted)\">\r\n                                    Date trip is required.\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"input-group info\">\r\n                                <button [disabled]=\"flag\" type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"visible2\">\r\n                <div *ngIf=\"selectedDay\">\r\n                    <div>\r\n                        <button [hidden]=\"flag\" class=\"btn btn-primary pull-right\" (click)=\"staticModal.show()\">\r\n                            New event\r\n                            <span class=\"caret\"></span>\r\n                        </button>\r\n                        <h3 style=\"text-align: center\">Day {{selectedDay.id}} : {{selectedDay.name | date\r\n                            :'fullDate'}}</h3>\r\n                    </div>\r\n                    <div class=\"activities\">\r\n                        <div class=\"panel-group\" style=\"margin-bottom: 10px\" id=\"accordion\"\r\n                             *ngFor=\"let action of selectedDay.action; let i = index\">\r\n                            <div *ngIf=\"isActivity(action)\" class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\" style=\"min-height: 55px\">\r\n\r\n                                    <div class=\"col-md-8\" style=\"padding-top: 10px\">\r\n                                        <h4 class=\"panel-title\">\r\n                                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{i+1}}\">\r\n                                                Start time: {{action?.startTime | date :'HH:mm'}}\r\n                                                Name: {{action?.name}}\r\n                                            </a>\r\n\r\n                                        </h4>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\" style=\"text-align: right\">\r\n                                        <i *ngIf=\"action.activityType.name == 'lodging'\" class=\"fa fa-bed fa-lg\"\r\n                                           aria-hidden=\"true\"></i>\r\n                                        <i *ngIf=\"action.activityType.name == 'sight'\"\r\n                                           class=\"fa fa-map-marker fa-lg\"\r\n                                           aria-hidden=\"true\"></i>\r\n                                        <button [hidden]=\"flag\" type=\"button\" class=\"btn btn-primary btn-action\" (click)=\"deleteActivity(action?.id)\">\r\n                                            <i class=\"fa  fa-times fa-lg \" aria-hidden=\"true\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div id=\"{{i+1}}\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" #someForm=\"ngForm\"\r\n                                              (ngSubmit)=\"updateActivity(someForm,action?.id, action?.activityType.id)\"\r\n                                        >\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Name: </h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.name\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\" id=\"name\" name=\"name\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Start date:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\"\r\n                                                           [ngModel]=\"action?.startTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"datetime-local\" id=\"startTime\" name=\"startTime\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>End date:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\"\r\n                                                           [ngModel]=\"action?.endTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"datetime-local\" id=\"endTime\" name=\"endTime\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Address:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.address\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\" id=\"address\" name=\"address\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Price:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.price\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\" id=\"price\"\r\n                                                           name=\"price\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Description:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.description\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\"\r\n                                                           id=\"description\"\r\n                                                           name=\"description\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n\r\n                                            <button [hidden]=\"flag\" type=\"submit\" class=\"btn btn-primary\">Save\r\n                                                changes\r\n                                            </button>\r\n\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div *ngIf=\"isMovement(action)\" class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\" style=\"min-height: 55px\">\r\n                                    <div class=\"col-md-8\" style=\"padding-top: 10px\">\r\n                                        <h4 class=\"panel-title\">\r\n                                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{i+1}}\">\r\n                                                Start time: {{action?.startTime | date :'HH:mm' }}\r\n                                                Start address: {{action?.startAddress}}\r\n                                            </a>\r\n\r\n\r\n                                        </h4>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\" style=\"text-align: right\">\r\n                                        <div>\r\n                                            <i *ngIf=\"action.transport.name == 'car'\" class=\"fa fa-car fa-lg\"\r\n                                               aria-hidden=\"true\"></i>\r\n                                            <i *ngIf=\"action.transport.name == 'plane'\" class=\"fa fa-plane fa-lg\"\r\n                                               aria-hidden=\"true\"></i>\r\n                                            <i *ngIf=\"action.transport.name == 'rail'\" class=\"fa fa-train fa-lg\"\r\n                                               aria-hidden=\"true\"></i>\r\n                                            <i *ngIf=\"action.transport.name == 'bus'\" class=\"fa fa-bus fa-lg\"\r\n                                               aria-hidden=\"true\"></i>\r\n                                            <button [hidden]=\"flag\" type=\"button\"\r\n                                                    class=\"btn btn-primary btn-action\" (click)=\"deleteMovements(action?.id)\">\r\n                                                <i class=\"fa  fa-times fa-lg\" aria-hidden=\"true\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div id=\"{{i+1}}\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" #movementForm=\"ngForm\"\r\n                                              (ngSubmit)=\"updateMovement(movementForm, action?.id, action?.transport.id)\"\r\n                                        >\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Start date:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\"\r\n                                                           [ngModel]=\"action?.startTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"datetime-local\" id=\"startTime\" name=\"startTime\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>End date:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\"\r\n                                                           [ngModel]=\"action?.endTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"datetime-local\" id=\"endTime\" name=\"endTime\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Start address:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.startAddress\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\" id=\"startAddress\" name=\"startAddress\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Destination address:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.destinationAddress\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\" id=\"destinationAddress\"\r\n                                                           name=\"destinationAddress\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Price:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.price\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\" id=\"price\"\r\n                                                           name=\"price\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Distance:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [disabled]=\"flag\" [ngModel]=\"action?.distance\"\r\n                                                           class=\"form-control\"\r\n                                                           type=\"text\" id=\"distance\"\r\n                                                           name=\"distance\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-md-3\">\r\n                                                    <h4>Description:</h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <input [ngModel]=\"action?.description\" class=\"form-control\"\r\n                                                           type=\"text\"\r\n                                                           id=\"description\"\r\n                                                           name=\"description\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-xs-12\">\r\n            <button class=\"btn btn-primary\" (click)=\"showUsersDialog = !showUsersDialog\" data-toggle=\"modal\">\r\n                Participants of trip\r\n            </button>\r\n            <app-chat></app-chat>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <app-dialog [(visible)]=\"showUsersDialog\">\r\n        <div class=\"modal-content\">\r\n            <app-participants></app-participants>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"showUsersDialog = !showUsersDialog\">Close\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </app-dialog>\r\n\r\n    <div class=\"newEvent\">\r\n        <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: false}\" tabindex=\"-1\"\r\n             role=\"dialog\"\r\n             aria-labelledby=\"mySmallModalLabl\" aria-hidden=\"true\">\r\n\r\n            <div class=\"model-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"btn-group-vertical\">\r\n                        <button class=\"btn\" (click)=\"showDialogWin = !showDialogWin; staticModal.hide()\"\r\n                                routerLink=\"/trip-planning/{{tripId}}/transport/flight\"\r\n                                data-toggle=\"modal\">\r\n                            Transport\r\n                        </button>\r\n                        <button class=\"btn\" (click)=\"showDialogWin = !showDialogWin; staticModal.hide()\"\r\n                                routerLink=\"/trip-planning/{{tripId}}/lodging\" data-toggle=\"modal\">\r\n                            Lodging\r\n                        </button>\r\n                        <button class=\"btn\" (click)=\"showSightsDialog = !showSightsDialog; staticModal.hide()\"\r\n                                routerLink=\"/trip-planning/{{tripId}}/sights\" data-toggle=\"modal\">\r\n                            Sights\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--Dialog-->\r\n\r\n    <app-dialog [(visible)]=\"showDialogWin\">\r\n        <div class=\"modal-content\">\r\n            <router-outlet></router-outlet>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"showDialogWin = !showDialogWin; backClick()\">\r\n                    Close\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"showDialogWin = !showDialogWin; backClick()\">\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </app-dialog>\r\n\r\n    <!--SightsDialog-->\r\n    <app-dialog [(visible)]=\"showSightsDialog\">\r\n        <div class=\"modal-content\" style=\"width: 190%;height: 550px; max-height: 650px;margin-left: -45%;\">\r\n            <app-sights></app-sights>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"showSightsDialog = !showSightsDialog; backClick()\">Close\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"showSightsDialog = !showSightsDialog; backClick()\">Submit\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </app-dialog>\r\n</div>\r\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"planning col-md-3\">\r\n      <div class=\"sidebar-img\">\r\n        <label class=\"trip-avatar trip-avatar\">\r\n          <img src=\"{{pathToPhoto}}\" class=\"img-circle image\">\r\n          <span>Click here to upload</span>\r\n        </label>\r\n      </div>\r\n\r\n      <div>\r\n        <button (click)=\"setVisible()\" style=\"height: 40px;\" class=\"btn btn-primary button-menu\">Trip info\r\n          <i class=\"fa fa-caret-right\" style=\"float: right;padding-top: 4px;\"></i></button>\r\n        <div class=\"sidebar-planning\">\r\n          <ul class=\"nav nav-pills nav-stacked\">\r\n            <div *ngFor=\"let day of days;\">\r\n              <button [class.selected]=\"day === selectedDay\" (click)=\"onSelect(day)\"\r\n                      (click)=\"setVisible2()\"\r\n                      class=\"btn btn-default button-menu\" [disabled]=\"flagOne\">\r\n                {{day.name | date:\"dd.MM.yyyy\"}}\r\n              </button>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div style=\"padding-top: 2px; padding-left: 6px\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"planning-info col-md-6 col-xs-9\">\r\n\r\n      <div *ngIf=\"visible\">\r\n        <div class=\"container-fluid\" style=\"margin-top: 25px\">\r\n          <div>\r\n            <form class=\"form-horizontal\" #f=\"ngForm\" *ngIf=\"trip\" novalidate>\r\n              <div class=\"form-group\">\r\n                <h4 class=\"trip-label\">Trip name</h4>\r\n                <div class=\"trip-input\">\r\n                  <input [disabled]=\"flag\" type=\"text\" style=\"width: 70%\" minlength=\"2\" maxlength=\"20\"\r\n                         required class=\"form-control\" name=\"name\"\r\n                         placeholder=\"Trip name\" [(ngModel)]=\"trip.name\" #name=\"ngModel\">\r\n                </div>\r\n                <small\r\n                        [hidden]=\"name.valid || (name.pristine && !f.submitted)  || name.untouched\">\r\n                  Name trip is required (minimum 2 characters).\r\n                </small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <h4 class=\" trip-label\">Start date</h4>\r\n                <div class=\"trip-input\">\r\n                  <input [disabled]=\"flag\" type=\"date\" style=\"width: 70%\" required\r\n                         class=\"form-control\" name=\"startDate\" [(ngModel)]=\"trip.startDate\"\r\n                         #startDate=\"ngModel\">\r\n\r\n\r\n                </div><!-- /input-group -->\r\n                <small\r\n                        [hidden]=\"startDate.valid || (startDate.pristine && !f.submitted)\">\r\n                  Date trip is required.\r\n                </small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <h4 class=\" trip-label\">End date</h4>\r\n                <div class=\"trip-input\">\r\n                  <input [disabled]=\"flag\" type=\"date\" style=\"width: 70%\" class=\"form-control\"\r\n                         name=\"endDate\" [(ngModel)]=\"trip.endDate\" #endDate=\"ngModel\">\r\n                </div><!-- /input-group -->\r\n                <small\r\n                        [hidden]=\"endDate.valid || (endDate.pristine && !f.submitted)\">\r\n                  Date trip is required.\r\n                </small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <h4 class=\" trip-label\">Info</h4>\r\n                <div class=\"trip-input\">\r\n                    <textarea [disabled]=\"flag\" class=\"form-control\" rows=\"7\" maxlength=\"150\" placeholder=\"Info\"\r\n                              style=\"width: 400px; resize: none\" name=\"info\" [(ngModel)]=\"trip.info\" #info=\"ngModel\">\r\n                    </textarea>\r\n                </div><!-- /input-group -->\r\n                <small\r\n                        [hidden]=\"info.valid || (info.pristine && !f.submitted)\">\r\n                  Date trip is required.\r\n                </small>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"visible2\">\r\n        <div *ngIf=\"selectedDay\">\r\n          <div>\r\n            <h3 style=\"text-align: center\">Day {{selectedDay.id}} : {{selectedDay.name | date\r\n              :'fullDate'}}</h3>\r\n          </div>\r\n          <div class=\"activities\">\r\n            <div class=\"panel-group\" style=\"margin-bottom: 10px\" id=\"accordion\"\r\n                 *ngFor=\"let action of selectedDay.action; let i = index\">\r\n              <div *ngIf=\"isActivity(action)\" class=\"panel panel-default\">\r\n                <div class=\"panel-heading\" style=\"min-height: 55px\">\r\n                  <div class=\"col-md-8\" style=\"padding-top: 10px\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{i+1}}\">\r\n                        Start time: {{action?.startTime | date :'HH:mm'}}\r\n                        Name: {{action?.name}}\r\n                      </a>\r\n\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"col-md-4\" style=\"text-align: right\">\r\n                    <i *ngIf=\"action.activityType.name == 'lodging'\" class=\"fa fa-bed fa-lg\"\r\n                       aria-hidden=\"true\"></i>\r\n                    <i *ngIf=\"action.activityType.name == 'sight'\"\r\n                       class=\"fa fa-map-marker fa-lg\"\r\n                       aria-hidden=\"true\"></i>\r\n                    <button [hidden]=\"flag\" type=\"button\" class=\"btn btn-primary btn-action\">\r\n                      <i class=\"fa  fa-times fa-lg \" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"{{i+1}}\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <form class=\"form-horizontal\" #someForm=\"ngForm\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Name: </h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.name\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\" id=\"name\" name=\"name\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Start date:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\"\r\n                                 [ngModel]=\"action?.startTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                 class=\"form-control\"\r\n                                 type=\"datetime-local\" id=\"startTime\" name=\"startTime\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>End date:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\"\r\n                                 [ngModel]=\"action?.endTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                 class=\"form-control\"\r\n                                 type=\"datetime-local\" id=\"endTime\" name=\"endTime\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Address:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.address\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\" id=\"address\" name=\"address\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Price:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.price\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\" id=\"price\"\r\n                                 name=\"price\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Description:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.description\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\"\r\n                                 id=\"description\"\r\n                                 name=\"description\">\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div *ngIf=\"isMovement(action)\" class=\"panel panel-default\">\r\n                <div class=\"panel-heading\" style=\"min-height: 55px\">\r\n                  <div class=\"col-md-8\" style=\"padding-top: 10px\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{i+1}}\">\r\n                        Start time: {{action?.startTime | date :'HH:mm' }}\r\n                        Start address: {{action?.startAddress}}\r\n                      </a>\r\n\r\n\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"col-md-4\" style=\"text-align: right\">\r\n                    <div>\r\n                      <i *ngIf=\"action.transport.name == 'car'\" class=\"fa fa-car fa-lg\"\r\n                         aria-hidden=\"true\"></i>\r\n                      <i *ngIf=\"action.transport.name == 'plane'\" class=\"fa fa-plane fa-lg\"\r\n                         aria-hidden=\"true\"></i>\r\n                      <i *ngIf=\"action.transport.name == 'rail'\" class=\"fa fa-train fa-lg\"\r\n                         aria-hidden=\"true\"></i>\r\n                      <i *ngIf=\"action.transport.name == 'bus'\" class=\"fa fa-bus fa-lg\"\r\n                         aria-hidden=\"true\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div id=\"{{i+1}}\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <form class=\"form-horizontal\" #movementForm=\"ngForm\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Start date:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\"\r\n                                 [ngModel]=\"action?.startTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                 class=\"form-control\"\r\n                                 type=\"datetime-local\" id=\"startTime\" name=\"startTime\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>End date:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\"\r\n                                 [ngModel]=\"action?.endTime| date :'dd.MM.yyyy HH:mm'\"\r\n                                 class=\"form-control\"\r\n                                 type=\"datetime-local\" id=\"endTime\" name=\"endTime\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Start address:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.startAddress\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\" id=\"startAddress\" name=\"startAddress\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Destination address:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.destinationAddress\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\" id=\"destinationAddress\"\r\n                                 name=\"destinationAddress\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Price:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.price\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\" id=\"price\"\r\n                                 name=\"price\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Distance:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [disabled]=\"flag\" [ngModel]=\"action?.distance\"\r\n                                 class=\"form-control\"\r\n                                 type=\"text\" id=\"distance\"\r\n                                 name=\"distance\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-3\">\r\n                          <h4>Description:</h4>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                          <input [ngModel]=\"action?.description\" class=\"form-control\"\r\n                                 type=\"text\"\r\n                                 id=\"description\"\r\n                                 name=\"description\">\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"profile-menu col-md-3\">\r\n            <div class=\"sidebar-img\">\r\n                <label class=\"user-avatar\">\r\n                    <img src=\"assets/img/trips/2.jpg\" class=\"img-circle image\">\r\n\r\n                </label>\r\n                <h3 class=\"text-center\" *ngIf=\"user\">{{userAccount.lastName}} {{userAccount.firstName}}</h3>\r\n            </div>\r\n            <div class=\"sidebar-profile\">\r\n                <ul class=\"nav nav-pills nav-stacked\">\r\n                    <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">Account</a></li>\r\n                    <li><a href=\"#trips\" data-toggle=\"tab\">Trips</a></li>\r\n                    <li><a href=\"#albums\" data-toggle=\"tab\">Albums</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"profile-info col-md-9\">\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"profile\">\r\n                    <div class=\"container-fluid\">\r\n                        <form class=\"form-horizontal\" *ngIf=\"userAccount\">\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Last name</h4>\r\n                                <div class=\"profile-input\">\r\n                                    <input type=\"text\" disabled class=\"form-control\" name=\"lastName\"\r\n                                           [(ngModel)]=\"userAccount.lastName\">\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">First name</h4>\r\n                                <div class=\"profile-input\">\r\n                                    <input type=\"text\" disabled class=\"form-control\" name=\"firstName\"\r\n                                           [(ngModel)]=\"userAccount.firstName\">\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Day of birth</h4>\r\n                                <div class=\"profile-input\">\r\n                                    <input type=\"text\" disabled class=\"form-control\" name=\"birthday\"\r\n                                           [(ngModel)]=\"userAccount.birthday\">\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Gender</h4>\r\n                                <div class=\"profile-input\">\r\n                                    <input type=\"text\" disabled class=\"form-control\" name=\"Sex\"\r\n                                           [(ngModel)]=\"userAccount.gender.gender\">\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Country</h4>\r\n                                <div class=\"profile-input\">\r\n                                    <input type=\"text\" disabled class=\"form-control\" name=\"country\"\r\n                                           [(ngModel)]=\"userAccount.city.state.country.name\">\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">State</h4>\r\n                                <div class=\"profile-input\">\r\n                                    <input type=\"text\" disabled class=\"form-control\" name=\"state\"\r\n                                           [(ngModel)]=\"userAccount.city.state.name\">\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">City</h4>\r\n                                <div class=\"profile-input\">\r\n                                    <input type=\"text\" disabled class=\"form-control\" name=\"city\"\r\n                                           [(ngModel)]=\"userAccount.city.name\">\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <h4 class=\" profile-label\">Info</h4>\r\n                                <div class=\"profile-input\">\r\n                        <textarea disabled class=\"form-control\" rows=\"7\" maxlength=\"150\"\r\n                                  style=\"width: 400px; resize: none\" name=\"info\" [(ngModel)]=\"userAccount.info\">\r\n                            </textarea>\r\n                                </div><!-- /input-group -->\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"trips\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"flex\">\r\n                                <div class=\"flex-itm\" *ngFor=\"let trip of (trips | slice:trips.length - trips.length)\">\r\n                                    <div class=\"panel trip-panel\">\r\n                                        <div class=\"trip-pic\">\r\n                                            <div class=\"trippic-wrapper\">\r\n                                                <img class=\"img-responsive\" src=\"{{trip?.img}}\" alt=\"\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <h3><a href=\"#\">{{trip?.name}}</a></h3>\r\n                                        <h4>{{trip?.startDate}} - {{trip?.endDate}}</h4>\r\n                                        <p>Status: {{trip?.active}}</p>\r\n                                        <p>{{trip?.info}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"albums\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row \">\r\n                            <div class=\"flex\">\r\n                                <div class=\"flex-itm\"\r\n                                     *ngFor=\"let album of (albums | slice:albums.length - albums.length)\">\r\n                                    <div class=\"panel trip-panel\">\r\n                                        <div class=\"trip-pic\">\r\n                                            <div class=\"trippic-wrapper\">\r\n                                                <img class=\"img-responsive\" src=\"{{album?.img}}\" alt=\"\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <h3><a href=\"#\">{{album?.name}}</a></h3>\r\n                                        <h4>{{album?.date_of_creation}}</h4>\r\n                                        <p>{{album?.description}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 926:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
/**
 * Created by Сергей on 04.05.2017.
 */
var Activities = (function () {
    function Activities(id, travel, name, address, description, price, ticket, coordinates, startTime, endTime, activityType) {
        this.id = id;
        this.travel = travel;
        this.name = name;
        this.address = address;
        this.description = description;
        this.price = price;
        this.ticket = ticket;
        this.coordinates = coordinates;
        this.startTime = startTime;
        this.endTime = endTime;
        this.activityType = activityType;
    }
    return Activities;
}());
//# sourceMappingURL=D:/projectunc/src/activities.interface.js.map

/***/ })

},[928]);
//# sourceMappingURL=main.bundle.map