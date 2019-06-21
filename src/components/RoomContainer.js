import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Spinner from './Spinner/Spinner';
import {RoomConsumer} from '../contex';
export default function RoomContainer() {
        return (
            <RoomConsumer>
             { value => {
                 const {loading,sortedRooms,rooms} = value;
                 if(loading){
                     return <Spinner/>
                 }
                return (
                 <div>
                
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                </div>
                 );
             }}

            </RoomConsumer>
      
    );
}
