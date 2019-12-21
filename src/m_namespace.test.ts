
/* ////////////////////////////////////////////////////////////////////////////
 *
 *	IMPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

import { M_Namespace } from "./m_namespace";





/* ////////////////////////////////////////////////////////////////////////////
 *
 *	DOMESTICS
 *
 * ///////////////////////////////////////////////////////////////////////// */

// Checks get & set for global namespace
test("set_get_GlobalNamespace", () => {

    const test_phrase: string = "App/Random"

    const class_constructor = class extends M_Namespace {
        constructor(test_namespace: string) {
            super();
            this.set_GlobalNamespace(test_namespace);
        }
    }

    const result = (new class_constructor(test_phrase)).get_GlobalNamespace();
    expect(result).toBe(test_phrase);

});


// Checks if has_localNamespace returns the correct value in all conditions
test("get_set_has_LocalNamespace", () => {

    const test_phrase: string = "App/Random"

    const no_local_class_constructor = class extends M_Namespace {
        constructor() {
            super();
            this.set_GlobalNamespace('global/not/important/in/this/test');
        }
    }

    const no_local_result = (new no_local_class_constructor()).has_LocalNamespace();
    expect(no_local_result).toBe(false);

    const class_constructor = class extends M_Namespace {
        constructor() {
            super();
            this.set_GlobalNamespace('global/not/important/in/this/test');
            this.set_LocalNamespace(test_phrase);
        }
    }

    const local_result = (new class_constructor()).has_LocalNamespace();
    expect(local_result).toBe(true);

});
