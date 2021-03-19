import React from 'react'
import styled from 'styled-components'

const NAV_HEIGHT = 46;
const AVATAR_HEIGHT = 40;
const AVATAR_WIDTH = 40;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-content: center;

  margin: 0px;
  padding 0px;
  height: ${NAV_HEIGHT}px;
  width: 100%;
`;

let NavText = styled.div`
  color: #4a90e2;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
`;

const Badge = styled.div`
  margin: 3px;
  display: flex;
  min-width: 152px;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  border 2px solid #4a90e2;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #4a90e2;
`;

let Loading = () => (
  <Badge>
    <NavText>Loading...</NavText>
  </Badge>
);

let UserBadge = ({user}) => (
  <Badge>
    <NavText>{user.name}</NavText>
  </Badge>
);

let NavBar = ({user}) => (
  <StyledNavBar>
    {user.me ? <UserBadge user={user.me} /> : <Loading />}
  </StyledNavBar>
);

export default NavBar
