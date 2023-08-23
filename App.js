import React from 'react';
import Input from './Components/Input';
import Button from './Components/Button';
import Select from './Components/Select';
import Table from './Components/Table';
import Card from './Components/Card';

const App = (props) => {
  // Example usage of components with props
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const tableData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 28 },
  ];

  return (
    <div>
      <Input type="text" value="" onChange={() => {}} />
      <Button label="Click Me" onClick={() => {}} />
      <Select label="Select an option" value="" onChange={() => {}} optionsList={options} />
      <Table data={tableData} />
      <Card id={1} userName="asim" age={22} institute="UBIT" isActive={true} category="Student" />
    </div>
  );
};

export default App;
