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

  const cars = data.Results;

  if (cars.length === 0) {
    return <p>Cars not found</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">{data.SearchCriteria}</h2>

      <ul className="flex flex-col mt-10">
        <li className="grid grid-cols-3 items-center gap-10 border-b-2 border-gray-base bg-white-base p-2.5">
          <p className="justify-self-start">Make Name</p>
          <p className="justify-self-center">Model ID</p>
          <p className="justify-self-end">Model Name</p>
        </li>

        {data.Results.map((car, index) => (
          <li
            className={cn("grid grid-cols-3 gap-10 items-center p-2.5", {
              "bg-white-base": index % 2 !== 0,
            })}
            key={index}
          >
            <p className="justify-self-start">{car.Make_Name}</p>
            <p className="justify-self-center">{car.Model_ID}</p>
            <p className="justify-self-end">{car.Model_Name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ListCars: FC<ListCarsProps> = ({ makeId, year }) => (
  <Suspense fallback={<p>Loading...</p>}>
    <ListCarsComponent makeId={makeId} year={year} />
  </Suspense>
);
