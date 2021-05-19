import React from "react";

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function Searchbox(props) {
  const searchHtml = (
    <div className="sc-search">
      <input
        type="text"
        placeholder="search..."
        onChange={props.handleSearch}
        value={props.searchTerm}
      />
      <label htmlFor="">
        <input
          type="checkbox"
          id="stock"
          name="stock"
          onChange={props.handleStock}
          checked={props.inStock}
        />
        Only show products in stock
      </label>
    </div>
  );
  return searchHtml;
}

function Producttable(props) {
  const products = props.products;
  const searchTerm = props.searchTerm;
  const inStock = props.inStock;
  const productList = [];
  var lastCategory = null;
  products.forEach(function (product) {
    if (
      searchTerm !== "" &&
      product.name.toLowerCase().indexOf(searchTerm) === -1
    ) {
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      productList.push(<ProductCat key={product.category} category={product.category} />);
    }
    productList.push(<Product key={product.name} product={product} />);

    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{productList}</tbody>
    </table>
  );
}

function Product(props) {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

function ProductCat(props) {
    return (
        <tr>
            <th colSpan="2">{props.category}</th>
        </tr>
    );
}

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      inStock: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleStock = this.handleStock.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleStock(e) {
    this.setState({ inStock: e.target.checked });
  }

  render() {
    return (
      <div className="sc">
        <Searchbox
          searchTerm={this.state.searchTerm}
          inStock={this.state.inStock}
          handleSearch={this.handleSearch}
          handleStock={this.handleStock}
        />
        <Producttable
          products={data}
          searchTerm={this.state.searchTerm}
          inStock={this.state.inStock}
        />
      </div>
    );
  }
}

export default SearchComponent;
