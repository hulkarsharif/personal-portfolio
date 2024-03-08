import React from "react";
import { TopNavigation } from "./pages/Navigation/Top-navigation";
import { Hero } from "./pages/Home/Hero/Hero";
import { About } from "./pages/Home/About/About";
import { Tools } from "./pages/Home/Tool-section/Tools-section";
import { Service } from "./pages/Home/Service/Service";
import { Icon } from "./design-system";

function App() {
    return (
        <>
            <TopNavigation />
            <Hero />
            {/* <About /> */}
            <Tools />
            <Service />
            <Icon />
        </>
    );
}

export default App;
