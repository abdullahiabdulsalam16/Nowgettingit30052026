// let temp = 00

// if (temp > 40) {
//  console.log("Wear a long cotton t-shirt");
// } else if (temp > 20){
//  console.log("wear a long sleeve");
// } else if (temp > 10) {
//     console.log("wear a jacket");
// } else {
//     console.log("wear a rain coat or an umbrella")
// }

let tempSwitch = 9;
switch (true) {
    case tempSwitch > 40:
        console.log("wear a loose t-shirt");
        break;
        case tempSwitch > 20:
            console.log("wear a long sleave");
            break;
            case tempSwitch > 10:
                console.log("wear a jacket")
                break;
                default:
                    console.log("wear a rain coat or use an umbrella");
}