import React, { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCheckoutUser } from "../Store/ActionCreaters/CheckoutActionCreators";
export default function Payment() {
    var [checkout, setcheckout] = useState({})
    var [user, setuser] = useState({})
    const Razorpay = useRazorpay();
    var navigate = useNavigate()
    var { _id } = useParams()
    var dispatch = useDispatch()
    var allCheckouts = useSelector((state)=>state.CheckoutStateData)
    async function getData() {
        dispatch(getCheckoutUser())
        var result
        if (_id == "-1")
            result = allCheckouts[0]
        else
            result = allCheckouts.find((item) => item._id === _id)

        setcheckout(result)
        
        var response = await fetch("/api/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        response = await response.json()
        setuser(response.data)
    }
    useEffect(() => {
        getData()
    }, [allCheckouts.length])
    const initPayment = (data) => {
        const options = {
            key: "rzp_test_kJFCr5jnzPYy9s",
            amount: data.amount,
            currency: "INR",
            order_id: data._id,
            "prefill": {
                "name": user.name,
                "email": user.email,
                "contact": user.phone,
            },
            handler: async (response) => {
                try {
                    var item = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        checkid: checkout._id
                    }
                    var response = await fetch("/api/checkout/verify", {
                        method: "put",
                        headers: {
                            "content-type": "application/json",
                            "authorization": localStorage.getItem("token")
                        },
                        body: JSON.stringify(item)
                    });
                    response = await response.json()
                    if (response.result === "Done")
                        navigate("/confirmation")
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            var response = await fetch("/api/checkout/orders", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    authorization: localStorage.getItem("token")
                },
                body: JSON.stringify({ amount: checkout.finalAmount })
            });
            response = await response.json()
            initPayment(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container my-5">
                <button onClick={handlePayment} className="btn btn-secondary w-100 m-auto">
                    Pay With Razorpay
                </button>
            </div>
        </>
    );
}
