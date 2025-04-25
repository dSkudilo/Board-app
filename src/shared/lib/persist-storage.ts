import { getItem, setItem } from 'localforage';

const makeError = (e: unknown) => {
  if (e instanceof Error) {
    console.error(e.message);
    throw e;
  } else {
    throw new Error('Неизвестная ошибка');
  }
};

export const persistStorage = {
  getItemsSafe: async <T>(
    key: string,
    defaultValue: T
  ): Promise<T | undefined> => {
    try {
      const res = await getItem<T>(key);
      return res || defaultValue;
    } catch (e: unknown) {
      makeError(e);
    }
  },

  setItemsSafe: async <T>(key: string, value: T) => {
    try {
      return await setItem<T>(key, value);
    } catch (e: unknown) {
      makeError(e);
    }
  },
};
