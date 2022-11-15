import { Product } from "../repositories/product";
import { deepRenameKeys, deepRemoveByKeys } from "../utils/transforms";

export class ProductModule {
  // A product module doesn't store any data
  // It's only a way to get data from product and return it more organized and clean.
  // That way, it is not necessary to instantiate them again each time the data is reset.

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

  get data() {
    if (!this.product.dom) throw new Error("First, load a product data.");
    const moduleObject = this.product.dom.window.runParams.data[this._moduleKey];
    return moduleObject;
  }

  get summary(): any {
    // Returns a cleaner object, with useful information about the product
    // Important keys are defined in class extensions, as keys for rename and remove.
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
