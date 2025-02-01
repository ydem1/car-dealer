import { instance } from "@/services/api-client";
import { ListCars } from "@/page-components/result/ListCars";
import { generateYearOptions } from "@/utils/generateYearOptions";
import { IResponseData } from "@/@types/api";
import { IMake } from "@/@types/make";

export async function generateStaticParams() {
  try {
    const { data } = await instance.get<IResponseData<IMake[]>>(
      "/GetMakesForVehicleTye/car?format=json"
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
  } catch (error) {
    console.error("Error fetching makes data:", error);
    return [];
  }
}

const Result = ({ params }: { params: { makeId: string; year: string } }) => {
  const { makeId, year } = params;

  return (
    <section className="container py-20">
      <ListCars makeId={makeId} year={year} />
    </section>
  );
};

export default Result;
