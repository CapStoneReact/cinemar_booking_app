import axiosClient from "./axiosClient";

const authAPI = {
    // getMovieShowing: () => {
    //     return axiosClient.get("QuanLyPhim/LayDanhSachPhim");
    // },
    loginAction: (loginState) => {
        return axiosClient.post("/QuanLyNguoiDung/DangNhap"),
        {
            params: {
                taiKhoan: loginState.taiKhoan,
                matKhau: loginState.matKhau,
            },
        }
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