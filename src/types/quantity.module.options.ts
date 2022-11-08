import { ModuleBase } from "./module.default.types"

export interface QuantityModuleOptions extends ModuleBase {
    activity: boolean
    displayBulkInfo: boolean
    i18nMap: I18nMap
    lot: boolean
    multiUnitName: string
    oddUnitName: string
    purchaseLimitMaxTips: string
    purchaseLimitNumMax: number
    totalAvailQuantity: number
  }
  
interface I18nMap {
    LOT: string
    LOTS: string
    BUY_LIMIT: string
    QUANTITY: string
    OFF_OR_MORE: string
    ONLY_QUANTITY_LEFT: string
    ADDTIONAL: string
    QUANTITY_AVAILABLE: string
  }
  