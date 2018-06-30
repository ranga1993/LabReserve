import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import Reservation_2 from "./Reservation_2";
import axios from 'axios';
var dateFormat = require('dateformat');

class AllReservations extends Component{
    constructor(props){
        super(props);

        this.state = {
            reservedata: [],
            loading: false
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.setState({
            loading: true
        })

        axios.get('http://localhost:5000/getAllReservations')
            .then((response) => {
                var data = response.data.result;
                var l = data.length;

                for(var i = l-1; i > -1; i--){
                    let myobj = {};
                    myobj.labName = data[i].labName;
                    var date = dateFormat(data[i].date, "fullDate");
                    myobj.date = date;
                    myobj.time = data[i].time;
                    myobj.subjectName = data[i].subjectName;
                    this.state.reservedata.push(myobj);
                }
                this.setState({
                    loading: false
                })
            });
    }

    render(){
        const data = this.state.reservedata;
        return(
            <div>
                <Reservation_2/>
                <div className="card mb-3">
                    <div className="card-header">
                        Current Lab Reservations
                    </div>
                    <div className="card-body">
                        <ReactTable
                            data={data}
                            columns={[
                                {
                                    Header: this.props.data,
                                    columns: [
                                        {
                                            Header: "Lab Name",
                                            accessor: "labName"
                                        },
                                        {
                                            Header: "Date",
                                            accessor: "date"
                                        },
                                        {
                                            Header: "Time Slot",
                                            accessor: "time"
                                        },
                                        {
                                            Header: "Subject Name",
                                            accessor: "subjectName"
                                        }
                                    ]
                                }
                            ]}
                            defaultPageSize={5}
                            className="-striped"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default AllReservations;