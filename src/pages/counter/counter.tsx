import { useState } from 'react';
import { Button } from 'primereact/button';

const CounterPage = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="section">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="mb-0">Counter</h4>
                    </div>
                    <div className="card-body">
                        <h3 className="counterText mb-0">{counter}</h3>
                    </div>
                    <div className="card-footer">
                        <Button onClick={() => setCounter(counter + 1)} label="Add" icon="pi pi-plus" style={{marginRight: '.25em'}}/>
                        <Button onClick={() => setCounter(0)} label="Reset" icon="pi pi-refresh" className="p-button-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterPage
