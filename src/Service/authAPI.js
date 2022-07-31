import axiosClient from "./axiosClient";

const authAPI = {
    loginAction: (data) => {
        return axiosClient.post("/QuanLyNguoiDung/DangNhap", data)
    },
    registerAcion: (data) => {
        return axiosClient.post("/QuanLyNguoiDung/DangKy", data)
    },
    addMovie: (movie) => {
        const formData = new FormData();
        for (let key in movie) {
            formData.append(key, movie[key])
        }
        formData.append("maNhom", "GP01");

        return axiosClient.post("QuanLyPhim/ThemPhimUpLoadHinh", formData)
    }
}
export default authAPI;