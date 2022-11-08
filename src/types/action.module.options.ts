import { ModuleBase } from "./module.default.types"

export interface Root extends ModuleBase{
    addToCartUrl: string
    aeOrderFrom: string
    allowVisitorAddCart: boolean
    cartDetailUrl: string
    categoryId: number
    comingSoon: boolean
    companyId: number
    confirmOrderUrl: string
    freightExt: string
    i18nMap: I18nMap
    invalidBuyNow: boolean
    itemStatus: number
    itemWished: boolean
    itemWishedCount: number
    localSeller: boolean
    preSale: boolean
    productId: number
    rootCategoryId: number
    showCoinAnim: boolean
    showShareHeader: boolean
    storeNum: number
    switchInfo: SwitchInfo
    totalAvailQuantity: number
  }
  
 interface I18nMap {
    WISH_MAX_NOTICE: string
    BUYER_ABLE: string
    WISHLIST_SAVE_BUTTON: string
    WISH_MOVE_TO_ANOTHER_LIST_TIPS: string
    ADD_X_MORE: string
    COMING_SOON: string
    SC_ADD_SUCC: string
    WISHLIST_PUBLIC_NOTICE: string
    WISH_DETAULT_LIST: string
    WISH_CREATE_LIST: string
    WL_ERROR: string
    WISH_NAME_ALREADY_USE: string
    WISH_REVISELIST: string
    SC_ADD_FAILED: string
    SC_HAVE: string
    ADD_TO_CART: string
    WISH_CANCEL_WISHLIST: string
    BUY_NOW: string
    WISH_SYSTEM_ERROR: string
    SC_ADD_MAX: string
    SC_VIEW: string
    WISH_YOUMAYLIKE: string
    WISH_VIEW_WISH_LIST: string
    SC_RECOMMEND: string
    CONTINUE: string
    ADDED_TO: string
    ORDER_NOW: string
    SELECT_TIP: string
    NO_LONGER_AVAILABLE: string
    PREVIEW_PERIOD: string
    WISH_MAX_GROUP: string
    WISHLIST_PUBLIC_TIP: string
  }
  interface SwitchInfo {
    skuUnavailableRevision: boolean
  }
  