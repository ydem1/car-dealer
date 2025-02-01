import { instance } from "@/services/api-client";
// import { Controls } from "@/page-components/home/Controls";
import { Title } from "@/page-components/home/Title";
import { IResponseData } from "@/@types/api";
import { ICar } from "@/@types/car";

const Home = async () => {
  const { data } = await instance.get<IResponseData<ICar[]>>(
    "/GetMakesForVehicleType/car?format=json"
  );

  console.log(data);

  return (
    <section className="container flex h-full flex-col items-center gap-10 py-20">
      <Title />
      {/* <Controls cars={data.Results} /> */}
    </section>
  );
};

export default Home;
