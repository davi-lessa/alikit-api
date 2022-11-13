export function deepRenameKeys(obj: any, keys: any) {
  function rename(obj: any): any {
    if (!obj || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(rename);
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [keys[k] || k, rename(v)]));
  }

  return rename(obj);
}

export function deepRemoveByKeys(obj: any, keysForRemove: string[]) {
  // Percurs the object, filtering it in the way to remove the specified keys
  return Object.keys(obj)
    .filter((key) => !keysForRemove.includes(key))
    .reduce(
      (acc, key): any => {
        return Object.assign(acc, {
          [key]: Object(obj[key]) === obj[key] ? deepRemoveByKeys(obj[key], keysForRemove) : obj[key],
        });
      },
      Array.isArray(obj) ? [] : {}
    );
}
