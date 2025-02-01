export interface ILink {
  id: number | string;
  label?: string;
  href: string;
  icon?: string;
}

export interface IOptionSelect {
  id: number;
  value: string | number;
  label: string;
}

export type SetOptionSelect = (option: IOptionSelect) => void;
