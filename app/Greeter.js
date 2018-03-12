//var config = require('./config.json');

//module.exports = function(){
//	var greet = document.createElement('div');
//	greet.textContent = config.greetText;
//	return greet;
//}

import React, {Component} from 'react'
import Form from './Form.js'
import Name from './Name.js'
import StateUp from './StateUp.js'
import game from './game.js'

const user = {
    firstName: "邢",
    secondName: "同举"
};

const titleElement = (<div>
    <h1>标题</h1>
</div>);

function formatName(param) {
    var a = `firstName : ${param.firstName} secondName : ${param.secondName}`;
    return a;
}

// function myClick(e) {
//     e.preventDefault();
//     alert(`噢耶，我被点击了`);
// }


class Greeter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myDate: new Date(),
            choose: false
        };
        this.myClick = this.myClick.bind(this);
        this.testClick = this.testClick.bind(this);
    }

    tick() {
        // this.setState({myDate: new Date()});
        this.setState(() => ({
            myDate: new Date()
        }));
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.addState = `这是一个额外添加的state中的变量`;
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // 次写法不用手动调用bind
    myClick(){
        // e.preventDefault();
        // alert(`噢耶，我被点击了`);
        this.setState((preState) => ({choose: !preState.choose}));
    }

    testClick(){
        // const numbers = [1,2,3,4,5];
        // const dobules = numbers.map((element) => {element * 2});
        // console.log(dobules);

        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((number) => <li>我是{number}</li>);
        console.log(doubled);
        return doubled
    }



    render() {
        const numbers = [1, 1, 3, 4, 5];
        const doubled = numbers.map((number) => <li key={number.toString()}>我是{number}</li>);

        return (
            <div>
                <h1>{this.props.content}</h1>
                <h2>Hello： {formatName(user)}</h2>
                {titleElement}
                <p>{this.state.myDate.toLocaleTimeString()}</p>
                <button onClick={this.myClick}>{this.state.choose ? `关闭` : `打开`}</button>
                <br/>
                <br/>
                <br/>
                <button onClick={this.testClick}>测试</button>
                <ul>
                    {doubled}
                </ul>

                <Form></Form>

                <br/>
                <br/>
                <br/>

                <Name></Name>

                <br/>
                <br/>
                <br/>

                {/*<StateUp/>*/}
                <game></game>

            </div>
        );
    }
}


export default Greeter