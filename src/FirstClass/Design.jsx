import styled from "@emotion/styled"
import profileImage from "./assets/profileImage.jpg"

function Design() {

return (
 <>
   <Body>
   <CardHolder>
   <ProfileImage src={profileImage}/>
   <ProTag>PRO</ProTag>
   <ProName>Muomaife Frederick</ProName>
   <Occupation>Software Engineer</Occupation>
   <Bio>Vestibulum fringilla pede sit amet augue. In hac habitasse platea dictumst.</Bio>
   <ButtonHolder>
   <MessageButton>Message</MessageButton>
   <ConnectButton>Connect</ConnectButton>
   </ButtonHolder>
   </CardHolder>
   </Body>
 </>
  )
}

export default Design

const ConnectButton = styled.div`
width: 45%;
height: 100%;
background-color: #8D1F70;;
color: white;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
`
const MessageButton = styled.div`
width: 45%;
height: 100%;
background-color: white;
border: 1px solid #8D1F70;
color: #8D1F70;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
`

const ButtonHolder = styled.div`
width: 100%;
height: 50px;
margin-top: 30px;
display: flex;
justify-content: space-between;
`

const Bio = styled.div`
text-align: center;
font-size: 14px;
margin-top: 20px;
color:rgb(196, 82, 165);
`

const Occupation = styled.div` 
color: #8D1F70;
`

const ProName = styled.div`
color: #8D1F70;
font-weight: 600;
font-size: 20px;
margin-top: 20px;
 `

const ProTag = styled.div` 
width: 70px;
height: 30px;
border-radius: 4px;
margin-top: 10px;
color: #8D1F70;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
background-color: #F2DFED;
`

const ProfileImage = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: aqua;
object-fit: cover;
`

const CardHolder = styled.div`
width: 300px;
height: 320px;
background-color: white;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
display: flex;
align-items: center;
flex-direction: column;
padding: 20px;
`

const Body = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #FBBBE8;
`