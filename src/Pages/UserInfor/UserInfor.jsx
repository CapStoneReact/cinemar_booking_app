import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { makeStyles } from "@material-ui/core";
import { getInfor } from "../../Slices/userInfor";
import FooterHome from "../../Components/FooterHome/FooterHome";
import AccountTicket from "../AccoutTicket/AccountTicket";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function UserInfor() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { taiKhoan } = useParams();
  useEffect(() => {
    dispatch(getInfor(taiKhoan));
    //eslint-disable-next-line
  }, []);
  const { user, isLoading } = useSelector((state) => state.userInfor);
  if (isLoading) {
    return (
      <div className={classes.root}>
        <LoadingPage />
      </div>
    );
  }
  return (
    <div className="userAccountInfo">
      <AccountTicket userInfoStorage={user} />
      <FooterHome />
    </div>
  );
}
