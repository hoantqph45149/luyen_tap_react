import Swal from "sweetalert2";

const handleDelete = () => {
  Swal.fire({
    title: "Đang xử lý...",
    text: "Vui lòng chờ trong giây lát.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export default function App() {
  return <button onClick={handleDelete}>Xóa</button>;
}
