import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Table } from "react-bootstrap";

export class Home extends Component {

  constructor()
  {
    super();
    this.state={
      profiles: []
    }
  }
  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/api/profiles')
    .then(response => {
      this.setState({profiles:response.data});
    });
  }

  deleteProfile = async (event, id) => {
    const data = event.currentTarget;

    const res = await axios.delete(`http://127.0.0.1:8000/api/profiles/${id}`)
    {
      data.closest('tr').remove();
      console.log(res);
    }
  }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                  <h1>Profiles</h1>
              </div>
              <div className="col-md-2">
                <a href="/Add" class="btn btn-primary btn-sm px-5">Add</a>
              </div>

            </div>
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                  <th className="text-center">First Name</th>
                  <th className="text-center">#</th>
                  <th className="text-center">Middle Name</th>
                  <th className="text-center">Course</th>
                  <th className="text-center">Last Name</th>
                  <th className="text-center">Year Level</th>
                  <th className="text-center">Sitio</th>
                  <th className="text-center">Barangay</th>
                  <th className="text-center">Municipality</th>
                  <th className="text-center">Province</th>
                  <th className="text-center">Zipcode</th>
                  <th className="text-center">Image</th>
                  <th className="text-center text-uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.profiles.map(profile => {
                      return (
                        <tr key={profile.id}>
                            <td>{profile.id}</td>
                            <td>{profile.fname}</td>
                            <td>{profile.mname}</td>
                            <td>{profile.lname}</td>
                            <td>{profile.course}</td>
                            <td>{profile.year_level}</td>
                            <td>{profile.sitio}</td>
                            <td>{profile.barangay}</td>
                            <td>{profile.municipality}</td>
                            <td>{profile.province}</td>
                            <td>{profile.zipcode}</td>
                            <td>{profile.image}</td>
                            <td>
                                  <Link to={`/Edit/${profile.id}`} className="btn btn-warning btn-sm">Edit</Link>
                                  <button type="button" onClick={(event) => this.deleteProfile(event, profile.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                      )
                    })
                  }
            </tbody>
          </Table>
          </div>
         )
    }
}

export default Home;
