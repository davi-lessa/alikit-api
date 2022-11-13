import { Product } from "../repositories/product";

export class ProductModule {
  protected product: Product;
  private _moduleKey: string;
  protected _relevantKeys: string[];
  protected _relevantRenamingMap: any;

  constructor(product: Product, moduleKey: string) {
    this.product = product;
    this._moduleKey = moduleKey;
    this._relevantKeys = [];
    this._relevantRenamingMap = {};
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
    // possible error: avoid using dot before [n]   -->  originalLayoutResultList?.[0]

    const slicedPath = path.split(".");
    const lastPathKey = slicedPath[slicedPath.length - 1];
    const validPath = lastPathKey.split("[")[0];

    return validPath;
  }

  private _tryToRenamePath(path: string) {
    const rennamed = this._relevantRenamingMap[path];
    return rennamed ? rennamed : path;
  }

  get data() {
    return this.product.dom.window.runParams.data[this._moduleKey];
  }

  get summary() {
    const keyPaths = this._relevantKeys;

    const entries = keyPaths.map((path) => {
      const sanitizedPath = this._sanitizePath(path);
      const rightNamed = this._tryToRenamePath(sanitizedPath);

      return [rightNamed, this._resolvePath(this.data, path)];
    });

    const relevantObject = Object.fromEntries(entries);
    return relevantObject;
  }
}
