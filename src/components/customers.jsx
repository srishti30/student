import React from "react";

const Customers = () => {
  return(
    <div>
    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Board</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Cbse</option>
    <option value="2">Icse</option>
   
  </select>
</div>

<div class="input-group mb-3">
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
    <option value="6">Six</option>
    <option value="7">Seven</option>
    <option value="8">Eight</option>
    <option value="9">Nine</option>
  </select>
  <div class="input-group-append">
    <label class="input-group-text" for="inputGroupSelect02">Class</label>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Subject</button>
  </div>
  <select class="custom-select" id="inputGroupSelect03">
    <option selected>Choose...</option>
    <option value="1">Maths</option>
    <option value="2">English</option>
    <option value="3">Science</option>
  </select>
</div>

<div class="input-group">
  <select class="custom-select" id="inputGroupSelect04">
    <option selected>Choose..</option>
    <option value="1">2019-2020</option>
    <option value="2">2018-2019</option>
    <option value="3">2020-2021</option>
  </select>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Academic year</button>
  </div>
</div>
<form>
<div class="form-group">
<label for="exampleFormControlTextarea1">Enter Description</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</form>
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="customFile">Add file</label>
</div>
</div>
  ); 
};

export default Customers;
