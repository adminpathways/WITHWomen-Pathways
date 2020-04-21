import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {notify} from 'react-notify-toast';
import {setPin} from '../../reducers/userData';

class PinLock extends Component {
    state = {
        code: ''
    };

    setCode = code => {
        if (code.length <= 4) {
            this.setState({code});
        }
    };

    codeClicked = newCode => {
        const {code} = this.state;
        this.setCode(`${code}${newCode}`);
    };

    handleTextChange = event => {
        this.setCode(event.target.value);
    };

    submitPin = () => {
        const {code} = this.state;
        const {dispatch} = this.props;

        if (code.length === 4) {
            dispatch(setPin(code));
            dispatch(push('/home'));
        }
        else {
            notify.show('Pin code must be at least 4 characters.', 'error');
        }
    };

    render() {
        const array = [...Array(10)].map((_, index) => ({id: index === 9 ? 0 : index + 1}));
        const {code} = this.state;
        return (
            <form>
                <div className='text-center'>
                    <h6>Ensure Privacy</h6>
                    <h1>Set Your Pin</h1>
                    <p>
                        To improve safety, please enter a PIN passcode.
                        The PIN will be used to enter the tool when the tool locks,
                        which will occur when it is not actively in use.
                    </p>
                    <div className='grid-x grid-padding-y align-center'>
                        <div className='cell medium-2 small-5'>
                            <input
                                className='text-center'
                                maxLength='4'
                                onChange={this.handleTextChange}
                                pattern='[0-9]*' type='number' value={code}
                            />
                        </div>
                    </div>
                    <div className='grid-x align-center'>
                        <div className='shrink cell'>
                            <div className='grid-x align-center small-up-3'>
                                {array.map(value =>
                                    <div className='cell' key={value.id}>
                                        <a
                                            className='hollow button rounded shadow'
                                            onClick={() => this.codeClicked(value.id)}
                                            style={{width: 50, height: 50}}
                                        >
                                            {value.id}
                                        </a>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                    <div className='grid-x align-center-middle'>
                        <div className='cell large-5 small-10'>
                            <a
                                className='expanded button rounded shadow'
                                onClick={this.submitPin}
                            >
                                Confirm PIN
                            </a>
                            <a
                                className='expanded button clear rounded'
                                onClick={() => this.setCode('')}
                            >
                                Clear PIN
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect()(PinLock);

PinLock.propTypes = {
    dispatch: PropTypes.func.isRequired
};