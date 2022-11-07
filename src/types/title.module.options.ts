import { ModuleBase } from "./module.default.types";

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

export interface TitleModule extends ModuleBase{
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
}