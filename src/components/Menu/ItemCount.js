import React, { useState } from 'react';
import  './style.css';
import Button from 'react-bootstrap/Button'


function ClickHere () {
    const [count, setCount] = useState (0);

    return (
        <div>
            <Button 
            onClick={() => {
                setCount((prevCount) => prevCount + 1);
            }}
            >
             {count}
            </Button>
            <p>Cantidad</p>
        </div>
    );
        
    return < ClickHere />;
}