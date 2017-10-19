const cElm = React.createElement;

const MyTitle = function(props) {
  return cElm('div', null, cElm('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return cElm(
    'div',
    { id: 'my-first-component', color: 'YellowGreen' },
    cElm(MyTitle, { title: 'Game Of Throne', color: 'GreenYellow' }),
    cElm(MyTitle, { title: 'Friends', color: 'LimeGreen' }),
    cElm(MyTitle, { title: 'KingsMan', color: 'peru' })
  );
};

ReactDOM.render(cElm(MyFirstComponent), document.getElementById('app'));
