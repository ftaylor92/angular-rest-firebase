(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ftaylor92/src/firebase/angular-rest-firebase/src/main.ts */"zUnb");


/***/ }),

/***/ "4Fcd":
/*!******************************************************!*\
  !*** ./src/app/task-dialog/task-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDialogComponent", function() { return TaskDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









const _c0 = function (a0) { return { task: a0, delete: true }; };
function TaskDialogComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](1, _c0, ctx_r0.data.task));
} }
const _c1 = function (a0) { return { task: a0 }; };
class TaskDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.backupTask = Object.assign({}, this.data.task);
    }
    cancel() {
        this.data.task.title = this.backupTask.title;
        this.data.task.description = this.backupTask.description;
        this.dialogRef.close(this.data);
    }
}
TaskDialogComponent.??fac = function TaskDialogComponent_Factory(t) { return new (t || TaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
TaskDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TaskDialogComponent, selectors: [["app-task-dialog"]], decls: 14, vars: 6, consts: [["matInput", "", "cdkFocusInitial", "", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "click"], ["mat-fab", "", "color", "primary", "aria-label", "Delete", 3, "mat-dialog-close", 4, "ngIf"], ["mat-fab", "", "color", "primary", "aria-label", "Delete", 3, "mat-dialog-close"]], template: function TaskDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function TaskDialogComponent_Template_input_ngModelChange_3_listener($event) { return ctx.data.task.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function TaskDialogComponent_Template_textarea_ngModelChange_7_listener($event) { return ctx.data.task.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TaskDialogComponent_Template_button_click_11_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, TaskDialogComponent_button_13_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.data.task.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.data.task.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](4, _c1, ctx.data.task));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.data.enableDelete);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0UiLCJmaWxlIjoidGFzay1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuIl19 */"] });


/***/ }),

/***/ "9xsS":
/*!*****************************************************!*\
  !*** ./src/app/book/add-book/add-book.component.ts ***!
  \*****************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/book.service */ "I9o5");





class AddBookComponent {
    constructor(formBuilder, router, bookService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.bookService = bookService;
    }
    ngOnInit() {
        this.addForm = this.formBuilder.group({
            id: [],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    onSubmit() {
        this.bookService.addBook(this.addForm.value)
            .subscribe(data => {
            this.router.navigate(['list-books']);
        });
    }
}
AddBookComponent.??fac = function AddBookComponent_Factory(t) { return new (t || AddBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"])); };
AddBookComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AddBookComponent, selectors: [["app-add-book"]], decls: 18, vars: 1, consts: [[1, "col-md-6", "user-container"], [1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "title"], ["type", "text", "formControlName", "title", "placeholder", "title", "name", "title", "id", "title", 1, "form-control"], ["for", "author"], ["type", "author", "formControlName", "author", "placeholder", "author", "name", "author", "id", "author", 1, "form-control"], [1, "btn", "btn-success"]], template: function AddBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "add-book works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function AddBookComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Author:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.addForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm9vay5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyACR3OxVnse4KftDoKrZkfO0P00-ligW0c',
        authDomain: 'kanban-fire-workshop.firebaseapp.com',
        databaseURL: 'https://kanban-fire-workshop.firebaseio.com',
        projectId: 'kanban-fire-workshop',
        storageBucket: 'kanban-fire-workshop.appspot.com',
        messagingSenderId: '513024923782',
        appId: '1:513024923782:web:ef27622969067c9e565907',
        measurementId: 'G-1GXZ633QPQ',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EBRB":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function TaskComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dblclick", function TaskComponent_mat_card_0_Template_mat_card_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.edit.emit(ctx_r1.task); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.task.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.task.description, " ");
} }
class TaskComponent {
    constructor() {
        this.task = null;
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
TaskComponent.??fac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(); };
TaskComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { task: "task" }, outputs: { edit: "edit" }, decls: 1, vars: 1, consts: [["class", "item", 3, "dblclick", 4, "ngIf"], [1, "item", 3, "dblclick"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, TaskComponent_mat_card_0_Template, 5, 2, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJ0YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "I9o5":
/*!*********************************!*\
  !*** ./src/app/book.service.ts ***!
  \*********************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
class BookService {
    constructor(http) {
        this.http = http;
        this.url = 'https://springboot-webservice-simplest-git-ftaylor92-dev.apps.sandbox.x8i5.p1.openshiftapps.com/books';
    }
    getBooks() {
        return this.http.get(this.url, { headers: headers });
    }
    addBook(book) {
        return this.http.post(this.url, book);
    }
    deleteBook(id) {
        return this.http.delete(this.url + '/' + id, { headers: headers, responseType: 'text' });
    }
}
BookService.??fac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BookService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: BookService, factory: BookService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-dialog/task-dialog.component */ "4Fcd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book.service */ "I9o5");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task/task.component */ "EBRB");















function AppComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Empty list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AppComponent_app_task_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "app-task", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("edit", function AppComponent_app_task_19_Template_app_task_edit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r11.editTask("todo", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const task_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("task", task_r10);
} }
function AppComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Empty list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AppComponent_app_task_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "app-task", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("edit", function AppComponent_app_task_29_Template_app_task_edit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r14.editTask("inProgress", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const task_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("task", task_r13);
} }
function AppComponent_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Empty list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AppComponent_app_task_39_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "app-task", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("edit", function AppComponent_app_task_39_Template_app_task_edit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r17.editTask("done", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const task_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("task", task_r16);
} }
function AppComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const book_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", book_r19.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", book_r19.author, " ");
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
const getObservable = (collection) => {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    collection.valueChanges({ idField: 'id' }).subscribe((val) => {
        subject.next(val);
    });
    return subject;
};
class AppComponent {
    constructor(router, dialog, store, bookService) {
        this.router = router;
        this.dialog = dialog;
        this.store = store;
        this.bookService = bookService;
        this.title = 'BookStore';
        this.books = [];
        this.todo = getObservable(this.store.collection('todo'));
        this.inProgress = getObservable(this.store.collection('inProgress'));
        this.done = getObservable(this.store.collection('done'));
    }
    getBooks() {
        this.bookService.getBooks().subscribe(data => {
            this.books = data;
        });
        //this.books.push(this.bookService.getBooks());
    }
    addBook(b) {
        this.bookService.addBook(b);
    }
    deleteBook(x) {
        this.bookService.deleteBook(x ? x : 4);
    }
    ngOnInit() {
        this.router.navigate(['add-book'])
            .then((e) => {
            if (e) {
                console.log("Navigation is successful!");
            }
            else {
                console.log("Navigation has failed!");
            }
        });
    }
    ;
    newTask() {
        const dialogRef = this.dialog.open(_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__["TaskDialogComponent"], {
            width: '270px',
            data: {
                task: {},
            },
        });
        dialogRef
            .afterClosed()
            .subscribe((result) => {
            if (!result) {
                return;
            }
            this.store.collection('todo').add(result.task);
        });
    }
    editTask(list, task) {
        const dialogRef = this.dialog.open(_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__["TaskDialogComponent"], {
            width: '270px',
            data: {
                task,
                enableDelete: true,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) {
                return;
            }
            if (result.delete) {
                this.store.collection(list).doc(task.id).delete();
            }
            else {
                this.store.collection(list).doc(task.id).update(task);
            }
        });
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            return;
        }
        if (!event.previousContainer.data || !event.container.data) {
            return;
        }
        const item = event.previousContainer.data[event.previousIndex];
        this.store.firestore.runTransaction(() => {
            const promise = Promise.all([
                this.store.collection(event.previousContainer.id).doc(item.id).delete(),
                this.store.collection(event.container.id).add(item),
            ]);
            return promise;
        });
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 63, vars: 40, consts: [["color", "primary"], [1, "content-wrapper"], ["mat-button", "", 3, "click"], [1, "container-wrapper"], [1, "container"], ["cdkDropList", "", "id", "todo", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "empty-label", 4, "ngIf"], ["cdkDrag", "", 3, "task", "edit", 4, "ngFor", "ngForOf"], ["cdkDropList", "", "id", "inProgress", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["inProgressList", "cdkDropList"], ["cdkDropList", "", "id", "done", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["doneList", "cdkDropList"], ["align", "center"], [1, "table", 2, "width", "80%"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "empty-label"], ["cdkDrag", "", 3, "task", "edit"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "local_fire_department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Kanban Fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.newTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, " Add Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Backlog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "mat-card", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("cdkDropListDropped", function AppComponent_Template_mat_card_cdkDropListDropped_14_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, AppComponent_p_17_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, AppComponent_app_task_19_Template, 1, 1, "app-task", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "In progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "mat-card", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("cdkDropListDropped", function AppComponent_Template_mat_card_cdkDropListDropped_24_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, AppComponent_p_27_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, AppComponent_app_task_29_Template, 1, 1, "app-task", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](33, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "mat-card", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("cdkDropListDropped", function AppComponent_Template_mat_card_cdkDropListDropped_34_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](37, AppComponent_p_37_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, AppComponent_app_task_39_Template, 1, 1, "app-task", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "Bookstore CRUD with Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](53, AppComponent_tr_53_Template, 5, 2, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_Template_button_click_56_listener() { return ctx.addBook({ "title": "avv", "author": "bgt", "id": 4 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](57, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_Template_button_click_58_listener() { return ctx.getBooks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, "Get Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_Template_button_click_60_listener() { return ctx.deleteBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](61, "Del Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](62, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](25);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](35);
        let tmp_2_0 = null;
        let tmp_6_0 = null;
        let tmp_10_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](16, 13, ctx.todo))("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](31, _c0, _r6, _r3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](18, 15, ctx.todo)) == null ? null : tmp_2_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](20, 17, ctx.todo));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](26, 19, ctx.inProgress))("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](34, _c0, _r0, _r6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](28, 21, ctx.inProgress)) == null ? null : tmp_6_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](30, 23, ctx.inProgress));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](36, 25, ctx.done))("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](37, _c0, _r0, _r3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](38, 27, ctx.done)) == null ? null : tmp_10_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](40, 29, ctx.done));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.books);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _task_task_component__WEBPACK_IMPORTED_MODULE_13__["TaskComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: auto;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 25px 25px 0;\n}\n\n.list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  border-radius: 4px;\n}\n\napp-new-task[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.empty-label[_ngcontent-%COMP%] {\n  font-size: 2em;\n  padding-top: 10px;\n  text-align: center;\n  opacity: 0.2;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbm1hdC10b29sYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxubWF0LXRvb2xiYXIgPiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFpbmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xufVxuXG4ubGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuYXBwLW5ldy10YXNrIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmVtcHR5LWxhYmVsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task.component */ "EBRB");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-dialog/task-dialog.component */ "4Fcd");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./book/add-book/add-book.component */ "9xsS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_18__["AddBookComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"], _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_10__["TaskDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book/add-book/add-book.component */ "9xsS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
//import { CommonModule } from '@angular/common';




const routes = [
    { path: 'list-books', redirectTo: '/', pathMatch: 'full' },
    { path: 'add-book', component: _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_1__["AddBookComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map