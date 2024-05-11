import React from 'react';
import "./about.css"
const FormComponent = () => {
  return (
    <div className='mt-3'>
      <form className="form" action="">
      <p className="field required">
        <label className="label required" htmlFor="name">Flat No</label>
        <input className="text-input" type="text" id="name" name="name" />
      </p>
      <p className="field required half">
        <label className="label" htmlFor="email">Title</label>
        <div className="button-group">
          <button className="button rent">Rent</button>
          <button className="button sale">Sale</button>
        </div>
      </p>
      <p className="field">
        <label className="label" htmlFor="about">Description</label>
        <textarea className="textarea" id="about" name="about" cols="50" rows="4"></textarea>
      </p>
      <p className="field required half">
        <label className="label" htmlFor="phone">BedRooms</label>
        <div className="button-group">
          <button className="button" type="button" value="1">1</button>
          <button className="button" type="button" value="2">2</button>
          <button className="button" type="button" value="3">3</button>
        </div>
      </p>


      <p className="field required half">
        <label className="label" htmlFor="phone">BathRooms</label>
        <div className="button-group">
          <button className="button" type="button" value="1">1</button>
          <button className="button" type="button" value="2">2</button>
          <button className="button" type="button" value="3">3</button>
        </div>
      </p>

      <p className="field required half">
        <label className="label" htmlFor="phone">Furnishing</label>
        <div className="button-group">
          <button className="button" type="button" value="1">Full</button>
          <button className="button" type="button" value="2">Semi</button>
          <button className="button" type="button" value="3">Unfurnished</button>
        </div>
      </p>

      <p className="field required">
        <label className="label required" htmlFor="area">Area</label>
        <input className="text-input area-input" type="text" id="area" name="area" required />
      </p>


      <p className="field required half">
        <label className="label" htmlFor="phone">Bachelors Allowed</label>
        <div className="button-group">
          <button className="button" type="button" value="1">Allowed</button>
          <button className="button" type="button" value="2">Not Allowed</button>
        </div>
      </p>

      <p className="field required half">
        <label className="label" htmlFor="phone">Car Parking</label>
        <div className="button-group">
          <button className="button" type="button" value="1">1</button>
          <button className="button" type="button" value="2">2</button>
          <button className="button" type="button" value="2">3</button>
        </div>
      </p>

      <p className="field required half">
        <label className="label" htmlFor="phone">Facing</label>
        <div className="button-group">
          <button className="button" type="button" value="1">East</button>
          <button className="button" type="button" value="2">North-East</button>
        </div>
      </p>

      <p className="field required">
        <label className="label required" htmlFor="price">Price</label>
        <input className="text-input" type="number" id="price" name="price" required />
      </p>

      <p className="field required half">
        <label className="label" htmlFor="phone">Status</label>
        <div className="button-group">
          <button className="button" type="button" value="1">Available</button>
          <button className="button" type="button" value="2">Occupied</button>
        </div>
      </p>

      <p className="field">
        <input className="button-post" type="submit" value="Post" />
      </p>
    </form>
    </div>
  );
};

export default FormComponent;
