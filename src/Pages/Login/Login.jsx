/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { loginAction, resetAuth } from "../../Slices/auth";
import { useLocation } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cybersoft.edu.vn/">
        CyberSoft
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    border: "1px solid rgba(0,0,0,0.3)",
    background: "transparent",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#82ada9",
    "&:hover": {
      background: "#fff",
      color: "#82ada9",
      border: "solid 1px #82ada9",
    },
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  loginLayout: {
    marginTop: theme.spacing(8),
  },
}));

export default function Login(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const [isDisable, setIsDisable] = useState(true);
  const [render, setRender] = useState(false);
  const [emptyUsernameNotice, setEmptyUsernameNotice] = useState(false);
  const [emptyPasswordNotice, setEmptyPasswordNotice] = useState(false);
  const dispatch = useDispatch();
  const logo = process.env.PUBLIC_URL + "images/logo.png";
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
    if (state.taiKhoan !== "") {
      setEmptyUsernameNotice(false);
    }
    if (state.matKhau !== "") {
      setEmptyPasswordNotice(false);
    }
    if (state.taiKhoan !== "" && state.matKhau !== "") {
      setIsDisable(false);
    }
  };
  // useEffect(() => {
  //     setTimeout(handleReset, 2000);
  //     setState({
  //         taiKhoan: "",
  //         matKhau: "",
  //     });
  //     // eslint-disable-next-line
  // }, [render]);
  const handleNotice = () => {
    setEmptyUsernameNotice(false);
    setEmptyPasswordNotice(false);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(state));
    setRender(!render);
  };
  const handleValidationAccount = () => {
    if (state.taiKhoan === "") {
      setEmptyUsernameNotice(true);
      setIsDisable(true);
    }
  };
  const handleValidationPassword = () => {
    if (state.matKhau === "") {
      setEmptyPasswordNotice(true);
      setIsDisable(true);
    }
  };
  // const handleReset = () => {
  //     dispatch(resetAuth());
  // };
  const renderNotice = () => {
    if (error) {
      return <Alert severity="error">{error.message}</Alert>;
    }
    if (emptyUsernameNotice) {
      setTimeout(handleNotice, 1500);
      return <Alert severity="error">Tài khoản không được để trống</Alert>;
    }
    if (emptyPasswordNotice) {
      setTimeout(handleNotice, 1500);
      return <Alert severity="error">Mật khẩu không được để trống</Alert>;
    }
  };
  if (isLoading)
    return (
      <div className={classes.root}>
        <LoadingPage />
      </div>
    );
  if (user) {
    if (user.maLoaiNguoiDung === "QuanTri") {
      navigate("/dashboard");
    } else if (location?.state?.idSchedule) {
      navigate(`/bookticket/${location?.state?.idSchedule}`);
    } else {
      navigate("/");
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Avatar className="p-1 mt-1" alt="Logo" src={logo} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng Nhập
        </Typography>
        {renderNotice()}
        <form onSubmit={handleLogin} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Tài Khoản"
            name="taiKhoan"
            onChange={handleChange}
            onBlur={handleValidationAccount}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="matKhau"
            label="Mật Khẩu"
            type="password"
            onChange={handleChange}
            onBlur={handleValidationPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isDisable}
          >
            Đăng Nhập
          </Button>
        </form>
        <Grid container>
          <Grid item>
            <NavLink
              to={`/register`}
              variant="body2"
              style={{ color: "#82ada9" }}
            >
              {"Bạn chưa có tài khoản? Đăng kí ngay"}
            </NavLink>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
