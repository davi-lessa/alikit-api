import { ModuleBase } from "./module.default.types"

export interface BuyerProtectionModuleOptions extends ModuleBase {
    buyerProtection: BuyerProtection
    i18nMap: I18nMap
    returnPolicyGuarantees: ReturnPolicyGuarantees
  }
  
   interface BuyerProtection {
    brief: string
    detailDescription: string
    id: number
    name: string
    redirectUrl: string
    type: number
  }
  
   interface I18nMap {
    PLAZA_BUYER_PROTECTION_TITLE: string
    PLAZA_BUYER_PROTECTION_TIP: string
    PLAZA_BUYER_PROTECTION_CONTENT: string
  }
  
   interface ReturnPolicyGuarantees {
    brief: string
    detailDescription: string
    id: number
    name: string
    redirectUrl: string
  }
  