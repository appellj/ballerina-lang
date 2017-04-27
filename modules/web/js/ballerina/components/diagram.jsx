/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import CanvasDecorator from './canvas-decorator';
import PanelDecorator from './panel-decorator';
import StatementContainer from './statement-container';
import StatementView from './statement-decorator';
import ResourceDefinition from './resource-definition'
import components from './components';

class Diagram extends React.Component {

    constructor(props) {
        super(props);
        this.model = props.model;
        this.model.on('tree-modified', () => {
            this.forceUpdate();
        });
    }

    setModel(model) {
        this.model = model;
    }

    getModel() {
        return this.model;
    }

    render() {
        const functionInvocation = React.createElement(components['FunctionInvocationStatement'],
            {model : { viewState: { bBox: { x: 10, y: 10, w: 50, h: 50}},
             expression: "this is the expression"}}, null);
        let children =(<CanvasDecorator title="StatementContainer" bBox={{h:1000}}>
                        <ResourceDefinition name="echo" bBox={{x: 50, w:850, y:25, h:805}}>
                            <StatementContainer>
                              <StatementView bBox={{x:100, y:375, w:181.7, h:30}}>
                                <text x="190" y="390" className="statement-text">http:convertToResponse(m)</text>
                              </StatementView>
                            </StatementContainer>
                        </ResourceDefinition>
                      </CanvasDecorator>)
        return <div className="canvas_container">
                  {children}
              </div>;
    }
}

export default Diagram;
