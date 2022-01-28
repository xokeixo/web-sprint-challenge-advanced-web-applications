import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const articleNoAuthor = {
    headline: 'The headline',
    author: '',
    summary: '',
    body: '',
    image: 0,
    createdOn: Date.now(),
    id:''
}

const article = {
    headline: 'The headline',
    author: 'The author',
    summary: '',
    body: '',
    image: 0,
    createdOn: Date.now(),
    id: ''
}

test('renders component without errors', ()=> {
    render(<Article article={article}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={article}/>)
    
    const headline = screen.queryAllByTestId(/headline/i)
    const author = screen.queryAllByTestId(/author/i)

    expect(headline).toHaveTextContent(/The headline/i)
    expect(author).toBeInTheDocument(/The author/i)
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={article}/>)

    const author = screen.queryAllByTestId(/author/i)

    expect(author).toBeInTheDocument(/Associated Press/i)
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn()
    render(<Article handleDelete={handleDelete}article={article}/>)
    
    const deleteButton = screen.queryAllByTestId('deleteButton')
    userEvent.click(deleteButton)

    expect(handleDelete.mock.calls).toHaveLength(1)

});

//Task List: 
//1. Complete all above tests. Create test article data when needed.