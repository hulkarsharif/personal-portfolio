import React from "react";
import { TopNavigation } from "./pages/Navigation/Top-navigation";
import { Hero } from "./pages/Home/Hero/Hero";
import { About } from "./pages/Home/About/About";

function App() {
    return (
        <>
            <TopNavigation />
            <Hero />
            <About />
        </>
    );
}

export default App;
