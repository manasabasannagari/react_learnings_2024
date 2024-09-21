const parent = React.createElement('div',{
    id:'parent'
}, React.createElement('div',{
    id:'child'
}, [React.createElement('h2',{},'Hello we are siblings'),React.createElement('h2',{},'Hello we are siblings') ]))

// const heading = React.createElement('div',{
//     id:'heading',
//     xyz:'123'
// }, parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);
