import { Outlet } from "react-router-dom";
import styles from "./index.module.css";
import Assets from "./Assets";

const Fns = {
    openUrlInNewWindow: (url) => () => window.open(url, "__blank"),
}

const Vars = {
    bio: {
        name: "Vipul Singh Thakur",
        mailTo: "mailto:chebomsta@gmail.com",
    },
    redirections: [
        {
            src: Assets.linkedin,
            url: "https://www.linkedin.com/in/vipul-singh-thakur-921161139",
        },
        {
            src: Assets.stackoverflow,
            url: "https://stackoverflow.com/users/8102871/vipulsinghthakur",
        },
        {
            src: Assets.github,
            url: "https://github.com/Ctrl-Code",
        },
    ],
};

const Comps = {
    wrapper: props => <div className={styles.wrapper}>
        {props.children}
    </div>,

    bio: () => <div className={styles.bio}>
        <div>
            {Vars.bio.name}
        </div>
        <div onClick={Fns.openUrlInNewWindow(Vars.bio.mailTo)}>
            <i>chebomsta@gmail.com</i>
        </div>
    </div>,

    redirections: () => <div className={styles.redirections}>
        {
            Vars.redirections.map(obj => (
                <img src={obj.src}
                    onClick={Fns.openUrlInNewWindow(obj.url)}
                />
            ))
        }
    </div>,

    projects: () => <div className="">
        PROJECTS
    </div>,
};

export default function () {
    console.log(styles);
    return (
        <Comps.wrapper>
            <Comps.bio />
            <Comps.redirections />
            <Comps.projects />
            <Outlet />
        </Comps.wrapper>
    );
}