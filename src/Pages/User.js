import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class User extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
  <div className="jumbotron">
    <h1> Users</h1>
  </div>
  <div className="container">
    <table className="table table-bordered  table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Mobile</th>
          <th scope="col">Vehicle</th>
          <th scope="col">Licence</th>
          <th scope="col">CNIC</th>
          <th scope="col">Approval</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Ali</td>
          <td>031234556</td>
          <td><img /></td>
          <td><img /></td>
          <td><img /></td>
          <td>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Approve
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Deny
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Pawan</td>
          <td>12344566</td>
          <td><img /></td>
          <td><img /></td>
          <td><img /></td>
          <td>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Approve
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Deny
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Zaheer</td>
          <td>032345718</td>
          <td><img /></td>
          <td><img /></td>
          <td><img /></td>
          <td>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Approve
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Deny
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      </div>
    )
  }
}
