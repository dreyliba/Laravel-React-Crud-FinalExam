import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export class Edit extends Component {
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

    async componentDidMount() {
        const profile_id = this.props.match.params.id;

        const res = await axios.get(`http://127.0.0.1:8000/api/profiles/${profile_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                fname: res.data.profile.fname,
                mname: res.data.profile.mname,
                lname: res.data.profile.lname,
                course: res.data.profile.course,
                year_level: res.data.profile.year_level,
                sitio: res.data.profile.sitio,
                barangay: res.data.profile.barangay,
                municipality: res.data.profile.municipality,
                province: res.data.profile.province,
                zipcode: res.data.profile.zipcode,
                image: res.data.profile.image,
            });
        }
    }

    updateProfile = async (e) => {
        e.preventDefault();

        const profile_id = this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/profiles/${profile_id}`, this.state)

        if(res.data.status === 200)
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
                                <h4>Edit Profile
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateProfile}>
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
                                    <div className="card-footer">
                                        <div className="pt-2">
                                            <button type="submit" className="btn btn-primary btn-sm">Update Profile</button>
                                        </div>
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

export default Edit;
