import React, { Component } from 'react'
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
                  <th class="text-center">#</th>
                  <th class="text-center">First Name</th>
                  <th class="text-center">Middle Name</th>
                  <th class="text-center">Last Name</th>
                  <th class="text-center">Course</th>
                  <th class="text-center">Year Level</th>
                  <th class="text-center">Sitio</th>
                  <th class="text-center">Barangay</th>
                  <th class="text-center">Municipality</th>
                  <th class="text-center">Province</th>
                  <th class="text-center">Zipcode</th>
                  <th class="text-center">Image</th>
                  <th class="text-center text-uppercase">Actions</th>
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
                                  <a href="/Edit" class="btn btn-warning btn-sm mr-5">Edit</a>
                                  <button type="button" onClick={(event) => this.deleteProfile(event, profile.id)} class="btn btn-danger btn-sm">Delete</button>
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
