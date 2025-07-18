import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

function useCabins() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins };
}

export default useCabins;