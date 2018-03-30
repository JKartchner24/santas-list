import React, { Component } from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

import SantaContent from './santa_content';

function SantaInput(props) {
    return (
        <Col md="4" className="input-wrapper">
            <Row>
                <Col md="2">
                    <label className="green-label">{props.index}</label>
                </Col>
                <Col md="10">
                    <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange} />
                </Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="10">
                    <div className="input-description">{props.placeholder}</div>
                </Col>
            </Row>
        </Col>
    );
}

class SantaForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            completedForm: false,
            giftOne: '',
            giftTwo: '',
            giftThree: '',
            giftFour: '',
            giftFive: '',
            giftSix: '',
            giftSeven: '',
            giftEight: '',
            giftNine: '',
            giftTen: '',
            giftEleven: '',
            giftTwelve: '',
        }

    }

    handleChange = function(props) {
        return function(event) {
            // console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
    }

    handleSubmit = function(event) {
        this.setState({completedForm: true});
        event.preventDefault();
    }.bind(this);

    handleClick = function() {
        this.setState({
            completedForm: false,
            giftOne: '',
            giftTwo: '',
            giftThree: '',
            giftFour: '',
            giftFive: '',
            giftSix: '',
            giftSeven: '',
            giftEight: '',
            giftNine: '',
            giftTen: '',
            giftEleven: '',
            giftTwelve: '',
        });
    }.bind(this)

    renderButton = function() {
        if(this.state.completedForm) {
            return <a className="clear-button" onClick={this.handleClick}>Clear Santa List</a>
        }
        return <input type="submit" className="generate-button" value="Generate Santa List" /> 
    }

    render() {

        this.inputData = [
            {placeholder: 'Gift', prop: 'giftOne', state: this.state.giftOne},
            {placeholder: 'Gift', prop: 'giftTwo', state: this.state.giftTwo},
            {placeholder: 'Gift', prop: 'giftThree', state: this.state.giftThree},
            {placeholder: 'Gift', prop: 'giftFour', state: this.state.giftFour},

            {placeholder: 'Gift', prop: 'giftFive', state: this.state.giftFive},
            {placeholder: 'Gift', prop: 'giftSix', state: this.state.giftSix},
            {placeholder: 'Gift', prop: 'giftSeven', state: this.state.giftSeven},
            {placeholder: 'Gift', prop: 'giftEight', state: this.state.giftEight},

            {placeholder: 'Gift', prop: 'giftNine', state: this.state.giftNine},
            {placeholder: 'Gift', prop: 'giftTen', state: this.state.giftTen},
            {placeholder: 'Gift', prop: 'giftEleven', state: this.state.giftEleven},
            {placeholder: 'Gift', prop: 'giftTwelve', state: this.state.giftTwelve},
        ]

      return (
          <div className="card-wrapper">
            <Card>
                <form onSubmit={this.handleSubmit} id="santa-form">
                    <Row style={{textAlign: 'center', color: 'white'}}>
                        {
                            _.map(this.inputData, (data, indexKey) => {
                                return <SantaInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                            })
                        }
                    </Row>
                    <Row>
                        <Col md="12" className="button-wrapper">
                            {this.renderButton()}
                        </Col>
                    </Row>
                </form>
                <SantaContent data={this.state}/>
            </Card>
          </div>
        
        );
    }
}

export default SantaForm;