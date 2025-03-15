import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Index = () => {
    const [leaveDetail,setleaveDetail] = useState([]);

    function getUserData(){
        axios.get("https://67d2a19190e0670699be721d.mockapi.io/api/v1/Res")
        .then(res=>{
            console.log(res.data);
            setleaveDetail(res.data);
        })
        .catch(err=> console.log(err))
    }
    useEffect(()=>{
        getUserData();
    },[]) 
  return (
    <>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Sr. No</th>
                <th>Code</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Leave Reason</th>
                <th>Total Days</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
               leaveDetail && leaveDetail.map((data,ind)=>{
                  return (<tr key={++ind}>
                             <td>{++ind}</td>
                             <td>{data.EmpCode}</td>
                             <td>{data.EmpName}</td>
                             <td>{data.Designation}</td>
                             <td>{data.Department}</td>
                             <td>{data.LeaveReason}</td>
                             <td>{data.TotalDays}</td>
                             <td>
                                <button><Link to={`/edit-leavereq/${data.EmpLeaveReqid}`}> Edit </Link></button>
                                <button>Delete</button>
                             </td>
                        </tr>
               )})
            }
        </tbody>
      </table>
    </>
  )
}

export default Index
