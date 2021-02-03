import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, InputGroup, FormControl, Button} from "react-bootstrap";
function App()
{

  /* This is example of how to fetch data from API */
  const [searchData, setSearchData] = useState('');
  const [type, setType] = useState(null);


    const onFormChange = (e) => {
        console.log(e.target.value);
        setSearchData(e.target.value);
    }

    const submitSearchData = () => {
        if(type === null || searchData==='') {
            alert('please fill in all fields provided');
            return;
        }

        fetch('/lrPropertySearch', {
            body: {
                searchData,
                type
            },
            method: 'POST'
        }).then(response => console.log(response));
        setType(null);
        setSearchData('');
    }

  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand href="#home">GetAgent Fullstack Developer Test</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Done By: <a href="#">Ian Matthews</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <br/>
      <br/>
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="property Id / postal code / street"
                    aria-label="property_id"
                    aria-describedby="basic-addon1"
                    value={searchData}
                    onChange={(e) => onFormChange(e)}
                />
            </InputGroup>
            <div>
                <label htmlFor="property id">Property id</label>
                &nbsp;
                <input type="checkbox" name={'property id'} value={'property id'} onClick={() => type !== 'property' ? setType('property') : setType(null)} checked={type === 'property'}/>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <label htmlFor="postalcode">Postal Code</label>
                &nbsp;
                <input type="checkbox" name={'postalcode'} value={'postalcode'} onClick={() => type !== 'postal'? setType('postal') : setType(null)} checked={type === 'postal'} />
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <label htmlFor="street">Street</label>
                &nbsp;
                <input type="checkbox" name={'street'} value={'street'} onClick={() => type !=='street' ? setType('street'): setType(null)} checked={type === 'street'}/>
            </div>

            <Button variant={'primary'} onClick={submitSearchData}>Submit</Button>
        </div>
    </div>
  );
}

export default App;
