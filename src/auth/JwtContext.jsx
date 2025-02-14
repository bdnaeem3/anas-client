import { useCallback, useEffect } from "react";
import { isValidToken, setSession } from "./utils";
import { getUserRequest } from "@/actions/auth";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import localStorageAvailable from "@/utils/localStorageAvailable";


function AuthProvider({
    children,
    getUser,
}) {
    const storageAvailable = localStorageAvailable()

    const initialize = useCallback(() => {
        const accessToken = storageAvailable ? localStorage.getItem('x-auth-token') : ''
        if (accessToken && isValidToken(accessToken)) {
            setSession(accessToken)
            getUser()
        }
    }, [storageAvailable])

    useEffect(() => {
        initialize()
    }, [initialize])


    return children
}

AuthProvider.propTypes = {
    children: PropTypes.node,
    getUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {

}

export default connect(null, {
    getUser: getUserRequest,
})(AuthProvider)