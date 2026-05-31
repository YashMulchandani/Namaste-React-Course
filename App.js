import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading = React.createElement('h1', {id: 'heading', xyz: 'abc'}, 'Hello Yash From React!'); // createElement is a method of React which is used to create a React Element. It takes three arguments, the first one is the type of the element, the second one is the props and the third one is the children. The type can be a string or a function. The props is an object which contains the attributes of the element. The children can be a string or an array of React Elements. 
// console.log(heading); // heading is a JavaScript object which is called React Element. It is not HTML. It is a lightweight description of what we want to see on the screen. It is a plain JavaScript object which has type, props and key.
// const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot method takes a DOM element as an argument and returns a root object. It is a method of ReactDOM which is used to create a root object. The root object is used to render the React Element to the DOM.
// root.render(heading); // render method takes a React Element and renders it to the DOM. It is a method of ReactDOM which is used to render the React Element to the DOM. It takes two arguments, the first one is the React Element and the second one is the container where we want to render the React Element. In our case, we are rendering the heading React Element to the root container.



const parent = React.createElement(
    'div', 
    {id: 'parent'}, 
    [
        React.createElement
        (
            'div', 
            {id: 'child1', key: 'child1'}, 
            [
                React.createElement('h1', {id: 'heading1', key: 'heading1'}, 'I am h1 tag'),
                React.createElement('h2', {id: 'heading2', key: 'heading2'}, 'I am h2 tag')
            ]
        ),
        React.createElement
        (
            'div', 
            {id: 'child2', key: 'child2'}, 
            [
                React.createElement('h3', {id: 'heading3', key: 'heading3'}, 'I am h3 tag'),
                React.createElement('h4', {id: 'heading4', key: 'heading4'}, 'I am h4 tag')
            ],
        )
    ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);