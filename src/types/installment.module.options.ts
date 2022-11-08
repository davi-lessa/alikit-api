import { ModuleBase } from "./module.default.types"
import { AmountPattern } from "./amount.pattern.types";

export interface InstallmentModuleOptions extends ModuleBase {
    defaultInstallmentForm: DefaultInstallmentForm
    i18nMap: I18nMap
    icon: string
    installmentFormList: InstallmentFormList[]
    originalAmount: AmountPattern
    priceTagText: string
    rangePrice: boolean
  }
  
  interface DefaultInstallmentForm {
    installmentTerm: number
    termAmount: AmountPattern
    termTotalAmount: AmountPattern
  }

  interface I18nMap {
    interestTagText: string
    costEveryMonthText: string
    freeTagText: string
    planText: string
    checkDetailText: string
    monthText: string
    interestText: string
  }
  
  interface InstallmentFormList extends DefaultInstallmentForm {
    hasInterestFee?: boolean
    termTotalInterestFee?: AmountPattern
  }