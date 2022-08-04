import axios from "axios";
import axiosClient from "./axiosClient";

const roomListAPI = {
    fetchRoomList: (id) => {
        return axiosClient.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
    },
    bookTicket: (ticket) => {
        let accessToken = "";

        if (localStorage.getItem("User")) {
            if (
                JSON.parse(localStorage.getItem("User")).maLoaiNguoiDung === "KhachHang"
            ) {
                accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
            }
        }
        return axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
            method: "POST",
            data: ticket,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
    }

}
export default roomListAPI;