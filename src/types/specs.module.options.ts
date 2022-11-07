import { ModuleBase } from "./module.default.types";

interface Prop {
    attrName: string;
    attrValue: string;
}

export interface SpecsModule extends ModuleBase{
    props: Prop;
    i18nMap: {}
}
