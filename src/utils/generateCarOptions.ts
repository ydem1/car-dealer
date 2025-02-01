import { IOptionSelect } from "@/@types";
import { ICar } from "@/@types/car";

export const generateCarOptions = (cars: ICar[]): IOptionSelect[] => {
  return cars.map((car, index) => ({
    id: index,
    value: car.MakeId,
    label: car.MakeName,
  }));
};
