import React from "react";

function Plans() {
    return (
    <>
    <div className="Plans" id="Plan">
        <h1>CHOOSE YOUR PRICING PLAN</h1>
        <div className="plans">
            <div className="plan basic">
                <h1>Basic</h1>
                <h2><mark>Rs2000</mark> /month</h2>
                <p> Free riding</p>
                <p>Unlimited equipments</p>
                <p>Personal trainer</p>
                <p>Weight losing classes</p>
                <p>Support interval training</p>
                <div className="planbutton" ><button>ENROLL NOW</button></div>
            </div>
            <div className="plan pro">
                <h1>Pro</h1>
                <h2><mark>Rs10000</mark> /6 month</h2>
                <p> Free riding</p>
                <p>Unlimited equipments</p>
                <p>Personal trainer</p>
                <p>Weight losing classes</p>
                <p>Support interval training</p>
                <div className="planbutton" ><button>ENROLL NOW</button></div>
            </div>
            <div className="plan elite">
                <h1>Elite</h1>
                <h2><mark>Rs18000</mark> /year</h2>
                <p> Free riding</p>
                <p>Unlimited equipments</p>
                <p>Personal trainer</p>
                <p>Weight losing classes</p>
                <p>Support interval training</p>
                <div className="planbutton" ><button>ENROLL NOW</button></div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Plans;