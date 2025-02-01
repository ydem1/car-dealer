export interface IResponseData<T> {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: T;
}
