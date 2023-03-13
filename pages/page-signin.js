import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [addUser, setUser] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`http://localhost:3000/api/user`, addUser);
    console.log("data", data.data);
    setUser({
      username: "",
      password: "",
    });
    if (data.data) router.push("/");
  };

  const handelChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...addUser, [e.target.name]: value });
  };

  const register = () => {
    console.log("into the register method");
    // axios({
    //   method: "post",
    //   data: {
    //     username: registerUsername,
    //     password: registerPassword,
    //   },
    //   withCredentials: true,
    //   url: "http://localhost:3000/page-register",
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <Layout>
        <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Register </p>
                  <h2 className="mt-10 mb-5 text-brand-1">
                    Start for free Today
                  </h2>
                  <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p>
                  <button className="btn social-login hover-up mb-20">
                    <img
                      src="assets/imgs/template/icons/icon-google.svg"
                      alt="jobbox"
                    />
                    <strong>Sign up with Google</strong>
                  </button>
                  <div className="divider-text-center">
                    <span>Or continue with</span>
                  </div>
                </div>
                <form
                  className="login-register text-start mt-20"
                  onSubmit={onSubmit}
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-1">
                      Full Name *
                    </label>
                    <input
                      className="form-control"
                      id="input-1"
                      type="text"
                      required
                      name="fullname"
                      placeholder="Steven Job"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-2">
                      Email *
                    </label>
                    <input
                      className="form-control"
                      id="input-2"
                      type="email"
                      required
                      name="emailaddress"
                      placeholder="stevenjob@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-3">
                      Username *
                    </label>
                    <input
                      className="form-control"
                      id="input-3"
                      type="text"
                      required
                      name="username"
                      placeholder="stevenjob"
                      // onChange={(e) => setRegisterUsername(e.target.value)}
                      onChange={handelChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-4">
                      Password *
                    </label>
                    <input
                      className="form-control"
                      id="input-4"
                      type="password"
                      required
                      name="password"
                      placeholder="************"
                      // onChange={(e) => setRegisterPassword(e.target.value)}
                      onChange={handelChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-5">
                      Re-Password *
                    </label>
                    <input
                      className="form-control"
                      id="input-5"
                      type="password"
                      required
                      name="re-password"
                      placeholder="************"
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">
                        Agree our terms and policy
                      </span>
                      <span className="checkmark" />
                    </label>
                    <Link legacyBehavior href="/page-contact">
                      <a className="text-muted">Lean more</a>
                    </Link>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100"
                      type="submit"
                      name="login"
                      // onClick={register}
                    >
                      Submit &amp; Register
                    </button>
                  </div>
                  <div className="text-muted text-center">
                    Already have an account?
                    <Link legacyBehavior href="/page-signin">
                      <a>Sign in</a>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="img-1 d-none d-lg-block">
                <img
                  className="shape-1"
                  src="assets/imgs/page/login-register/img-1.svg"
                  alt="JobBox"
                />
              </div>
              <div className="img-2">
                <img
                  src="assets/imgs/page/login-register/img-2.svg"
                  alt="JobBox"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
