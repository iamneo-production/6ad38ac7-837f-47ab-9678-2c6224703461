ojecimport React from 'react'

export default function admindashboard() {
  return (
    <div>
        <div className="container bootstrap snippets bootdeys bootdey" id="adminDashboard">
        <div className="row decor-default">
            <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="contacts-labels">
               
                <div className="list">
                
                <div className="head">Earnings</div>
                <div className="unit">
                    <div className="lab lab-success">Total Today</div><span>$200</span>
                </div>
                <div className="unit">
                    <div className="lab lab-primary">Monthly</div><span>$800</span>
                </div>
                <p>Want to add a new room?</p>
                <button type="button" className="btn btn-primary font-weight-700" id="addRoomButton">Add new Room</button>
                </div>
            </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="contacts-list">
                <h5 className="title" style={{textAlign: "center", fontSize: "40px"}}>Hyderabad Grand</h5>
        
                <form className="ac-custom ac-checkbox ac-checkmark" autocomplete="off">
                <div className="input-group">
                    <input type="text" className="contacts-list-search" placeholder="Search"/>
                </div>
                <div className="unit head">
                    <div className="field name">
                    <div className="check">
                        <input id="cb1" name="cb1" type="checkbox"/>
                        <label for="cb1"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                    Room No
                    </div>
                    <div className="field phone">
                    Price
                    </div>
                    <div className="field email icons">
                    Type
                    </div>
                </div>
                <div className="unit">
                    <div className="field name">
                    
                    <div>
                        <img src="https://www.tridenthotels.com/img/hyderabad-premier-rooms.jpg" alt="img" className="avatar"/> 100
                    </div>
                    <div className="lab lab-warning">Not Avaliable</div>
                    </div>
                    <div className="field phone">
                    $200/day
                    </div>
                    <div className="field email">
                    Single cot
                    </div>
                </div>
                <div className="unit">
                    <div className="field name">
                 
                    <div>
                        <img src="https://www.tridenthotels.com/img/hyderabad-deluxe-rooms.jpg" alt="img" className="avatar"/> 101
                    </div>
                    <div className="lab lab-success">Avaliable</div>
                    </div>
                    <div className="field phone">
                    $500/day
                    </div>
                    <div className="field email">
                    Single cot
                    </div>
                </div>
                <div className="unit">
                    <div className="field name">
                    
                    <div>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/74104277.jpg?k=88fca755f458a9a37d455e82ea594021f6ce2bd52236a1ff98af36d5eddff47f&o=&hp=1" alt="img" className="avatar"/> 102
                    </div>
                    <div className="lab lab-danger">Not Avaliable</div>
                    </div>
                    <div className="field phone">
                    $290/day
                    </div>
                    <div className="field email">
                    Double cot
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
