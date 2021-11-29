import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {CategoryIdGet} from '../axios';

const CategoryId = () => {
  const [cate, setCate] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state.cate;

  useEffect(() => {
    async function callAPI(){
      const res = await CategoryIdGet(category);      
      setCate(res.data)  
    }
    callAPI();
  }, [category]);

  const handleclickId = (id) => {
    navigate(`/${category}/${id}`, {state:{id: id}});
  }

  return (
    
  <Container>
    <CategoryIdList>
      {cate.map((n, idx) => (
        <IdList onClick={() => {handleclickId(n)}} key={idx}>{n}</IdList>
      ))}
    </CategoryIdList>
    </Container>
  );
};


export default CategoryId;

const Container = styled.div`
  width:1000px;
  margin:30px auto;
  padding-bottom: 100px;
`;

const CategoryIdList = styled.div`
  display:grid;
  grid-template-columns:repeat(8, 1fr);
  column-gap:1rem;
  row-gap:1rem;
`;

const IdList = styled.div`
  padding:15px 0;
  border:1px solid ${props => props.theme.borderColor};
  border-radius:8px;
  font-size:1.2rem;
  text-align:center;
  cursor:pointer;
`;

