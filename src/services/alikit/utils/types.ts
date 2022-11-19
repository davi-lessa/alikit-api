// Useful to select some parameters from Partials
export type PickPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
