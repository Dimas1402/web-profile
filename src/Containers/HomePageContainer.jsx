import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import {database} from '../config/Firebase'

class HomePageContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            message : '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        }, () => console.log('name', this.state.message))
    }

    handleSubmit = e => {
        e.preventDefault()
          database
            .ref("/web-profile-3d7fe")
            .push({
              message: this.state.message
            })
            .then(res => {
              console.log('succes',res);
              setTimeout(() => {
                this.setState({
                 message:''
                });
              }, 3000);
            })
            .catch(err => {
             console.log(err)
            });

    }

    render(){
        return(
            <>
                <HomePage handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </>
        )
    }
}

export default HomePageContainer