import React, {Component} from 'react'
import './index.scss'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'aaaaa',
            show:true
        };
    }
    title = () => {
        let show = !this.state.show
        this.setState({show:show})
    }
    render() {
        if (this.state.show) {
            return (
                <header className="header-bar show">
                    <div className="header-btn"></div>
                    <div onClick={this.title}>真的{this.state.name}</div>
                    <div className="header-btn"></div>
                </header>
            )
        }else{
            return (
                <header className="header-bar show">
                    <div className="header-btn"></div>
                    <div onClick={this.title}>假的{this.state.name}</div>
                    <div className="header-btn"></div>
                </header>
            )
        }
    }
}
