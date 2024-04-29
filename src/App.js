
import ProductList from './components/ProductList/ProductList';
import logo from './logo.svg';
import './App.css';

const products = [{
  "id": 1,
  "name": "Lounge Chair",
  "price": 2000,
  "category": "Chairs"
}, {
  "id": 2,

  "name": "Dining Chair",
  "price": 1800,
  "category": "Chairs"
}, {
  "id": 3,
  "name": "Table1",
  "price": 3000,
  "category": "Table"
}, {
  "id": 4,
  "name": "Table2",
  "price": 3200,
  "category": "Table"
}, {
  "id": 5,
  "name": "Table3",
  "price": 3100,
  "category": "Table"
}, {
  "id": 6,
  "name": "Dining Top",
  "price": 900,
  "category": "Top"
}]

function App() {
  return (
    <div className="App">
      
      <ProductList products={products} />

    </div>
  );
}

export default App;
