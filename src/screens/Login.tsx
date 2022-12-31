import styled from "styled-components";
import { useForm } from "react-hook-form";
import { loggedInVar } from "../apollo";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    background-color: ${(props)=> props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
    position: absolute;
    top:0px;
    z-index:-1
`; 

const Banner = styled.div`
    margin-top:300px;
    width:640px;
    height: 300px;

`;

const Title = styled.p`
    font-size:40px;
    font-weight:700;
    display:flex;
    justify-content: space-between;
    span: last-child {
        font-size:25px;
    }
    align-items:end;
    
`;

const FormContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:10px;
`;
const LoginForm = styled.form`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    input {
        width:80%;
        padding:15px;
        border-radius:4px;
        margin-bottom:10px;
    }
    input:last-child {
        margin-top:20px;
        font-size:17px;
        font-weight:500;
    }
    

`;
interface ILoginF {
    id: string
    password: string
}

function LogIn (){
    const { register, handleSubmit } = useForm<ILoginF>();
    const navigate = useNavigate();
    const loginHanddler = () => {
        loggedInVar(true);
        navigate("/")
    }
    const onvalid = (data:ILoginF) => {
    }
    return (
        <Wrapper>
            <Banner>
                <div>
                    <Title>
                        <span>Login</span>
                        <span>Workout Manager</span>
                    </Title>
                    <hr/>
                </div>
                <FormContainer>
                <LoginForm onSubmit={handleSubmit(onvalid)}>
                    <input
                        placeholder="ID"
                        type="text"  
                        {...register("id", {required:true})}
                         />
                    <input
                        placeholder="Password" 
                        type="password" 
                        {...register("password", {required:true})} />
                    <input type="submit" value="Login" />
                </LoginForm>
                <button onClick={loginHanddler}>Log in</button>
                </FormContainer>
            </Banner>
        </Wrapper>
    )
}

export default LogIn;