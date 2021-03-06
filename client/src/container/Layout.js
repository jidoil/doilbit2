import React from "react";
import Nav from "../components/Nav";
import BuyOrderForm from "../components/BuyOrderForm";
import SellOrderform from "../components/SellOrderForm";
import Signup from "../components/Signup";
import Bank from "../components/Bank";
import Withdraw from "../components/Withdraw";
import Balance from "../components/Balance";


function Layout() {
    return (
        <div class="">
            <header>
                <Nav /> 
            </header>
                <body class="min-h-screen flex justify-center place-content-start place-item-start pt-16 ">
                    <div class="container mx-auto">   
                        <div class="grid grid-cols-5 md:grid-cols-5 gap-4 p-5 ">        
                            <BuyOrderForm />
                            <SellOrderform />
                            <Bank />       
                            <Withdraw />
                            <Balance />
                        </div>
                        <div class="col-span-1">
                        <Signup />
                        </div>
                    </div>

            </body>
        </div>
    )
}

export default Layout;