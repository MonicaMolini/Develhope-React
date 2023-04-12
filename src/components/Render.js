import React from "react";

export class Render extends React.Component {
    render() {
        return (
            <ul>
                {this.props.state.Todo.map((el) => {
                    return (
                        <li>
                            <span>{el}</span>
                            <button value={el} onClick={this.props.handleRemove}>
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}