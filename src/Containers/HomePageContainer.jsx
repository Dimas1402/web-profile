import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import { database } from '../config/Firebase'
import swal from 'sweetalert'

class HomePageContainer extends React.Component {
    constructor () {
        super()
        this.state = {
        message: '',
        loading: 'false',
        }
    }

    handleChange = e => {
        this.setState(
        {
            [e.target.name]: e.target.value
        },
        () => console.log('name', this.state.message)
        )
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
        loading: true
        })
        database
        .ref('/web-profile-3d7fe')
        .push({
            message: this.state.message
        })
        .then(res => {
            console.log('succes', res)
            this.setState({
            message: ''
            })
            swal("Success", "You clicked the button!", "success");
            this.setState({
                loading: false,
            })           
        })
        .catch(err => {
            console.log(err)
            this.setState({
            loading: false
            })
            swal("Failed to send message", "You clicked the button!", "error");
        })
    }

    render () {
        return (
        <>
            <HomePage
            loading={this.state.loading}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        </>
        )
    }
}

export default HomePageContainer
