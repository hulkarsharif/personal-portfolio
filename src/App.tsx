import React from "react";
import { TopNavigation } from "./pages/Navigation/Top-navigation";
import { Button } from "./design-system";
import { Hero } from "./pages/Home/Hero/Hero";

function App() {
    return (
        <>
            <TopNavigation />
            <Hero />
        </>
    );
}

export default App;
