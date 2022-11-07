import { ModuleBase } from "./module.default.types";

export interface StoreModule extends ModuleBase {
    companyId: number
    countryCompleteName: string
    detailPageUrl: string
    esRetailOrConsignment: boolean
    feedbackMessageServer: string
    feedbackServer: string
    followed: boolean
    followingNumber: number
    hasStore: boolean
    hasStoreHeader: boolean
    hideCustomerService: boolean
    i18nMap: I18nMap
    openTime: string
    openedYear: number
    positiveNum: number
    positiveRate: string
    productId: number
    sellerAdminSeq: number
    sessionId: string
    siteType: string
    storeName: string
    storeNum: number
    storeURL: string
    topBrandDescURL: string
    topRatedSeller: boolean
  }
  
  interface I18nMap {
    COUSTOMER_SERVICE: string
    VISIT_STORE: string
    CONTACT_SELLER: string
    FOLLOWING_STATE: string
    UNFOLLOWING_STATE: string
    POSITIVE_FEEDBACK: string
    FOLLOWERS: string
    FOLLOWER: string
    TOP_SELLER: string
    STORE_CATEGORIES: string
    FOLLOW: string
    FOLLOWING: string
  }