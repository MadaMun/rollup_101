
import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;import React, { Suspense, useEffect } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { AppProvider } from "contexts/AppContext";
import { getMenu } from "helpers";
import { validateToken, isEmpty } from "utils";

import { useApp } from "hooks";

import { AppBar, Breadcrumb, App as AntDesignApp, Spin, Box } from "components";

import ErrorBoundary from "./components/ErrorBoundary";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const LabPage = React.lazy(() => import("./pages/LabPage"));
const RolePage = React.lazy(() => import("./pages/RolePage"));
const ContainerPage = React.lazy(() => import("./pages/ContainerPage"));
const LabViewPage = React.lazy(() => import("./pages/LabViewPage"));
const StoreContainer = React.lazy(() => import("./pages/StoreContainer"));
const ContainerSearch = React.lazy(() => import("./pages/ContainerSearch"));
const ContainerHistory = React.lazy(() => import("./pages/ContainerHistory"));
const LabRequestPage = React.lazy(() => import("./pages/LabRequest"));
const ChangePasswordPage = React.lazy(
  () => import("./pages/ChangePasswordPage"),
);

const RequireAuth: React.FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies();

  const { setUser, setCategories } = useApp();

  const record: any = validateToken(cookies.token);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");

      return;
    }

    if (isEmpty(record)) navigate("/login");

    (async () => {
      const { data: categories } = await getMenu();

      setCategories(categories);
      setUser(record);
    })();
  }, [cookies]);

  if (isEmpty(record)) return <></>;

  return (
    <Box className="h-screen w-screen">
      <Box style={{ height: 64, padding: 0 }}>
        <AppBar />
      </Box>

      <Box className="w-full h-[calc(100%-64px)] flex flex-col">
        <Breadcrumb />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/hospitals/*"
            element={
              <Suspense fallback={<Spin />}>
                <HospitalPage />
              </Suspense>
            }
          />

          <Route
            path="/labs/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabPage />
              </Suspense>
            }
          />

          <Route
            path="/users/*"
            element={
              <Suspense fallback={<Spin />}>
                <UserPage />
              </Suspense>
            }
          />

          <Route
            path="/roles/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />

          <Route
            path="/containers/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerPage />
              </Suspense>
            }
          />

          <Route
            path="/store-container/*"
            element={
              <Suspense fallback={<Spin />}>
                <StoreContainer />
              </Suspense>
            }
          />

          <Route
            path="/container-search/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerSearch />
              </Suspense>
            }
          />

          <Route
            path="/container-history/*"
            element={
              <Suspense fallback={<Spin />}>
                <ContainerHistory />
              </Suspense>
            }
          />

          <Route
            path="/lab-view/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabViewPage />
              </Suspense>
            }
          />

          <Route
            path="/lab-request/*"
            element={
              <Suspense fallback={<Spin />}>
                <LabRequestPage />
              </Suspense>
            }
          />

          <Route
            path="/change-password/*"
            element={
              <Suspense fallback={<Spin />}>
                <ChangePasswordPage />
              </Suspense>
            }
          />

          <Route
            path="/role/*"
            element={
              <Suspense fallback={<Spin />}>
                <RolePage />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Spin />}>
      <AntDesignApp>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spin />}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={<Spin />}>
                <AppProvider>
                  <RequireAuth />
                </AppProvider>
              </Suspense>
            }
          />
        </Routes>
      </AntDesignApp>
    </ErrorBoundary>
  );
};

export default App;