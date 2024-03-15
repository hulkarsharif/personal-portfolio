import React from "react";
import { TopNavigation } from "./pages/Navigation/Top-navigation";
import { Hero } from "./pages/Home/Hero/Hero";
import { Tool } from "./pages/Home/Tool-section/types";
import { Service } from "./pages/Home/Service/Service";
import { Icon } from "./design-system";
import { About } from "./pages/Home/About/About";
import { Projects } from "./pages/Home/Projects/Projects";
import { Footer } from "./pages/Home/Footer/Footer";
import { ToolsBar } from "./pages/Home/Tool-section/Tools-section";

function App() {
    return (
        <>
            <TopNavigation />
            <section id="hero">
                <Hero />
            </section>

            <ToolsBar />
            <section id="service">
                <Service />
            </section>

            <Icon />
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>

            <Footer />
        </>
    );
}

export default App;
