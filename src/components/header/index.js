import React from 'react'

import { Container } from './styles'

class Header extends React.Component {
  render(){
    return(

      <Container>
        <div className="content">
          <div className="headerLeft">
            <span>              
              Spotify
            </span>
          </div>

        </div>
      </Container>
    );
  }
}
export default Header;
