import { ModuleBase } from "./module.default.types";

export interface ImageModuleOptions extends ModuleBase {
  approved: boolean;
  i18nMap: {};
  imagePathList: string[];
  name: string;
  summImagePathList: string[];
  videoId: number;
  videoUid: string;
}
