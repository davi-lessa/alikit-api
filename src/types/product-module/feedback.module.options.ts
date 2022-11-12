import { ModuleBase } from "./module.default.types"

export interface FeedbackModuleOptions extends ModuleBase {
    companyId: number
    feedbackServer: string
    i18nMap: {}
    productId: number
    sellerAdminSeq: number
    trialReviewNum: number
}