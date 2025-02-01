import { ICar } from "@/@types/car";
import cn from "classnames";
import { FC } from "react";

interface Props {
  cars: ICar[];
}
export const ListCars: FC<Props> = ({ cars }) => (
  <ul className="flex flex-col w-full mt-10">
    <li className="grid grid-cols-3 gap-10 border-b-2 border-gray-base bg-white-base p-2.5 mb-5">
      <span className="justify-self-start">Make Name</span>
      <span className="justify-self-center">Model ID</span>
      <span className="justify-self-end">Model Name</span>
    </li>

    {cars.map((car, index) => (
      <li
        className={cn("grid grid-cols-3 gap-10 p-2.5", {
          "bg-white-base": index % 2 === 0,
        })}
        key={index}
      >
        <span className="justify-self-start">{car.Make_Name}</span>
        <span className="justify-self-center">{car.Model_ID}</span>
        <span className="justify-self-end">{car.Model_Name}</span>
      </li>
    ))}
  </ul>
);
