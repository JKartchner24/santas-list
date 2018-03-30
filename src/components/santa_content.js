import React, { Component } from 'react';

class SantaContent extends Component {
    render() {
        this.count =1
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="content-wrapper">
                    Dear Santa, <br />
                    For my christmas list I would like,<br />
                    {this.renderLabel(data.giftOne)},<br />
                    {this.renderLabel(data.giftTwo)},<br />
                    {this.renderLabel(data.giftThree)},<br />
                    {this.renderLabel(data.giftFour)},<br />
                    {this.renderLabel(data.giftFive)},<br />
                    {this.renderLabel(data.giftSix)},<br />
                    {this.renderLabel(data.giftSeven)},<br />
                    {this.renderLabel(data.giftEight)},<br />
                    {this.renderLabel(data.giftNine)},<br />
                    {this.renderLabel(data.giftTen)},<br />
                    {this.renderLabel(data.giftEleven)},<br />
                    {this.renderLabel(data.giftTwelve)},<br />
                    If you could get me all of these gifts that would be awesome!, if not I understand.
                </div>
            </div>
        )
    }

    renderLabel = function(state) {
        return (
            <span>
                <label className="christmas-label">{this.count++}</label><b className="bold-text">{state}</b>
            </span>
        )
    }
}

export default SantaContent;