import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import styled from 'styled-components';
import {ContentsGet} from '../axios';

const Detail = () => {
  const [contents, setContents] = useState([]);
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    async function callAPI(){ 
      const res = await ContentsGet(id);      
      setContents(res.data)  
    }
    callAPI();
  }, [id]); 

  const contentsArr = Object.entries(contents);

  contentsArr.forEach(cont => {
    if(cont[0] === 'title'){
      let tmp = cont;
      contentsArr.splice(contentsArr.indexOf(cont), 1);
      contentsArr.unshift(tmp);
      return contentsArr;
    }
    if(cont[0] === 'text'){
      let tmp = cont;
      contentsArr.splice(contentsArr.indexOf(cont), 1);
      contentsArr.push(tmp);
      return contentsArr;
    }
  });


  const exception = (exe) => {
    if(exe[0] === 'kids') {
      return (
        <Tablebody>
          {exe[1].map((m, idx) => {
            return <KidsList key={idx}>{m}</KidsList>
          })}
        </Tablebody>
      )
    } else if(exe[0] === 'url') {
      return <Tablebody><a href={exe[1]}>{exe[1]}</a></Tablebody>
    } else if(exe[0] === 'text') {
      return <Tablebody dangerouslySetInnerHTML={ {__html: exe[1]} }></Tablebody>
    } else {
      return <Tablebody>{exe[1]}</Tablebody>
    }
  }
  
  return (
    <Container>
      {contentsArr.map((cont, idx) => (
        <Table key={idx}>
          <Tablehead>{cont[0]}</Tablehead>
          {exception(cont)}
        </Table>
      ))} 
    </Container>
  );     
};

export default Detail;

const Container = styled.div`
  width:1000px;
  margin:30px auto;
  border-bottom:1px solid ${props => props.theme.borderColor};
`;

const Table = styled.div`
  display:grid;
  grid-template-columns:150px 1fr;
  border-top: 1px solid ${props => props.theme.borderColor};
  border-left: 1px solid ${props => props.theme.borderColor};  
`;

const Tablehead = styled.div`
  padding:15px;
  font-size:1.1rem;
  font-weight:bold;
  border-right: 1px solid ${props => props.theme.borderColor};   
`;

const Tablebody = styled.div`
  ${({ theme }) => theme.flexMixin('row', 'center', 'flex-start')};
  flex-wrap:wrap;
  padding:15px;
  line-height:20px;
  border-right: 1px solid ${props => props.theme.borderColor};    
`;

const KidsList = styled.div`
  margin-right:10px;
`;






