import React from 'react';
import {useContext} from 'react';
import {RoomConsumer} from '../contex';
import Title from '../components/Title';
//get all values
const getValueUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
    const Context = useContext(RoomConsumer);
    const { handleChange, type, capacity, price, maxPrice, minSize, maxSize, minPrice, breakfast, pets} = Context;
     // get unique type   
    let types = getValueUnique(rooms,'type');
    //add all
        types = ['all',...types];
    // get jsx
    types= types.map((type, index) => {
        return <option value={type} key={index}>{type}</option> 
    });
    // get capacity
    let people = getValueUnique(rooms,'capacity');
    people =  people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    
    return (
        <section className="filter-container">
            <Title title="Search Rooms"/>
            <form className="filter-form">
                {/* select Type */} 
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" 
                    id="type" value={type}
                     onChange={handleChange} 
                     className="form-control">
                        {types}
                    </select>
                </div>
                {/*  end of select Type */}
                 {/*Capacity */} 
                 <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <select name="capacity" 
                    id="capacity" value={capacity}
                     onChange={handleChange} 
                     className="form-control">
                        {people}
                    </select>
                </div>
                {/*  end of Capacity */}
                {/*   range */}

                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price" 
                    value={price} 
                    onChange={handleChange}
                    className="form-control"/>
                </div>
                {/*  end of range */}
                {/*  size */}
                    <div className="form-group">
                        <label htmlFor="size">Room size</label>
                      
                      <div className="size-inputs">
                        <input
                        type="number"
                        name="minSize"
                        id="size"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                        />

                        <input
                        type="number"
                        name="maxSize"
                        id="size"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                        </div> 

                    </div>
                 {/*  end of size */}
                {/*  extras */}
                <div className="form-group"> 
                <div className="single-extra">
                    <input 
                    type="checkbox" 
                    id="breakfast" 
                    name="breakfast"
                    checked={breakfast}
                    onChange={handleChange}/>
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className="single-extra">
                    <input 
                    type="checkbox" 
                    id="pets" 
                    name="pets"
                    checked={pets}
                    onChange={handleChange}/>
                    <label htmlFor="breakfast">Pets</label>
                </div>
                </div>
                {/*  end of extras */}
            </form>
        </section>
    )
}
