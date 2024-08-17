import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { FILTER_OPTION } from '../dependenses/const';
import App from './app';
import userEvent from '@testing-library/user-event';

describe('Component: App', () => {

  it('should render correctly', () => {

    render(
      <App />
    );
    
    expect(screen.getByPlaceholderText("What needs to be done?")).toBeInTheDocument();
    expect(screen.getByTestId('TodosWrapper').childNodes.length).toBe(0);

    expect(screen.getByLabelText(FILTER_OPTION.ALL)).toBeInTheDocument();
    expect(screen.getByLabelText(FILTER_OPTION.ACTIVE)).toBeInTheDocument();
    expect(screen.getByLabelText(FILTER_OPTION.COMPLITED)).toBeInTheDocument();
    expect(screen.getByText('Clear completed')).toBeInTheDocument();
  });

  it('should add new todo when pull Enter', () => {

    render(
      <App />
    );

    userEvent.type(screen.getByTestId('field'), 'New todo');
    expect(screen.getByTestId('field')).toHaveValue('New todo');

    userEvent.keyboard('{Enter}')

    expect(screen.getByTestId('field')).toHaveValue('');
    expect(screen.getByTestId('TodosWrapper').childNodes[0]).toHaveTextContent('New todo');
    expect(screen.getByText('1 items left')).toBeInTheDocument();
  });

  it(`should add new todo when click on 'AddTodoButton'`, () => {

    render(
      <App />
    );

    userEvent.type(screen.getByTestId('field'), 'New todo');
    expect(screen.getByTestId('field')).toHaveValue('New todo');

    userEvent.click(screen.getByTestId('addTodoButton'))

    expect(screen.getByTestId('field')).toHaveValue('');
    expect(screen.getByLabelText('New todo')).toBeChecked();
    expect(screen.getByText('1 items left')).toBeInTheDocument();
  });

  it('should todo to be unchecked when it clicked', () => {

    render(
      <App />
    );

    userEvent.type(screen.getByTestId('field'), 'New todo');
    userEvent.click(screen.getByTestId('addTodoButton'))
    userEvent.click(screen.getByText('New todo'))

    expect(screen.getByLabelText('New todo')).not.toBeChecked()
    expect(screen.getByText('New todo')).toHaveStyle('text-decoration: line-through')
  });

  it(`shouldn't add new todo when field is empty`, () => {

    render(
      <App />
    );

    expect(screen.getByTestId('field')).toHaveValue('');

    userEvent.click(screen.getByTestId('addTodoButton'))

    expect(screen.getByTestId('field')).toHaveValue('');
    expect(screen.getByTestId('TodosWrapper').childNodes.length).toBe(0);
    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });

  it(`should 'All' input to be checked when it clicked`, () => {

    render(
      <App />
    );

    expect(screen.getByLabelText(FILTER_OPTION.ALL)).toBeChecked();
    expect(screen.getByLabelText(FILTER_OPTION.ACTIVE)).not.toBeChecked();

    userEvent.click(screen.getByLabelText(FILTER_OPTION.ACTIVE));
    expect(screen.getByLabelText(FILTER_OPTION.ALL)).not.toBeChecked();
    expect(screen.getByLabelText(FILTER_OPTION.ACTIVE)).toBeChecked();

  });

  it(`should to be only one todo checked when change the filter to 'Active'`, () => {

    render(
      <App />
    );

    userEvent.type(screen.getByTestId('field'), 'New todo');
    userEvent.click(screen.getByTestId('addTodoButton'))

    userEvent.type(screen.getByTestId('field'), 'New todo2');
    userEvent.click(screen.getByTestId('addTodoButton'));


    expect(screen.getByText('2 items left')).toBeInTheDocument();

    userEvent.click(screen.getByText('New todo'));
    userEvent.click(screen.getByLabelText(FILTER_OPTION.ACTIVE));

    expect(screen.queryByText('New todo')).not.toBeInTheDocument();
    expect(screen.getByText('New todo2')).toBeInTheDocument();
    expect(screen.getByTestId('TodosWrapper').childNodes.length).toBe(1);
    expect(screen.getByText('1 items left')).toBeInTheDocument();
  });

  it(`should reset all checked todos and change filter to 'All'`, () => {

    render(
      <App />
    );

    userEvent.type(screen.getByTestId('field'), 'New todo');
    userEvent.click(screen.getByTestId('addTodoButton'))
    userEvent.click(screen.getByText('New todo'));

    userEvent.type(screen.getByTestId('field'), 'New todo2');
    userEvent.click(screen.getByTestId('addTodoButton'));
    userEvent.click(screen.getByText('New todo2'));

    userEvent.click(screen.getByTestId('clearButton'))

    expect(screen.queryByText('New todo')).not.toBeInTheDocument();
    expect(screen.queryByText('New todo2')).not.toBeInTheDocument();
    expect(screen.getByTestId('TodosWrapper').childNodes.length).toBe(0);
    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });
});