import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import styled from 'styled-components';

const CATEGORY_INFO = [
  {id:1, category:"topstories"},
  {id:2, category:"newstories"},
  {id:3, category:"askstories"},
  {id:4, category:"showstories"},
  {id:5, category:"jobstories"}
];


const category_llst = CATEGORY_INFO.sort(function (a, b) {
  let x = a.category.toLowerCase();
  let y = b.category.toLowerCase();
  if (x < y) {
    return 1;
  } else if (x > y) {
    return -1;
  } else {
    return 0;
  }
});


const Nav = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClickCategory = (category) => {
    navigate(`/${category}`, {state:{cate: category}});
  }

  let currentMenu = location.pathname.split('/');

  return (
    <Navbar>
      <ContentsBox>
      {category_llst.map((n, index) => (
        <NavCategory onClick={() => {handleClickCategory(n.category)}} key={n.id} isActive={n.category === currentMenu[1]}>{n.category}</NavCategory>
      ))}
      </ContentsBox>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.div`
  padding:15px 0;
  background-color:${props => props.theme.mainColor}
`;

const ContentsBox = styled.div`
  width:1000px;
  margin:0 auto;
  ${({ theme }) => theme.flexMixin('row', 'center', 'space-around')};
`;

const NavCategory = styled.div`
  cursor:pointer;
  color: ${props => {
    return props.isActive ? props.theme.onColor : props.theme.fontColor;
  }};
  font-weight:bold;
  font-size:1.2rem;
`;
