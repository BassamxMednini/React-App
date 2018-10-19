import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>    
                <th>Anzahl</th>
                <th>Name</th>
                <th>Kosten</th>
                <th>Aktion</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.anzahl}</td>
                <td>{row.product}</td>
                <td>{row.cost}€</td>
                <td><button onClick={() => props.removeCharacter(index)}>Entfernen</button></td>
            </tr>
            
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter} 
                />
            </table>
        );
    }
}

export default Table;