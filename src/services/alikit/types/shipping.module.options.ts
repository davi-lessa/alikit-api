import { ModuleBase } from "./module.default.types"

export interface ShippingModuleOptions extends ModuleBase{
    currencyCode: string
    freightCalculateInfo: FreightCalculateInfo
    generalFreightInfo: GeneralFreightInfo
    hbaFreeShipping: boolean
    hbaFreight: boolean
    i18nMap: I18nMap
    productId: number
    regionCountryName: string
    suppressFreightInvoke: boolean
    userCountryCode: string
    userCountryName: string
  }
  
  interface FreightCalculateInfo {
    displayMultipleFreight: boolean
    hideFreight: boolean
  }
  
  interface GeneralFreightInfo {
    hideShipFrom: boolean
    originalLayoutResultList: OriginalLayoutResultList[]
    usingNewFreight: boolean
  }
  
  interface OriginalLayoutResultList {
    additionLayout: AdditionLayout[]
    bizData: BizData
    contentLayout: ContentLayout[][]
    deliveryOptionPanelDisplayList: string[]
    detailFirstScreenDisplayList: string[]
    dxTemplateInfo: DxTemplateInfo
    finalPatternId: number
    skuSwitchDisplayList: string[]
    titleLayout: TitleLayout[][]
  }
  
  interface AdditionLayout {
    blockGroup: string
    blockType: string
    componentId: string
    content: string
    displayCondition: string
    distance: number
    medusaKey: string
    order: number
    type: string
    useInDeliveryOptionPanel: boolean
  }
  
  interface BizData {
    deliveryOptionCode: string
    deliveryProviderName: string
    leadTimeSort: number[]
    patternId: number
    subWarehouseType: string
    discount: number
    utParams: string
    tracking: string
    warehouseCode: string
    provider: string
    itemShipFromType: string
    itemScene: string
    shipToCode: string
    company: string
    currency: string
    deliveryDate: string
    shipFrom: string
    deliveryDayMax: number
    quantity: number
    leadTimeType: string
    guaranteedDeliveryTime: number
    freightCommitDay: string
    etaTraceId: string
    itemId: number
    solutionBusinessType: string
    shippingFee: string
    deliveryDayMin: number
    guaranteedDeliveryTimeProviderName: string
    solutionId: number
    warehouseType: string
    shipFromCode: string
    deliveryProviderCode: string
    shipTo: string
  }
  
  interface ContentLayout {
    blockGroup: string
    blockType: string
    componentId: string
    content: string
    displayCondition: string
    distance: number
    medusaKey: string
    order: number
    type: string
    useInDeliveryOptionPanel: boolean
    useInDetailFirstScreen: boolean
    useInSkuSwitch: boolean
  }
  
  interface DxTemplateInfo {}
  
  interface TitleLayout {
    blockGroup: string
    blockType: string
    componentId: string
    content: string
    displayCondition: string
    distance: number
    medusaKey: string
    order: number
    type: string
    useInDeliveryOptionPanel: boolean
    useInDetailFirstScreen: boolean
    useInSkuSwitch: boolean
  }
  
  interface I18nMap {
    HAB_BALLOON_TRAKING_AVAILABLE: string
    GENERAL_SHIPPING_TO: string
    SELECT_SHIP_FROM_TIP: string
    SHIPPING_TO: string
    HAB_SHIPPING_TO: string
    CARRIER: string
    TO_PROVINCE: string
    TO_COUNTRY: string
    TO_CITY: string
    CAN_NOE_DELIVER_NOTE: string
    ESTIMATED_DELIVERT_ON_DAYS: string
    CHOOSE_DELIVERT_METHOD: string
    HAB_BALLOON_DOOR_DELIVERY: string
    DELIVERED_BY: string
    HBA_SHIPPING_INFO: string
    IN: string
    SEARCH: string
    SELECT_SHIP_FROM: string
    LOGISTIC_COMPOSE_AE: string
    HBA_BALLOON_TIPS: string
    GENERAL_SHIPPING_DELIVERY: string
    VAT_DE_DETAIL: string
    SELECTED: string
    HBA_DOR_DELIVERY: string
    ESTIMATED_DELIVERT_ON_DATE: string
    OR_FULL_REFOUND: string
    LOGISTIC_COMPOSE_BRAND_MIND: string
    PLAZA_SHOP_NOW_RECEIVE_ON: string
    LOGISTIC_COMPOSE_ORDERS_OVER: string
    FAST_SHIPPING: string
    CAN_NOT_DELIVER: string
    HBA_TRAKING_AVAILABLE: string
    DAYS: string
    GENERAL_SHIPPIING_FROM: string
    GENERAL_SHPPING_MORE: string
    FREE_SHIPPING: string
    COST: string
    BALLOON_TIP: string
    SHIP_MY_ITEM_TO: string
    HAB_BALLOON_VAT_INCLUDED: string
    TRACKING: string
    LOGISTIC_COMPOSE_SPEED_UP: string
    PLAZA_BALLOON_TIP: string
    HBA_TVAT_INCLUDED: string
    ESTIMATED_DELIVERY: string
    TO_WHERE: string
    VAT_NUMBER: string
    TO_VIA: string
    APPLY: string
  }
  