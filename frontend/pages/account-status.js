import styles from '../styles/Login.module.scss'
import style from '../styles/Workspace.module.scss'
import RouteService from "../services/auth/routing"
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../store/actions";
import AuthService from "../services/auth/auth.service"
import Router from "next/router"
import jwt from "jwt-decode";
import PublicLayout from "../layouts/public-layout";
import {notifyError, notifySuccess} from "../utils/alerts";

export function Login() {

    const [form, setForm] = React.useState({
        login: "",
        password: "",
    });


    const authUser = useSelector(state => state.authUser)

    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });

    const getUserHref = (category) => {
        switch (category) {
            case "SUPER_ADMIN":
                return "/super-admin";
            case "SCHOOL_ADMIN":
                return "/admin/dashboard";
            case "PARENT":
                return "/parent";
            default:
                return "/school-employee";
        }
    };


    useEffect(() => {
        if (authUser.category) {
            Router.push(getUserHref(authUser.category)).then()
        }
    }, [authUser])

    const login = async () => {
        setAlertData({alert: false, message: "", class: ""});
        setLoading(true);

        try {

            const res = await AuthService.login(form);

            AuthService.setToken(res.data.token);
            const user = jwt(res.data.token);
            dispatch(setAuthUser(user.User));

            if (RouteService.getPrevRoute()) {
                await Router.push(RouteService.getPrevRoute())
            } else {
                getUserHref(res.data.sub)
            }
            notifySuccess("Warm welcome to you " + user.User.firstName);
        } catch (e) {
            const ERROR_MESSAGE = e.response ? e.response.data.message : e.message;
            notifyError(ERROR_MESSAGE)
        } finally {
            setLoading(false);
        }

    };

    const handleFormChange = (property) => (event) => {
        setForm({...form, [property]: event.target.value});
    };


    return (
        <div>
            <section className={`${styles.sectionOne} container-fluid`}>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className={styles.formContainer}>
                            <div className={styles.title}>
                                First, enter your email
                            </div>
                            <div className={styles.subtitle}>
                                we suggest you to use the email that you use at work
                            </div>
                            <div><input placeholder="name@work-email.com" onChange={handleFormChange("login")}
                                        className={styles.input} type="text"/></div>
                            <div><input placeholder="Enter your Password" onChange={handleFormChange("password")}
                                        className={styles.input} type="text"/></div>


                            <button className={styles.button} onClick={() => login()}>{loading ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={"/img/loader.gif"}
                                    width={10}
                                    height={10}
                                    alt={"Loading"}
                                    className={"loader"}
                                />
                            ) : (
                                "Continue"
                            )}</button>
                            <div className="d-flex">
                                <input className={style.checkbox} type="checkbox"/>
                                <div>
                                    It’s ok to send emails about trai
                                </div>
                            </div>
                            <div className={style.hint}>
                                By continuing, you’re agreeing to our Customer Terms of
                                Service, Privacy Policy, and Cookie Policy.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <div className={style.links}>Privacy & Terms</div>
                            <div className={style.links}>Contact Us</div>
                            <div className={style.links}>FAQ’s</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default function LoginPage() {
    return (
        <PublicLayout headerTitle={"Login"}><Login/></PublicLayout>
    )
}