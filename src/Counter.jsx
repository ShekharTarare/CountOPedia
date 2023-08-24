import React from "react";
import attack from "./Images/sword.jpg";
import defence from "./Images/shield.png";

class Counter extends React.Component
{
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);

        this.state = {
            count: 0,
            lastPlay: "",
            gameStatus: ""
        }
    }

    handleAttack = () =>
    {
        this.setState((prevState) => {
            let newCount = prevState.count + Math.round(Math.random() * 10);
            return{
                count: newCount,
                lastPlay: "Attack",
                gameStatus: newCount > 20 ? "You Won!!": prevState.gameStatus
            }
        })
    }

    handleDefence = () =>
    {
        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return{
                count: newCount,
                lastPlay: "Defence",
                gameStatus: newCount < -20 ? "You Lost!!": previousState.gameStatus
            }
        })
    }

    handleRandomPlay = () =>
    {
        let playMode = Math.round(Math.random());
        if(playMode === 0){
            this.handleAttack();
        }
        else{
            this.handleDefence();
        }
    }

    handleReset = () =>
    {
        this.setState(() => {
            return{
                count: 0,
                gameStatus: "",
                lastPlay: ""
            }
        })
    }

    render(){
        return(
            <div className="row text-white text-center">
                <h1>Game Score: {this.state.count}</h1>
                <p>You will win at +20 points and lose at -20 points</p>
                <p>Last Play: {this.state.lastPlay} </p>
                <h3>Game Status: {this.state.gameStatus} </h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img
                    alt="attack"
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        border: "1px solid green"
                    }}
                    className="p-4 rounded" 
                    src={attack}
                    onClick={this.handleAttack}/>
                </div>
                <div className="col-6 col-md-3">
                    <img
                    alt="defence"
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        border: "1px solid red"
                    }}
                    className="p-4 rounded" 
                    src={defence}
                    onClick={this.handleDefence}/>
                </div>

                <div className="col-12 col-md-4 offset-md-4">
                    <button 
                        className="btn btn-secondary w-100 mt-2"
                        onClick={this.handleRandomPlay}>Random Play</button>
                    <button 
                        className="btn btn-warning w-100 mt-2"
                        onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;