import React from 'react';
import styled from "styled-components";

const TheTopBar = styled.div`
  width: 100%;
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	position: fixed;
	height: 44px;
	background-color: #333;
	@media (min-width: 1280px) {
	  width: 1280px;
	}
	`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: none;
	align-items: none;
	flex-direction: row;
	color: #fff;
	letter-spacing: 1px;
	padding: 0 10px;
	@media (min-width: 1280px) {
	  width: 1280px;
	  }
	`;

const ContainerLeft = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
	span {
	  cursor: pointer;
	  margin-right: 25%;
	  font-weight: bold;
	  }
	
	`;
const ContainerCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex: 3;
	font-size: 9px;
	span {
	  cursor: pointer;
	  margin-right: 5%;
	  :last-child {
	   margin-right: 0;
	    }
	  :hover{
	    text-decoration: underline;
	    }
	  }
	`;
const ContainerRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
	font-weight: bold;
	span{
	  cursor: pointer;
	  }
  `;
  
  const TopBar = () => {
    return (
<TheTopBar>
<Container>
<ContainerLeft>
<span>Topics</span><span>Search</span>
</ContainerLeft>
<ContainerCenter>
<span>General</span><span>BrownBag</span><span>Random</span><span>Music</span><span>Announcements</span>
</ContainerCenter>
<ContainerRight>
<span>Log In</span>
</ContainerRight>
</Container>
</TheTopBar>
    )
}
export default TopBar;