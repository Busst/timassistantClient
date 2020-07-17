import React from 'react'
 
import Select from 'react-select';

class DropDown extends React.Component {


    constructor(props){
        super(props)
        
        this.state = {
            options: props.options,
            selected: props.options[0],
            type: props.type
        }
    }



    handleChange = (e) => {
        this.setState({ selected: e});
        // this.props.passState(e, this.state.type)
    };

    handleInputChange = (e) => {
        
        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then(res => res.json()).then((data) => {
            
        // }).catch(console.log);
    }

    render(){
        return (
            <form style={{height: '100%'}}>
                
                <label style={{display: 'block',
                      margin: '0 0 .28571429rem 0',
                      fontSize: '.92857143em',
                      fontWeight: '700',
                      textTransform: 'none'
                    }}>
                    {this.state.type}
                </label>
                
                <Select
                    value={this.state.selected}
                    onChange={this.handleChange}
                    options={this.state.options}
                    onInputChange={this.handleInputChange}
                />
            </form>
        )
    }


}

export default DropDown;