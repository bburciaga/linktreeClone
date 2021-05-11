import React, { PureComponent } from 'react'

class InputField extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="inputField">
                <input
                    className='input'
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={ (e) => this.props.onChange(e.target.value) }
                />
            </div>
        )
    }
}

export default InputField