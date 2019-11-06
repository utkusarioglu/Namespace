"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var m_namespace_1 = require("./m_namespace");
test("set_get_GlobalNamespace", function () {
    var test_phrase = "App/Random";
    var class_constructor = (function (_super) {
        __extends(class_1, _super);
        function class_1(test_namespace) {
            var _this = _super.call(this) || this;
            _this.set_GlobalNamespace(test_namespace);
            return _this;
        }
        return class_1;
    }(m_namespace_1.M_Namespace));
    var result = (new class_constructor(test_phrase)).get_GlobalNamespace();
    expect(result).toBe(test_phrase);
});
test("get_set_has_LocalNamespace", function () {
    var test_phrase = "App/Random";
    var no_local_class_constructor = (function (_super) {
        __extends(no_local_class_constructor, _super);
        function no_local_class_constructor() {
            var _this = _super.call(this) || this;
            _this.set_GlobalNamespace('global/not/important/in/this/test');
            return _this;
        }
        return no_local_class_constructor;
    }(m_namespace_1.M_Namespace));
    var no_local_result = (new no_local_class_constructor()).has_LocalNamespace();
    expect(no_local_result).toBe(false);
    var class_constructor = (function (_super) {
        __extends(class_constructor, _super);
        function class_constructor() {
            var _this = _super.call(this) || this;
            _this.set_GlobalNamespace('global/not/important/in/this/test');
            _this.set_LocalNamespace(test_phrase);
            return _this;
        }
        return class_constructor;
    }(m_namespace_1.M_Namespace));
    var local_result = (new class_constructor()).has_LocalNamespace();
    expect(local_result).toBe(true);
});
//# sourceMappingURL=m_namespace.test.js.map