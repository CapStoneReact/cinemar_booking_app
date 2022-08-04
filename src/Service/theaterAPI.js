import axiosClient from "./axiosClient";

const theaterAPI = {
  getGroups: () => {
    return axiosClient.get(`QuanLyRap/LayThongTinHeThongRap`);
  },
  getTheater: (group) => {
    return axiosClient.get(
      `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${group}`
    );
  },
  getMovie: (group) => {
    return axiosClient.get(
      `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${group}&maNhom=GP01`
    );
  },
};
export default theaterAPI;
