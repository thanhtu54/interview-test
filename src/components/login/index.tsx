import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ReactComponent as FacebookSvg } from "../../assets/icons/facebook.svg";
import { ReactComponent as GoogleSvg } from "../../assets/icons/google.svg";

const Login = () => {
  interface InputValues {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const userList: InputValues[] = [
    {
      email: "main",
      password: "main",
    },
    {
      email: "test",
      password: "test",
    },
  ];

  const schema = yup
    .object({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(8)
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least one special character"
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: InputValues) => {
    const isValid = userList.some(
      (item) => item.email === data.email && item.password === data.password
    );
    if (!isValid) {
      setTimeout(() => {
        alert("Invalid email or password!");
      }, 2000);
    } else {
      localStorage.setItem("token", "dfldksjfldskjfldksflj5435353");
      localStorage.setItem("infor", data.email);
      setTimeout(() => {
        alert("Login successfully!");
        navigate("/");
      }, 2000);
    }
  };
  return (
    <div className="wrapper-login">
      <div className="form-login">
        <h1>OGMA</h1>
        <h2>Connexion</h2>
        <p className="form-login__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <form className="form-login__form" onSubmit={handleSubmit(onSubmit)}>
          {errors.email && (
            <p className="form-login__form--errors">{`*${errors.email?.message}`}</p>
          )}
          <input placeholder="Email Address" {...register("email")} />
          {errors.password && (
            <p className="form-login__form--errors">
              {`*${errors.password?.message}`}
            </p>
          )}
          <input placeholder="Password" {...register("password")} />
          <span>Mot de passe oublié?</span>
          <input type="submit" value="Connexion" />
        </form>
        <div className="form-login__space">
          <span className="form-login__space__line left" />
          <span>Or</span>
          <span className="form-login__space__line right" />
        </div>
        <div className="form-login__social">
          <button className="form-login__social__google">
            <GoogleSvg />
            <span>Continue with Google</span>
          </button>
          <button className="form-login__social__facebook">
            <FacebookSvg />
            <span>Continue with Facebook</span>
          </button>
        </div>
        <div className="form-login__register">
          <span>Not a member?</span>
          <span>Inscription</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
