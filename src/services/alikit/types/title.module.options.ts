import { ModuleBase } from "./module.default.types";

export interface TitleModuleOptions extends ModuleBase{
    feedbackRating: FeedbackRatingOptions,
    formatTradeCount: string;
    orig: boolean;
    origTitle: boolean;
    subject: string;
    titleTags: [];
    tradeCount: number;
    tradeCountUnit: string;
    trans: boolean;
    transTitle: boolean;
    i18nMap: I18nMap
}

interface FeedbackRatingOptions {
    averageStar: string
    averageStarRage: string
    display: boolean
    evarageStar: string
    evarageStarRage: string
    fiveStarNum: number
    fiveStarRate: string
    fourStarNum: number
    fourStarRate: string
    oneStarNum: number
    oneStarRate: string
    positiveRate: string
    threeStarNum: number
    threeStarRate: string
    totalValidNum: number
    trialReviewNum: number
    twoStarNum: number
    twoStarRate: string
}

export interface I18nMap {
    REVIEWS: string
    VIEW_ALL_REVIEWS: string
    REVIEW: string
    VIEW_OTHER_TITLE: string
    VIEW_EN_TITLE: string
    FREEBIE_REVIEW: string
    FREEBIE_REVIEWS: string
  }
  