import { Product } from "../repositories/product";
import { deepRenameKeys, deepRemoveByKeys } from "../utils/transforms";

export class ProductModule {
  protected product: Product;
  private _moduleKey: string;
  protected _summaryKeys: string[];
  protected _summaryRenamingMap: any;
  protected _summaryKeysForRemove: string[];

  constructor(product: Product, moduleKey: string) {
    this.product = product;
    this._moduleKey = moduleKey;

    this._summaryKeys = [];
    this._summaryRenamingMap = {};
    this._summaryKeysForRemove = []; // Nested keys removing
  }

  private _resolvePath(object: any, path: string, defaultValue?: any) {
    return path
      .split(/[\.\[\]\'\"]/)
      .filter((p: any) => p)
      .reduce((o: any, p: any) => (o ? o[p] : defaultValue), object);
  }

  private _sanitizePath(path: string) {
    // Gets the last key in the path string
    // e.g --> generalFreightInfo.originalLayoutResultList[0]  becomes  originalLayoutResultList
    // possible error: avoid using dot before [i]  (  originalLayoutResultList?.[0]  )

    const slicedPath = path.split(".");
    const lastPathKey = slicedPath[slicedPath.length - 1];
    const validPath = lastPathKey.split("[")[0];

    return validPath;
  }

  // private _tryToRenamePath(path: string) {
  //   const rennamed = this._summaryRenamingMap[path];
  //   return rennamed ? rennamed : path;
  // }

  get data() {
    return this.product.dom.window.runParams.data[this._moduleKey];
  }

  get summary(): any {
    const keyPaths = this._summaryKeys;

    const entries = keyPaths.map((path) => {
      const sanitizedPath = this._sanitizePath(path);
      return [sanitizedPath, this._resolvePath(this.data, path)];
    });

    const summaryObject = Object.fromEntries(entries);
    const summaryRenamed = deepRenameKeys(summaryObject, this._summaryRenamingMap);
    // Removes unwanted nested entries from summaryObject
    const summaryObjectFiltered = deepRemoveByKeys(summaryRenamed, this._summaryKeysForRemove);

    return summaryObjectFiltered;
  }
}
