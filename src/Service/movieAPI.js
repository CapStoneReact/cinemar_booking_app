import axiosClient from "./axiosClient";

const movieAPI = {
    getMovieShowing: () => {
        console.log("shashahsahsa")
        return axiosClient.get("QuanLyPhim/LayDanhSachPhim");
    },
    getMovieDetails: (movieId) => {
        return axiosClient.get("QuanLyPhim/LayThongTinPhim"),
        {
            params: {
                maPhim: movieId,
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
export default movieAPI;