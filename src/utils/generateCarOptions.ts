import { IOptionSelect } from "@/@types";
import { IMake } from "@/@types/make";

export const generateCarOptions = (cars: IMake[]): IOptionSelect[] => {
  return cars.map((car, index) => ({
    id: index,
    value: car.MakeId,
    label: car.MakeName,
  }));
};
