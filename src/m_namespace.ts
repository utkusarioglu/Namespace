
/*
 *	DATATYPES
 */
import { t_namespace } from "./t_namespace";

/*
 *	DATATYPES
 */
import { C_Namespace } from "./c_namespace";

/**
 * Exposed types
 * */
export type t_namespace = t_namespace;

/**
 * Provides namespace functionality to classes
 *
 * @remarks
 * Service: Namespace
 * */
export abstract class M_Namespace {

    private _global_namespace!: string;
    private _local_namespace!: string;



/*
 * ======================================================= Boundary 1 =========
 *
 *	DECLARATION
 *
 * =============================================================================
 */

/* ---------------------------------------------------------- Use Case ---------
 *	HANDLE GLOBAL NAMESPACE
 */

    /**
     * Returns the namespace for the class
     *
     * @remarks
     * Class: M_Namespace
     * Service: Namespace
     * */
    public get_GlobalNamespace(): t_namespace {

        if (!this._global_namespace) {
            throw new Error(C_Namespace.E_CalledBeforeDeclaration)
        }

        return this._global_namespace;
    }

    /**
     * Returns steps of the global namespace
     * */
    public get_GlobalNamespaceStack(): t_namespace[] {
        const namespace = this.get_GlobalNamespace();
        return this.produce_Stack(namespace);
    }

    /**
     * Sets namespace for the class
     * 
     * @param global_namespace
     *
     * @remarks
     * Class: M_Namespace
     * Service: Namespace
     */
    protected set_GlobalNamespace(global_namespace: t_namespace): this {

        if (this._global_namespace !== undefined) {
            throw new Error(C_Namespace.E_AlreadyDefined);
        }

        this.check_NamespaceInput(global_namespace);

        this._global_namespace = global_namespace;

        return this;
    }


/* --------------------------------------------------------- Use Case ---------
 *	HANDLE LOCAL NAMESPACE
 */

    /**
     * Returns local namespace of the class
     *
     * @remarks
     * Class: M_Namespace
     * Service: Namespace
     * */
    public get_LocalNamespace(): t_namespace {

        if (!this._local_namespace) {
            throw new Error(C_Namespace.E_CalledBeforeDeclaration)
        }

        return this._local_namespace;
    }

    /**
     * Returns steps of the global namespace
     * */
    public get_LocalNamespaceStack(): t_namespace[] {
        const namespace = this.get_LocalNamespace();
        return this.produce_Stack(namespace);
    }

    /**
     * Sets local namespace for the class
     * 
     * @param local_namespace
     *
     * @remarks
     * Class: M_Namespace
     * Service: Namespace
     */
    protected set_LocalNamespace(local_namespace: t_namespace): void {

        if (this._local_namespace) {
            throw new Error(C_Namespace.E_AlreadyDefined);
        }

        this.check_NamespaceInput(local_namespace);

        this._local_namespace = local_namespace;
    }

    /**
     * Returns true if the class has a local namespace defined
     *
     * @remarks
     * Class: M_Namespace
     * Service: Namespace
     * */
    public has_LocalNamespace(): boolean {
        return this._local_namespace !== undefined
            && this._local_namespace !== null;
    }


/* --------------------------------------------------------- Use Case ---------
 *	CHECK LEGALITY
 */

    /**
     *  Throws error if the namespace parameter is undefined 
     *  or has length of zero
     *  
     * @param namespace
     */
    private check_NamespaceInput(namespace: t_namespace): void {
        if (namespace === undefined || namespace.length === 0) {
            throw new Error(C_Namespace.E_NoEmpty)
        }
    }


/* ---------------------------------------------------------------------------- Use Case ---------
 *	HANDLE STACKING
 */

    /**
     * Splits the namespace into its steps
     * 
     * @param namespace
     */
    private produce_Stack(namespace: t_namespace): Array<t_namespace> {
        return namespace.split(C_Namespace.NamespaceSeparator);
    }




}
