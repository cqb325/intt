import React from 'react';
import Bundle from './Bundle';
import { Route } from 'react-router-dom';

let links = {
    form: require('bundle-loader?lazy!../pages/form/form.js'),
    dashboard: require('bundle-loader?lazy!../pages/dashboard/dashboard.js'),
    'mock-api': require('bundle-loader?lazy!../pages/mock/project/index.js'),
    'flow-chart': require('bundle-loader?lazy!../pages/flowChart/index.js'),
    'interfaces/:projectId': require('bundle-loader?lazy!../pages/mock/interface/interfaces.js'),
    'interface/:id': require('bundle-loader?lazy!../pages/mock/interface/interface.js'),
    'interfaces_add/:projectId': require('bundle-loader?lazy!../pages/mock/interface/add.js')
};

let ret = [];
for (let load in links) {
    const Comp = ({ match }) => {
        return (
            <Bundle load={links[load]} params={match.params} match={match}>
                {(Mod) => <Mod />}
            </Bundle>
        );
    }
    ret.push(<Route key={load} path={'/' + load} component={Comp} />);
}

export default ret;
