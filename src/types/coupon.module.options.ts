import { ModuleBase } from "./module.default.types"

export interface CouponModuleOptions extends ModuleBase{
    i18nMap: I18nMap
    productId: number
    currencyCode: string
    webCouponInfo: WebCouponInfo
}
  interface I18nMap {
    GET_COUPONS: string
    SCP_ERR_HAVE: string
    OFF_ON: string
    ORDER_OVER: string
    code52Title: string
    GET_IT: string
    GET_NOW: string
    GET_MORE: string
    systemError: string
    OFF_PER: string
    STORE_COUPON: string
    SHOP_COUPONE_TIME_START_END: string
    NEW_USER_COUPON_ACQUIRE_FAIL_ALREADY_HAVE: string
    code50Title: string
    NEW_USER_COUPON_ACQUIRE_FAIL_NOT_AVAILABLE_NOW: string
    NEW_USER_COUPON_ACQUIRE_FAIL_GROUP_LIMIT: string
    code14Title: string
    NEW_USER_COUPON_ACQUIRE_FAIL_NOT_NEW_USER: string
    SHOP_PROMO_CODE_COPIED: string
    ADDED: string
    NEW_USER_COUPON_ACQUIRE_FAIL_SECURITY: string
    SHOP_PROMO_CODE_TITLE: string
    NEW_USER_COUPON_ACQUIRE_FAIL: string
    NEW_USER_COUPON_ACQUIRE_FAIL_LIMIT_DAY: string
    NEW_USER_COUPON_ACQUIRE_FAIL_REGISTER_COUNTRY_LIMIT: string
    SCP_ERR_NONE: string
    NEW_USER_COUPON_ACQUIRE_FAIL_GRANT_ERROR: string
    code17Title: string
    SHOP_COUPONE_TIME_EXPIRES: string
    SHOPPONG_CREDIT: string
    EXCHANGE_MORE: string
    NEW_USER_COUPON_ACQUIRE_FAIL_SYSTEM_ERROR: string
    MY_BALANCE: string
    INSTANT_DISCOUNT: string
    EXCHANGE_NOW: string
    CROSS_STORE_VOUCHER_TIP: string
    NEW_USER_COUPON: string
    GET: string
    SHOP_PROMO_CODE_COP_FAILED: string
    "code-30005Title": string
    MY_COINS: string
    BUY_GET_OFF: string
    code51Title: string
    PANEL_TITLE: string
    NEW_USER_COUPON_ACQUIRE_FAIL_LIMIT_HOUR: string
    CROSS_STORE_VOUCHER: string
  }
  
  interface WebCouponInfo {
    couponAttributes: CouponAttributes
    couponList: CouponList[]
    promotionPanelDTO: PromotionPanelDto
    usingNewCouponApi: boolean
  }
  
  interface CouponAttributes {
    couponPackageText: string
    hasPlatformShippingFeeCoupon: string
  }
  
  interface CouponList {
    bgColor: string
    color: string
    copy: string
    order: number
    title: string
    type: string
  }
  
  interface PromotionPanelDto {
    acrossStoreFixedDiscount: AcrossStoreFixedDiscount[]
  }
  
  interface AcrossStoreFixedDiscount {
    displayType: string
    promotionGroupTitle: string
    promotionPanelDetailDTOList: PromotionPanelDetailDtolist[]
  }
  
  interface PromotionPanelDetailDtolist {
    acquirable: boolean
    actionTips: string
    attributes: Attributes
    collectLink: string
    displayType: string
    endTime: number
    promotionDesc: string
    startTime: number
    teasingStartTime: number
    toolCode: string
  }
  
  interface Attributes {
    couponCampaignStyle: string
  }
  