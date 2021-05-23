import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap'

class SubTab extends Component {
    render() {
        return (
            <div className="container" >
                <Tabs  defaultActiveKey="topview" id="uncontrolled-tab-example">
                    <Tab eventKey="topview" title="Xem nhiều">
                        {/* Your component here  */}
                    </Tab>
                    <Tab eventKey="newview" title="Mới công chiếu">
                        {/* Your component here */}
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default SubTab;
    
