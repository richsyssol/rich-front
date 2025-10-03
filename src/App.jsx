import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import Products from "./pages/Products/Products";
import Industries from "./pages/Industries/Industries";
import Resources from "./pages/Resources/Resources";
import ContactPage from "./pages/Contact/Contact";
import AutomationPage from "./pages/Automation/Automation";
import InternshipPage from "./pages/Internship/Internship";
import LoginPage from "./pages/Login/Login";
import BlogDetail from "./pages/Home/BlogDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/:productSlug" element={<Products />} />
        <Route path="/industries/:industrySlug" element={<Industries />} />
        <Route path="/resources/:resourceSlug" element={<Resources />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ai-automation" element={<AutomationPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resources/blogs/:id" element={<BlogDetail />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
