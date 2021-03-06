import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//입금
function Bank() {
     // 임의의 유저아이디 -> 회원가입시 디비에 만들어짐
    const userId = "623943499d5531c4f1bcb8a8";
    const [bankMoney, setBankMoney] = useState({
        quantity: "",
        userId: userId
    });
    const [quantity, setQuantity] = useState("");
    // const [bankedMoney, setBankedMoney] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBankMoney({
            ...bankMoney,
            [name]: value
        });
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log("front : ", bankMoney);
        axios.post("http://localhost:3001/exchange/bank", bankMoney).then(res => {
            console.log(res);
        })
    }

    useEffect(() => {
        setQuantity(bankMoney.quantity);
    }, [bankMoney]);

    return (

            <div class="flex items-center justify-start">
                <div class="bg-white rounded-lg shadow p-5">
                    <p class="text-gray-700 text-xl font-semibold">
                        <form class="" action="/exchange/bank" method="post">
                            <label>수량: <input class="bg-green-400 text-black" type="text" name="quantity" value={quantity} onChange={handleChange} /></label>
                            <button class="rounded-full py-2 px-3 bg-black text-white" onClick={handleSubmit}>입금</button>
                        </form>
                    </p>
                        <p class="text-gray-700 text-xl font-semibold">
                            잔고 :  {quantity}
                        </p>
                </div>
            </div>
    )
}

export default Bank;