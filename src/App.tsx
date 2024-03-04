import React from "react";

import { Badge, Button, Icon } from "./design-system";
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
                shape="rounded"
                variant="contained"
                size="md"
                color="success"
            >
                Button
            </Button>
            <Icon iconName="blue-icon" />
        </>
    );
}

export default App;
