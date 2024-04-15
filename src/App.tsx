import React, { useState } from "react";

import { TopNavigation } from "./pages/Navigation/TopNavigation";
import { Hero } from "./pages/Home/Hero/Hero";
import { Tool } from "./pages/Home/Tool-section/types";
import { Service } from "./pages/Home/Service/Service";
import { Icon } from "./design-system";
import { About } from "./pages/Home/About/About";
import { Projects } from "./pages/Home/Projects/Projects";
import { Footer } from "./pages/Home/Footer/Footer";
import { ToolsBar } from "./pages/Home/Tool-section/Tools-section";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <TopNavigation show={isMenuOpen} onClose={handleCloseMenu} />

            <Hero />

            <ToolsBar />

            <Service />

            <Icon />

            <About />

            <Projects />

            <Footer />
        </>
    );
}

export default App;
