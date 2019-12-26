import React, {Component} from "react";
class Table extends Component {
    constructor(props) {
       super(props)
       this.state = {
          students: [
             { id: 1, назва: 'Wasif', ціна: 21, інформація: 'wasif@email.com' },
             { id: 2, назва: 'Ali', ціна: 19, інформація: 'ali@email.com' },
             { id: 3, назва: 'Saad', ціна: 16, інформація: 'saad@email.com' },
             { id: 4, назва: 'Asad', ціна: 25, інформація: 'asad@email.com' }
          ]
       }
    }
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, назва, ціна, інформація } = student
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{назва}</td>
                 <td>{ціна}</td>
                 <td>{інформація}</td>
              </tr>
           )
        })
     }
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     render() {
        return (
           <div>
              <h1 id='title'>Динамічна таблиця товарів:</h1>
              <table id='students'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
 }
export default Table;