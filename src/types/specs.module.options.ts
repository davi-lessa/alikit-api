import { ModuleBase } from "./module.default.types";

interface Prop {
    attrName: string;
    attrValue: string;
}

export interface SpecsModuleOptions extends ModuleBase{
    props: Prop;
    i18nMap: {}
}
