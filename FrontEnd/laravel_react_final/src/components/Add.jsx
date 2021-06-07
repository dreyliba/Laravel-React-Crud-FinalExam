import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export class Add extends Component {
    state = {
        fname: '',
        mname: '',
        lname: '',
        course: '',
        year_level: '',
        sitio: '',
        barangay: '',
        municipality: '',
        province: '',
        zipcode: '',
        image: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveProfile = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/profiles', this.state, {
            headers: {
                'Content-Type': 'application/json',
            }
        }); 
        if(res.data.message === 200)
        {
            console.log(res.data.message);
            this.setState({
                fname: '',
                mname: '',
                lname: '',
                course: '',
                year_level: '',
                sitio: '',
                barangay: '',
                municipality: '',
                province: '',
                zipcode: '',
                image: '',
            });
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Profile
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <form onSubmit={this.saveProfile}>
                                    
                                    <div className="form-group mb-3">
                                        <label>First Name</label>
                                        <input type="text" name="fname" onChange={this.handleInput} value={this.state.fname} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Middle Name</label>
                                        <input type="text" name="mname" onChange={this.handleInput} value={this.state.mname} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Last Name</label>
                                        <input type="text" name="lname" onChange={this.handleInput} value={this.state.lname} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Course</label>
                                        <input type="text" name="course" onChange={this.handleInput} value={this.state.course} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Year Level</label>
                                        <input type="text" name="year_level" onChange={this.handleInput} value={this.state.year_level} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Sitio</label>
                                        <input type="text" name="sitio" onChange={this.handleInput} value={this.state.sitio} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Barangay</label>
                                        <input type="text" name="barangay" onChange={this.handleInput} value={this.state.barangay} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Municipality</label>
                                        <input type="text" name="municipality" onChange={this.handleInput} value={this.state.municipality} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Province</label>
                                        <input type="text" name="province" onChange={this.handleInput} value={this.state.province} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Zipcode</label>
                                        <input type="text" name="zipcode" onChange={this.handleInput} value={this.state.zipcode} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Image</label>
                                        <input type="text" name="image" onChange={this.handleInput} value={this.state.image} className="form-control" />
                                    </div>
                                    <div className="pt-3 px-2">
                                        <button type="SUBMIT" className="btn btn-primary">Add Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Add;
