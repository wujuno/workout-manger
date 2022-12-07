import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
    display:grid;
    grid-template-columns: repeat(5,1fr);
    padding:25px 30px;
    background-color:white;
`;
//logo
const Logo = styled.div`
    text-align:center;
    font-size:20px;
    font-weight:700;
    padding: 5px 0;
`;
//items
const Items = styled.ul`
    grid-column: 2 / span 3;
`;
const Item = styled.li`
    display:grid;
    grid-template-columns: repeat(7,1fr);
    padding: 10px 0
`;
//identification
const Validation = styled.div`
    display:grid;
    grid-template-columns: repeat(2,100px);
    grid-gap: 1rem;
    text-align:center;
`;
const SignUp = styled.div`
    background-color:black;
    color:white;
    padding: 10px;
`;
const LoginIn = styled.div`
    padding: 10px;
`;


function Header () {
    return (
        <Wrapper>
            <Link to="/">
                <Logo>Workout Manager</Logo>
            </Link>
            <Items>
                <Item>
                <Link to="record"><span>Record</span></Link>
                <Link to="watch"><span>Watch</span></Link>
                </Item>
            </Items>
            <Validation>
                <Link to="login">
                    <LoginIn>Log in</LoginIn>
                </Link>
                <Link to="signup">
                    <SignUp>Sign up</SignUp>
                </Link>
            </Validation>
        </Wrapper>
    )
}

export default Header; 