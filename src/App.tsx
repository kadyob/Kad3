import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>UMK | KADYOB Digital Creator — Software Developer & Digital Creative</title>
        <meta
          name="description"
          content="UMK is a digital creator and software developer specializing in modern web development, creative design, and digital solutions."
        />
        <link rel="canonical" href="https://umk-portfolio.vercel.app/" />
      </Helmet>
      <MainLayout>
        <Home />
      </MainLayout>
    </HelmetProvider>
  );
}
