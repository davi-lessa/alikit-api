import { ModuleBase } from "./module.default.types"
import { AmountPattern } from "./amount.pattern.types";

export interface PriceModuleOptions extends ModuleBase {
    activity: boolean
    discount: number
    discountPromotion: boolean
    discountRatioTips: string
    discountTips: string
    extraTags: ExtraTags
    formatedActivityPrice: string
    formatedPrice: string
    hiddenBigSalePrice: boolean
    i18nMap: I18nMap
    installment: boolean
    lot: boolean
    maxActivityAmount: AmountPattern
    maxAmount: AmountPattern
    minActivityAmount: AmountPattern
    minAmount: AmountPattern
    multiUnitName: string
    numberPerLot: number
    oddUnitName: string
    preSale: boolean
    priceRuleInfo: PriceRuleInfo
    promotionSellingPointTags: PromotionSellingPointTag[]
    regularPriceActivity: boolean
    showActivityMessage: boolean
    vatDesc: string
  }
  
  interface ExtraTags {}
  
  interface I18nMap {
    LOT: string
    INSTALLMENT: string
    DEPOSIT: string
    PRE_ORDER_PRICE: string
  }
  
  interface PriceRuleInfo {}
  
  interface PromotionSellingPointTag {
    elementList: ElementList[]
  }
  
  interface ElementList {
    elementType: string
    iconHeight: number
    iconWidth: number
    textColor: string
    textContent: string
  }
  