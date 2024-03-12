import React from "react";
import { TopNavigation } from "./pages/Navigation/Top-navigation";
import { Hero } from "./pages/Home/Hero/Hero";
import { Tools } from "./pages/Home/Tool-section/Tools-section";
import { Service } from "./pages/Home/Service/Service";
import { Icon } from "./design-system";
import { About } from "./pages/Home/About/About";
import { Projects } from "./pages/Home/Projects/Projects";
import { Footer } from "./pages/Home/Footer/Footer";

function App() {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Tools />
            <Service />
            <Icon />
            <About />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
