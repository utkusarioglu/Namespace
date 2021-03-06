"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c_namespace_1 = require("./c_namespace");
class M_Namespace {
    get_GlobalNamespace() {
        if (!this._global_namespace) {
            throw new Error(c_namespace_1.C_Namespace.E_CalledBeforeDeclaration);
        }
        return this._global_namespace;
    }
    get_GlobalNamespaceStack() {
        const namespace = this.get_GlobalNamespace();
        return this.produce_Stack(namespace);
    }
    set_GlobalNamespace(global_namespace) {
        if (this._global_namespace !== undefined) {
            throw new Error(c_namespace_1.C_Namespace.E_AlreadyDefined);
        }
        this.check_NamespaceInput(global_namespace);
        this._global_namespace = global_namespace;
        return this;
    }
    get_LocalNamespace() {
        if (!this._local_namespace) {
            throw new Error(c_namespace_1.C_Namespace.E_CalledBeforeDeclaration);
        }
        return this._local_namespace;
    }
    get_LocalNamespaceStack() {
        const namespace = this.get_LocalNamespace();
        return this.produce_Stack(namespace);
    }
    set_LocalNamespace(local_namespace) {
        if (this._local_namespace) {
            throw new Error(c_namespace_1.C_Namespace.E_AlreadyDefined);
        }
        this.check_NamespaceInput(local_namespace);
        this._local_namespace = local_namespace;
    }
    has_LocalNamespace() {
        return this._local_namespace !== undefined
            && this._local_namespace !== null;
    }
    check_NamespaceInput(namespace) {
        if (namespace === undefined || namespace.length === 0) {
            throw new Error(c_namespace_1.C_Namespace.E_NoEmpty);
        }
    }
    produce_Stack(namespace) {
        return namespace.split(c_namespace_1.C_Namespace.NamespaceSeparator);
    }
}
exports.M_Namespace = M_Namespace;
//# sourceMappingURL=m_namespace.js.map