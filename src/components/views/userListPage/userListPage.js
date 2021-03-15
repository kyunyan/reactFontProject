import React, {useEffect, useState} from "react";
import { findUserList } from "../../../_actions/user_actions";
import axios from 'axios'
import { Row, Col, Divider } from 'antd';
import { useDispatch } from "react-redux";

function UserListPage(){
    const dispatch = useDispatch();
    const [UserList, setUserList] = useState([]);

    const url = "http://localhost:8080"
    useEffect(() => {
        // axios.get(url+`/user/findUserList`)
        // .then(response => {  debugger;
        //     setUserList(response.data);
        // })
        // .catch(err => alert(err))
        dispatch(findUserList())
            .then(response => {
                setUserList(response.payload);

            })
    },[]);

    const gridMain = UserList.map((userInfo) => {
        return( 
          <Row key={userInfo.id} >
            <Col span={4} order={3}>
                {userInfo.userID}
            </Col>
            <Col span={4} order={2}>
                {userInfo.userNm}
            </Col>
            <Col span={5} order={1}>
                {userInfo.userAge}
            </Col>
         </Row>
        )
    })

    return (
        <div style={{width: '100%', padding: '3rem 4rem'}}>
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <Divider orientation="left">List</Divider>
        </div> 
            <Row>
                <Col span={4} order={3} >
                    유저아이디
                </Col>
                <Col span={4} order={2} >
                    유저이름
                </Col>
                <Col span={4} order={1}>
                    나이
                </Col>
            </Row>
        <br />
        {gridMain}
       </div>
    )
}

export default UserListPage;