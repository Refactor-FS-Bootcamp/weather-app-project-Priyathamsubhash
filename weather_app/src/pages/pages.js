import styled from "styled-components";
export const HeaderWrapperStyled = styled.div`
.ctybtn {
    background-color:  ${(props) => (props.mode === "Dark" ? "#917941" : "#633ea5")};
    color: ${(props) => (props.mode === "Dark" ? "black" : "white")};
    border: none;
    border-radius: 5px;
    height: 40px;
    margin-top:6vh;
    margin-right:6vh;
    padding: 10px;
    width: 150px;
    font-size: 17px;
  }
  .homeContent {
    margin-left: 15%;
    height: calc(100vh-10vh);
    padding:10px;
    flex-wrap: wrap;
  }
 
  .card-fav{
    display: flex;
    flex-direction: column;
    width:250px;
    margin: 10px 0 0 10px;
    height:auto;
    border: 1px solid lightgrey;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.6);
    padding:10px;
    border-radius:10px;
   border-color:${(props) => (props.mode === "Dark" ? "black" : "")};
   background:${(props) => (props.mode === "Dark" ? "#917941" : "")};
   color:${(props) => (props.mode === "Dark" ? "white" : "")};
  }
  .card-fav-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Times New Roman', Times, serif;
      font-size: large;
      font-weight: 800;
  }
  .card-fav-content{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: flex-start;
  }
  
  div.card-fav-content>*{
  margin-bottom:10px;
  }
  
  .fav-card>*{
    padding:50px;
  }
  .home{
    height:100vh;
   
    background:${(props) => (props.mode === "Dark" ? "black" : "white")};
    color:${(props) => (props.mode === "Dark" ? "white" : "black")}
  }
  
`;


export const CityWrapperStyled = styled.div`
.para {
    margin-bottom: 0;
  }
  .close-mark{
    font-size: x-large;
    margin-right: 10px;
  }
  .cityHead{
    font-size: x-large;
  }
  .citypara{
    padding: 15px;
  }
  .cityContent {
    height: 90vh;
    border-radius: 15px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    margin-left: 40px;
    margin: 3% 6% 0 10%;
    overflow-y:scroll;
   
    box-sizing:content-box;
    background: ${(props) => (props.mode === "Dark" ? "#917941" : "white")};
   
  }
  .cityContent::-webkit-scrollbar{
    display:none;
  }
  .cityContentHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    /* width: 30vw; */
    padding: 20px;
    margin-bottom: 0;
  }
  .citySideHead {
    display: flex;
    justify-content: space-between;
    height: 40px;
    /* background-color: yellow; */
    width: 100%;
    padding: 10px;
    font-weight: 650;
    /* background:rgb(250, 244, 244); */
  }
  .citySideMainContent {
    margin-top: 23vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .citySideName {
    font-weight: 600;
    font-size: 20px;
  }
  .city-body{
    height:100vh;
    background:${(props) => (props.mode === "Dark" ? "black" : "white")};
  }
  .cityContainer {
    height: 50%;
    display: flex;
    background:${(props) => (props.mode === "Dark" ? "black" : "white")};
  }
  
  
  .citySide {
    height: 90vh;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    background: ${(props) => (props.mode === "Dark" ? "#917941" : "white")};
    width: 50vw;
    margin-left: 50px;
    
  }
  
  .city {
    background:${(props) => (props.mode === "Dark" ? "black" : "white")};;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* justify-content: space-between; */
    width: 30vw;
  }
  .cityNameContentContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    margin-top: 0;
    margin: 3% 1.5%;
    padding: 20px;
    font-weight: 600;
    height: 70px;
    background: rgb(250, 244, 244);
  }
  @media screen and (max-width: 400px) {
    .city {
      width: 100vh;
      height: 100vh;
      background: ${(props) => (props.mode === "Dark" ? "black" :  "white")};
      
    }
    .citySide{
       width:25vh;
       margin-left:0;
       
       padding:0;
       margin-right:2vh;
    }
    .cityContent{
        width:25vh;
      
    }
    .cityContent {
        /* border:0.2px solid black; */
        /* width:25%;  */
        height: 90vh;
        border-radius: 15px;
        box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
        
       margin:0;
       width:20vh;
      }
    .citySideMainContent {
        margin-top: 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .cityContentHead {
       
        
        margin: 10px;
        /* width: 30vw; */
        padding: 20px;
        margin-bottom: 0;
      }
      .cityNameContentContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 0.2px solid #e5e5e5;
        border-radius: 4px;
        background: rgb(250, 244, 244);
        overflow-x:scroll;
      }
      .citySide{
        margin-top:4vh;
        width:30vh;
        height:90vh;
      }
  }
`;