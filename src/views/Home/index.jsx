import React, {Component} from 'react'
import './index.scss'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'aaaaa',
                    id: '11111'
                }, {
                    name: 'bbbbb',
                    id: '22222'
                }, {
                    name: 'ccccc',
                    id: '33333'
                }
            ]
        }
    }
    addItem = () =>{
        let list = this.state.data
        list = list.concat([{name: 'ddddd',id: '44444'}])
        this.setState({data:list})
    }
    render() {
        return (
            <div>
                {
                    (this.state.data).map((item,index) => {
                        return <div key={index}>{item.name}{item.id}</div>
                    })
                }
                <button onClick={this.addItem}>add</button>
            </div>
        )
    }
}
