import { ModuleBase } from "./module.default.types"

export interface CrossLinkOptions extends ModuleBase {
    breadCrumbPathList: BreadCrumbPathList[]
    crossLinkGroupList: CrossLinkGroupList[]
    i18nMap: I18nMap
    productId: number
  }
  
  interface BreadCrumbPathList {
    cateId: number
    name: string
    remark: string
    url: string
    target?: string
  }
  
  interface CrossLinkGroupList {
    channel: string
    crossLinkList: CrossLinkList[]
    name: string
  }
  
  interface CrossLinkList {
    displayName: string
    name: string
    remark?: string
    url: string
  }

  interface I18nMap {
    BREADCRUMB_PART2: string
    BREADCRUMB_PART1: string
    CROSSLINK_RELATED_SEARCHES: string
  }
  