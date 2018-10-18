function orderSupplies(item) {
    let warehouse;  //undefined
    const deliveryTime = Math.random() * 3000;

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            warehouse = {
                paint: {
                    product: 'Neon Green Paint',
                    directions: function() { return 'mix it!' }
                },
                brush: {
                    product: 'Horsehair brush',
                    directions: function() { return 'start painting!' }
                },
                tarp: {
                    product: 'A large tarp',
                    directions: function() { return 'cover the floor' }
                }
            };
            console.log('about to send ', item);
            // callback(warehouse[item]);
            if(item in warehouse){
                resolve(warehouse[item]);
            } else {
                reject(new Error(`${item} does not exist`));
            }
        }, deliveryTime);
    });
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
const roller = orderSupplies('roller')
// const roller = orderSupplies('roller').catch().console.log();

Promise.all([tarp, paint, brush, roller])
    .then(function (items){
        items.forEach(receivedItem);
    })
    .catch(function (error) {
        console.log(error.message)
    });

// tarp
//     .then(function (item) {
//         receivedItem(item);
//         return paint;
//     })
//     .then(function (item) {
//         receivedItem(item);

//         return brush;
//     })
//     .then(function (item) {
//         receivedItem(item);

//         return roller;
//     })
//     .then(receivedItem)
//     .catch(function (error) {
//         console.log(error.message);
//     })

//   orderSupplies('paint', function(item){
//       receivedItem(item);
//     orderSupplies('brush', receivedItem);
//   });

function receivedItem(item) {
    console.log(`Received ${ item.product }. Time to ${ item.directions() }`);
}

// let havePaint = false;
// orderSupplies('paint', function(item){
//     receivedItem(item);
//     havePaint = true;
// });

// orderSupplies('brush', function(item){
//     if(havePaint){
//         receivedItem(item);
//     } else {
//         const timer = setInterval(function () {
//             console.log('...checking for paint....');
//             if(havePaint){
//                 clearInterval(timer);
//                 return receivedItem(item);
//             }
//         }, 50);
//     }
// })

// orderSupplies('brush', handleBrush);

// function handleBrush(item){
//     console.log('...checking for paint');
//     if(havePaint){
//         return receivedItem(item);
//     }
//     setTimeout(handleBrush, 50, item);
// }

// function handleBrush(item){
//     console.log('...checking for paint');
//     if(havePaint){
//         return receivedItem(item);
//     });
//     setTimeout(function (){
//         handleBrush(item);
//     }, 50);
// }

// const things = ['paint', 'brush'];

function order(items){
    const received = [];
    for(let index = 0; index < items.length; index++){
        const item = items[index];
        console.log('item is => ', item);
        orderSupplies(items, function (content){
            // console.log(content);
            received[index] = content;

            console.log('received array', received, index);

            if(received.filter(element => element).length === items.length){
                received.forEach(receivedItem);
            }
        });
    }
}
// order(things);