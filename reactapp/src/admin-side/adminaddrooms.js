import React from 'react'

export default function adminaddrooms() {
  return (
    <div>
      <h3 style={{textAlign: "center", padding: "10px"}}>Add Rooms</h3>

        <div class="container">
        <form style={{marginLeft: "30%", marginRight: "30%"}}>
            <label for="fname">Room No</label>
            <input type="text" id="fname" name="firstname" placeholder="Number"/>

            <label for="lname">Room Price</label>
            <input type="text" id="lname" name="lastname" placeholder="Price"/>

            <label for="country">Room Type</label>
            <select id="country" name="country">
            <option value="australia">Single cot</option>
            <option value="canada">Double cot</option>
            </select>


            <input type="submit" value="Submit"/>
        </form>
        </div>
    </div>
  )
}
