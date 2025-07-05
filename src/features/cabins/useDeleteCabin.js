import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Cabin Successfully Deleted!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteCabin, isDeleting };
}

export default useDeleteCabin;
