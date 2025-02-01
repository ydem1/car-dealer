import { instance } from "@/services/api-client";
import { Controls } from "@/page-components/home/Controls";
import { Title } from "@/page-components/home/Title";
import { IResponseData } from "@/@types/api";
import { IMake } from "@/@types/make";

const Home = async () => {
  const { data } = await instance.get<IResponseData<IMake[]>>(
    "/GetMakesForVehicleType/car?format=json"
  );

  return (
    <section className="container flex h-full flex-col items-center gap-10 py-40">
      <Title />
      <Controls cars={data.Results} />
    </section>
  );
};

export default Home;
