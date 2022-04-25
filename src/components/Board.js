import React from 'react';
import Square from './Square';
export default class Board extends React.Component {

constructor(props){
    super(props)
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    }
}

componentDidUpdate(){
    if(this.isNull()){
        alert("Partie nulle !");
        this.setState({
            squares: Array(9).fill(null)
        })
    } else if(this.isWin()){
        alert((this.state.xIsNext ? "O" : "X") + " a gagné!");
    }
}

    isNull(){
        for(let i=0; i<this.state.squares.length; i++){
            if(this.state.squares[i] == null){
                return false;
            }
        }
        return true;
    }

    isWin(){
        return (this.state.squares[0]===this.state.squares[1] &&
              this.state.squares[1]===this.state.squares[2] &&
              this.state.squares[2]!=null)||
              (this.state.squares[3]===this.state.squares[4] &&
              this.state.squares[4]===this.state.squares[5] &&
              this.state.squares[5]!=null)||
              (this.state.squares[6]===this.state.squares[7] &&
              this.state.squares[7]===this.state.squares[8] &&
              this.state.squares[8]!=null)||
              
              (this.state.squares[0]===this.state.squares[3] &&
                  this.state.squares[3]===this.state.squares[6] &&
                  this.state.squares[6]!=null)||
              (this.state.squares[1]===this.state.squares[4] &&
                  this.state.squares[4]===this.state.squares[7] &&
                  this.state.squares[7]!=null)||
              (this.state.squares[2]===this.state.squares[5] &&
                  this.state.squares[5]===this.state.squares[8] &&
                  this.state.squares[8]!=null)||
  
              (this.state.squares[0]===this.state.squares[4] &&
                  this.state.squares[4]===this.state.squares[8] &&
                  this.state.squares[8]!=null)||
              (this.state.squares[2]===this.state.squares[4] &&
                  this.state.squares[4]===this.state.squares[6] &&
                  this.state.squares[6]!=null)
    }

    onClickCase(i){
        let tab = this.state.squares;
        if(tab[i] == null){
            tab[i] = this.state.xIsNext ? "X" : "O";
            this.setState({
                squares: tab,
                xIsNext: !this.state.xIsNext
            })
        }
    }

    
    
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.onClickCase(i)}  />;
  }

  render() {
    const status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    );
  }
}
