export const getItem = (itemKey: string): string | null =>
  localStorage.getItem(itemKey);

export const setItem = (itemKey: string, itemValue: string): void =>
  localStorage.setItem(itemKey, itemValue);
