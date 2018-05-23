import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increase, decrease, stepChanged } from './counterActions';

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type='number'
            value={props.counter.step}
            onChange={props.stepChanged} />
        <button onClick={props.increase}>Increase</button>
        <button onClick={props.decrease}>Decrease</button>
    </div>
);

const mapStateToProps = state => (
    { counter: state.counter }
);

const mapDispatchToProps = dispatch => 
    bindActionCreators({ increase, decrease, stepChanged }, dispatch) ;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);