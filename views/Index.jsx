const React = require('react');

class Index extends React.Component {
    render() {
      return (
        <div style={myStyle}>
          <h1>Pokemon Index Page</h1>
          <ul>
            {this.props.pokemon.map((item, i) => {
              return (
                <p>
                  <h3>
                    <a href={`/pokemon/${item.id}`}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </a>
                  </h3>
                </p>
              );
            })}
          </ul>
          <nav>
            <a href="/pokemon/new"><h3>Create a New Pokemon</h3></a>
          </nav>
        </div>
      );
    }
  }
  module.exports = Index;