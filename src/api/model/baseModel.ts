export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface Dict {
  label: string;
  value: string | number | boolean | null;
  disabled?: boolean;
  type?: string;
}

/**
 * 字段数组转map
 */
export function dict2Map(dictArray: Dict[]) {
  return new Map(dictArray.map((dict) => [dict.value, dict.label]));
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}
