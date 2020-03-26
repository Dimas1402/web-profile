import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import {database} from '../config/Firebase'

class HomePageContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            message : '',
            loading:'false',
            alert:'false'
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        }, () => console.log('name', this.state.message))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            loading:true
        })
          database
            .ref("/web-profile-3d7fe")
            .push({
              message: this.state.message
            })
            .then(res => {
              console.log('succes',res);  
                this.setState({
                 message:''
                });
                setTimeout(() => {
                   this.setState({
                       loading: false,
                       alert: true
                   }) 
                }, 3000);
                setTimeout(() => {
                    this.setState({
                        alert: false
                    }) 
                 }, 5000);
            })
            .catch(err => {
             console.log(err)
             this.setState({
                loading: false
               });
            });

    }

    render(){
        return(
            <>
                <HomePage alert={this.state.alert} loading={this.state.loading} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </>
        )
    }
}

export default HomePageContainer