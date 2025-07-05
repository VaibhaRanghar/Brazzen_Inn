import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabins() {
  return (
    <>
      <Modal>
        <Modal.Open opens={"cabin-form"}>
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name={"cabin-form"}>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      <Modal>
        <Modal.Open opens={"cabins-data"}>
          <Button>Show cabins data</Button>
        </Modal.Open>
        <Modal.Window name={"cabins-data"}>
          <CabinTable />
        </Modal.Window>
      </Modal>
    </>
  );
}
export default AddCabins;
