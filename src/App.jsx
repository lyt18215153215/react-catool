import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter as Router} from 'react-router-dom'
import routes from 'routes'
import logo from './assets/logo.svg'
import './App.scss'
import Header from 'components/Header'
export default class App extends Component {
    render() {
        return (
            <div>
                <Header title="电台猫"></Header>
                <div className="content">
                    <Router>{renderRoutes(routes)}</Router>
                </div>
            </div>
        )
    }
}
