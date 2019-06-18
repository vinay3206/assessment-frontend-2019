import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Image, Menu, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import COLOR from '../colors'

const HeaderContainer = styled(Grid)`
  background-color: ${COLOR.HEADER_BACKGROUND};
  height: 80px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  z-index: 3;
`
const LogoContainer = styled(Grid.Column)`
  padding-top: 1em !important;
  padding-left: 3em !important;
  height: 50px;
`

const MenuColumn = styled(Grid.Column)`
  padding-top: 0 !important;
`

const StyledSegment = styled(Segment)`
  background-color: transparent !important;
`
const StyledImage = styled(Image)`
  height: 50px !important;
`

class SiteHeader extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <HeaderContainer>
        <LogoContainer width={2}>
          <Link to="/">
            <StyledImage
              src="https://www.slatestudio.com/static/media/slate-s.157712b1.svg"
              size="small"
            />
          </Link>
        </LogoContainer>
        <MenuColumn width={10}>
          <StyledSegment inverted>
            <Menu inverted pointing secondary>
              <Link to="/">
                <Menu.Item name="Home" active={pathname === '/'} />
              </Link>
              <Link to="/create">
                <Menu.Item name="Create" active={pathname === '/create'} />
              </Link>
            </Menu>
          </StyledSegment>
        </MenuColumn>
      </HeaderContainer>
    )
  }
}

export default withRouter(SiteHeader)
