import React from 'react';
import { connect } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

const AuthRoute = ({isAuth, type , ...rest}) => {
    if (isAuth && type === "public") {
        return (<Redirect to='/defectlist' />);
    } else if (!isAuth && type === "private") {
        return (<Redirect to='/' />);
    }
    return (<Route {...rest}/>)
}

const mapStateToProps =(state)=> ({isAuth:state.login.isAuth});

export default connect(mapStateToProps)(AuthRoute)