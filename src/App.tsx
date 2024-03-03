import React from "react";

import { Button } from "./design-system";
import { Input } from "./design-system/Input";

function App() {
    return (
        <>
            {" "}
            <Button
                shape="rounded"
                variant="contained"
                size="sm"
                color="primary"
            >
                Click me
            </Button>
            <Button
                shape="circle"
                variant="contained"
                size="lg"
                color="secondary"
            >
                Button
            </Button>
            <Input shape="rounded" size="sm" value="text" onChange={() => {}} />
        </>
    );
}

export default App;
