import { ModuleBase } from "./module.default.types"

export interface CommonModuleOptions extends ModuleBase{
    activity: boolean
    categoryId: number
    crawler: boolean
    currencyCode: string
    gagaDataSite: string
    i18nMap: {}
    plaza: boolean
    preSale: boolean
    productId: number
    productIdStr: string
    productTags: ProductTags
    reminds: any[]
    sellerAdminSeq: number
    tradeCurrencyCode: string
    userCountryCode: string
    userCountryName: string
  }
  
  interface ProductTags {}
  