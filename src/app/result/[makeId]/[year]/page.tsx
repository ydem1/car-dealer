import { IResponseData } from "@/@types/api";
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
  const { makeId, year } = await params;

  return (
    <section className="container py-20">
      <ListCars makeId={makeId} year={year} />
    </section>
  );
};

export default Result;
