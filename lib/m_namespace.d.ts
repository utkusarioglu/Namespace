import { t_namespace } from "./t_namespace";
export declare type t_namespace = t_namespace;
export declare abstract class M_Namespace {
    private _global_namespace;
    private _local_namespace;
    get_GlobalNamespace(): t_namespace;
    get_GlobalNamespaceStack(): t_namespace[];
    protected set_GlobalNamespace(global_namespace: t_namespace): this;
    get_LocalNamespace(): t_namespace;
    get_LocalNamespaceStack(): t_namespace[];
    protected set_LocalNamespace(local_namespace: t_namespace): void;
    has_LocalNamespace(): boolean;
    private check_NamespaceInput;
    private produce_Stack;
}
