import { IResponseData } from "@/@types/api";
import { ICar } from "@/@types/car";
import { IMake } from "@/@types/make";
import { ListCars } from "@/page-components/result/ListCars";
import { instance } from "@/services/api-client";
import { generateYearOptions } from "@/utils/generateYearOptions";

export async function generateStaticParams() {
  const { data } = await instance.get<IResponseData<IMake[]>>(
    "/GetMakesForVehicleType/car?format=json"
  );

  const makes = data.Results.map((make) => make.MakeId);
  const years = generateYearOptions().map((year) => year.value);

  const paths = [];

  for (const make of makes) {
    for (const year of years) {
      paths.push({ makeId: make.toString(), year: year.toString() });
    }
  }

  return paths.map((params) => ({
    params,
  }));
}

const Result = async ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  const { makeId, year } = params;

  const { data } = await instance.get<IResponseData<ICar[]>>(
    `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  return (
    <section className="container py-20">
      <h2 className="text-2xl font-bold">{data.SearchCriteria}</h2>
      <ListCars cars={data.Results} />
    </section>
  );
};

export default Result;
