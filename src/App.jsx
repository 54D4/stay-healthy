import { useQuery } from "react-query";
import { useState } from "react";
import { getDeta } from "./api/getData";
import Success from "./componets/success";
import IsError from "./componets/IsError";

function App() {
  const [serch, setSerch] = useState("pizza");
  const { data, status, refetch } = useQuery(["post"], () => getDeta(serch));
  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-5xl my-5 ">
        Stay <span className="text-green-500">Healthy</span>
      </h1>
      <div>
        <input
          value={serch}
          onChange={(e) => setSerch(e.target.value)}
          className="my-4 w-[300px] text-center text-xl  border-b border-black"
        />

        <button
          onClick={() => refetch()}
          className=" px-3 py-1 bg-green-500 rounded-lg mx-4"
        >
          submit
        </button>
      </div>
      {status === "success" &&
        (data === "undefined" || data.length === 0 ? (
          <IsError />
        ) : (
          <Success data={data} />
        ))}
    </div>
  );
}

export default App;
