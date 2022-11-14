import { AmountPattern } from "./amount.pattern.types";
import { ModuleBase } from "./module.default.types";

export interface SkuModuleOptions extends ModuleBase {
  categoryId: number;
  forcePromiseWarrantyJson: string;
  hasSizeInfo: boolean;
  hasSkuProperty: boolean;
  i18nMap: I18nMap;
  productSKUPropertyList: ProductSkupropertyList[];
  selectedSkuAttr: string;
  skuPriceList: SkuPriceList[];
  warrantyDetailJson: string;
}

interface I18nMap {
  SIZING_INFO: string;
  BUST_PROMPT: string;
  GLASSES_DIALOG_TITLE: string;
  NV_ADD: string;
  SPH: string;
  PUPILLARY_PROMPT: string;
  SIZE_HOVER_TITLE: string;
  FLOOR_CONTENT: string;
  CUSTOM_SIZE_CONTENT: string;
  NV_ADD_PROMPT: string;
  PLEASE_ENTER: string;
  WAIST_TITLE: string;
  WAIST_CONTENT: string;
  CYL: string;
  SERVICE: string;
  BUST_CONTENT: string;
  SIZE_INFO: string;
  SIZE_INFO_DESC: string;
  ITEM_CONDITION_TIP: string;
  BTN_CANCEL: string;
  HOW_TO_MEASURE: string;
  SIZE_INFO_TIP: string;
  FLOOR_PROMPT: string;
  FLOOR_TITLE: string;
  SIZE_INFO_COMPARE_TIP: string;
  UNIT_PROMPT: string;
  SELECT: string;
  HIPS_TITLE: string;
  HEIGHT_PROMPT: string;
  WAIST_PROMPT: string;
  BTN_SAVE: string;
  TITLE_OPTIONAL: string;
  SIZE_DIALOG_TITLE: string;
  GLASSES_TIP: string;
  SIZE_CHART: string;
  HIPS_PROMPT: string;
  SPH_PROMPT: string;
  HIPS_CONTENT: string;
  BUST_TITLE: string;
  AXIS: string;
}

export interface ProductSkupropertyList {
  isShowTypeColor: boolean;
  order: number;
  showType: string;
  showTypeColor: boolean;
  skuPropertyId: number;
  skuPropertyName: string;
  skuPropertyValues: SkuPropertyValue[];
}

export interface SkuPropertyValue {
  propertyValueDefinitionName: string;
  propertyValueDisplayName: string;
  propertyValueId: number;
  propertyValueIdLong: number;
  propertyValueName: string;
  skuPropertyTips: string;
  skuPropertyValueShowOrder: number;
  skuPropertyValueTips: string;
}

export interface SkuPriceList {
  freightExt: string;
  skuAttr: string;
  skuId: number;
  skuIdStr: string;
  skuPropIds: string;
  skuVal: SkuVal;
}

export interface SkuVal {
  availQuantity: number;
  discount: string;
  inventory: number;
  isActivity: boolean;
  optionalWarrantyPrice: any[];
  skuActivityAmount: AmountPattern;
  skuAmount: AmountPattern;
  skuCalPrice: string;
}
