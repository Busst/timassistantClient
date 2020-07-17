import React from 'react'
// import { Icon } from 'semantic-ui-react'


class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            placeholder: ''
        }
    }

    handleSettingsRoute = () => {
        window.location.assign('Settings')
    }
    render(){
        return(
            <div style={{background: '#1c1a15', height: '50px', marginBottom: '20px'}}>
                <img src="setting.png" alt="Settings" width="40" height="40" style={{float: 'right', cursor:'pointer', marginTop:'5px',marginRight:'15px'}} onClick={this.handleSettingsRoute} name='Settings'></img>
            </div>
        
        );
    }
}

export default Menu;