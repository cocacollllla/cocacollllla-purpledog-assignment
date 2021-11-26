const theme = {
  background: '#FFFEFC',
  flexMixin: (direction = 'row', align = 'center', justify = 'center') => `
  display:flex;
  flex-direction:${direction};
  align-items:${align};
  justify-content:${justify}
  `,
  fontTitle: "'Alata', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
};

export default theme;
