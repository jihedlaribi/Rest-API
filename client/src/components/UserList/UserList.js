import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../userAction/userAction'
import UserCard from '../UserCard/UserCard'
import "./UserList.css"

const UserList = () => {
    const {users,loading} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUser())
    }, []);
    return (
   <div className="list">   { (loading) ? (<h1>loading ...</h1>):( <div>
    {users.map(user => <UserCard user={user} key={user._id}/>)}
</div>)}</div>
    )
}

export default UserList
