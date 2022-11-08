import { ModuleBase } from "./module.default.types"

export interface PageModuleOptions extends ModuleBase {
    aeOrderFrom: string
    aerSelfOperation: boolean
    amphtmlTag: string
    boutiqueSeller: boolean
    canonicalTag: string
    complaintUrl: string
    description: string
    hreflangTag: string
    i18nMap: {}
    imagePath: string
    itemDetailUrl: string
    keywords: string
    kidBaby: boolean
    mSiteUrl: string
    mediaTag: string
    multiLanguageUrlList: MultiLanguageUrlList[]
    ogDescription: string
    ogTitle: string
    ogurl: string
    oldItemDetailUrl: string
    plazaElectronicSeller: boolean
    productId: number
    ruSelfOperation: boolean
    showPlazaHeader: boolean
    siteType: string
    spanishPlaza: boolean
    title: string
  }
  
  interface MultiLanguageUrlList {
    language: string
    languageUrl: string
  }
  