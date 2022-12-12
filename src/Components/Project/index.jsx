import React from "react";
import styles from "./index.module.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import redirections from "../../Constants/redirections";
import useMediaQuery from '@mui/material/useMediaQuery';

const CommonComps = {
    openInNewWindow: ({ url }) => <OpenInNewIcon sx={{
        fontSize: "1em",
        color: "green",
        marginLeft: "3px",
        cursor: "pointer",
    }}
        onClick={() => window.open(url, "__blank")}
    />,
}

const Comps = {

    heading: () => <div className={styles.heading}>
        Projects and Routes available
    </div>,

    projects: {
        wrapper: (props) => <div className={styles.projectsWrapper}>
            {props.children}
        </div>,
        title: () => <div className={styles.projectsTitle}>Projects</div>,
        header: () => <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5em" }}>
            <div className={styles.projectsHeaders} style={{ flexBasis: "20%" }}>Name</div>
            <div className={styles.projectsHeaders} style={{ flexBasis: "20%" }}>Route</div>
            <div className={styles.projectsHeaders} style={{ flexBasis: "60%" }}>Tech Involved</div>
        </div >,
        rows: () => redirections.apps.map(app => (
            <div style={{ display: "flex", flexWrap: "nowrap" }} key={app.url}>
                <div title={app.url} style={{ flexBasis: "20%", display: "flex" }}>
                    {app.name}
                    <CommonComps.openInNewWindow url={app.url} />
                </div>
                <div style={{ flexBasis: "20%" }}>
                    {app.route}</div>
                <div style={{ flexBasis: "60%" }}>{app.tech}</div>
            </div>
        )),

        mobileRows: () => redirections.apps.map(app => (
            <React.Fragment key={app.url}>
                <div style={{ display: "flex" }}>
                    <div style={{ fontWeight: "bold", flexBasis: "50%", textDecoration: "underline" }}>Name:</div>
                    <div style={{ flexBasis: "50%", display: "flex" }} title={app.url}>
                        <div>{app.name}</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <CommonComps.openInNewWindow url={app.url} />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ fontWeight: "bold", flexBasis: "50%", textDecoration: "underline" }}>Route:</div>
                    <div style={{ flexBasis: "50%" }}>{app.route}</div>
                </div>
                <div style={{ marginBottom: "1.5em" }}>
                    <div style={{ fontWeight: "bold", textDecoration: "underline" }}>Tech Involved</div>
                    <div>{app.tech}</div>
                </div>
            </React.Fragment>
        )),
    },

    mediaQuery: ({ query = "", trueComponent = null, falseComponent = null }) => {
        const mediaQuery = useMediaQuery(query);
        if (mediaQuery)
            return trueComponent;
        else
            return falseComponent;
    },
}

export default () => (
    <div className={styles.wrapper} >
        <Comps.heading />
        <div style={{
            border: "2px solid green",
            padding: "1em",
        }}>
            <Comps.projects.title />
            <Comps.mediaQuery
                query="(min-width: 860px)"
                trueComponent={
                    <>
                        <Comps.projects.header />
                        <Comps.projects.rows />
                    </>
                }
                falseComponent={<Comps.projects.mobileRows />}
            />
        </div>
    </div >
)