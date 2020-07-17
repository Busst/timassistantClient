import React from 'react'
import SSB from './Components/SelectableSearchBar';
import Menu from './Components/Menu';


class Router extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            placeholder: ''
        }
    }



    render(){
        return(
            <div>
                <Menu/>
                <div style={{width:'70%', margin:'auto', height: '200px'}}>
                    <SSB
                        options={[]}
                        type='Filter'
                    />
                </div>
                
            </div>
        
        );
    }


}

export default Router;