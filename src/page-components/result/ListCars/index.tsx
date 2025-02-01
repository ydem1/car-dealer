import { ICar } from "@/@types/car";
import { IResponseData } from "@/@types/api";
import { instance } from "@/services/api-client";
import { FC, Suspense } from "react";
import cn from "classnames";

interface ListCarsProps {
  makeId: string;
  year: string;
}

const ListCarsComponent = async ({ makeId, year }: ListCarsProps) => {
  const { data } = await instance.get<IResponseData<ICar[]>>(
    `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  return (
    <div>
      <h2 className="text-2xl font-bold">{data.SearchCriteria}</h2>

      <ul className="flex flex-col w-full mt-10">
        <li className="grid grid-cols-3 gap-10 border-b-2 border-gray-base bg-white-base p-2.5F">
          <span className="justify-self-start">Make Name</span>
          <span className="justify-self-center">Model ID</span>
          <span className="justify-self-end">Model Name</span>
        </li>

        {data.Results.map((car, index) => (
          <li
            className={cn("grid grid-cols-3 gap-10 p-2.5", {
              "bg-white-base": index % 2 !== 0,
            })}
            key={index}
          >
            <span className="justify-self-start">{car.Make_Name}</span>
            <span className="justify-self-center">{car.Model_ID}</span>
            <span className="justify-self-end">{car.Model_Name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ListCars: FC<ListCarsProps> = ({ makeId, year }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <ListCarsComponent makeId={makeId} year={year} />
  </Suspense>
);
