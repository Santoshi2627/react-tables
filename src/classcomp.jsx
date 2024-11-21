import { Component } from "react";
class Main extends Component{


    render(){
        const obj = {
            productName: "Laptop",
            productPrice: "$1000",
            isAvailable: true, // Change to false to test unavailable
        };
        return(
            <>
            <h1>{obj.isAvailable?styles.avaliable:styles.unavaliable}{obj.productName}{obj.productPrice}</h1>
            </>
        )
    }
}
const styles={
    avaliable:{color:"green"},
    unavaliable:{color:"red"}
}
export default Main;
// import React, { Component } from "react";

// class Main extends Component {
//     render() {
//         // Example product object
//         const obj = {
//             productName: "Laptop",
//             productPrice: "$1000",
//             isAvailable: true, // Change to false to test unavailable
//         };

//         // Determine the color based on availability
//         const productStyle = {
//             color: obj.isAvailable ? "green" : "red",
//         };

//         return (
//             <>
//                 <h1 style={productStyle}>
//                     {obj.productName} - {obj.productPrice}
//                 </h1>
//             </>
//         );
//     }
// }

// export default Main;
