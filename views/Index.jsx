const React = require('react');

class Index extends React.Component {
    render(){
        
        return (
            <div>
           
            <ul>
                {this.props.pokemon.map((item, i)=>{
                    return (
                        <h2>
                            <a href={`/pokemon/${item,i}`}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </a>
                        </h2>
                    );
                })}
            </ul>
            </div>
        )
    }
}

module.exports = Index;