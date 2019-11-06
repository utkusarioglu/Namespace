"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c_namespace_1 = require("./c_namespace");
var M_Namespace = (function () {
    function M_Namespace() {
    }
    M_Namespace.prototype.get_GlobalNamespace = function () {
        if (!this._global_namespace) {
            throw new Error(c_namespace_1.C_Namespace.E_CalledBeforeDeclaration);
        }
        return this._global_namespace;
    };
    M_Namespace.prototype.get_GlobalNamespaceStack = function () {
        var namespace = this.get_GlobalNamespace();
        return this.produce_Stack(namespace);
    };
    M_Namespace.prototype.set_GlobalNamespace = function (global_namespace) {
        if (this._global_namespace !== undefined) {
            throw new Error(c_namespace_1.C_Namespace.E_AlreadyDefined);
        }
        this.check_NamespaceInput(global_namespace);
        this._global_namespace = global_namespace;
        return this;
    };
    M_Namespace.prototype.get_LocalNamespace = function () {
        if (!this._local_namespace) {
            throw new Error(c_namespace_1.C_Namespace.E_CalledBeforeDeclaration);
        }
        return this._local_namespace;
    };
    M_Namespace.prototype.get_LocalNamespaceStack = function () {
        var namespace = this.get_LocalNamespace();
        return this.produce_Stack(namespace);
    };
    M_Namespace.prototype.set_LocalNamespace = function (local_namespace) {
        if (this._local_namespace) {
            throw new Error(c_namespace_1.C_Namespace.E_AlreadyDefined);
        }
        this.check_NamespaceInput(local_namespace);
        this._local_namespace = local_namespace;
    };
    M_Namespace.prototype.has_LocalNamespace = function () {
        return this._local_namespace !== undefined
            && this._local_namespace !== null;
    };
    M_Namespace.prototype.check_NamespaceInput = function (namespace) {
        if (namespace === undefined || namespace.length === 0) {
            throw new Error(c_namespace_1.C_Namespace.E_NoEmpty);
        }
    };
    M_Namespace.prototype.produce_Stack = function (namespace) {
        return namespace.split(c_namespace_1.C_Namespace.NamespaceSeparator);
    };
    return M_Namespace;
}());
exports.M_Namespace = M_Namespace;
//# sourceMappingURL=m_namespace.js.map