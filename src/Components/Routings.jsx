import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    redirect,
} from "react-router-dom";
import Error from "./Error/Error";
import Projects from "./Project";
import redirections from "../Constants/redirections";

const generatedRoutes = redirections.apps.map(app => (
    <Route path={`/${app.route}`}
        element={null}
        loader={() => redirect(app.url)}
        key={app.url}
    />
));

const router = createBrowserRouter(
    createRoutesFromElements(<>
        <Route path="/" element={<Projects />} errorElement={<Error />} />
        {generatedRoutes}
    </>
    )
);

export default () => <RouterProvider router={router} />