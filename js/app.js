function updateProductAmount (product, price,) {
    const primaryCost = document.getElementById(product + '-cost');
    primaryCost.innerText = price;   
}

function getInputValue (product) {
    const productInput = document.getElementById(product + 'cost');
    const productCost = parseInt(productInput.value);
    return productCost;
}

function updateProductTotal () {
    const memoryTotal = getInputValue('memory');
    const storageTotal = getInputValue('storage');
    const deliveryTotal = getInputValue('delivery');
    const countTotal = memoryTotal + storageTotal + deliveryTotal;
    document.getElementById('total-cost').innerText = countTotal;
}

//update primary cost of memory
document.getElementById('memory-primary').addEventListener('click', function () {
    updateProductAmount ('memory', 0,);
});
//update advance cost of memory
document.getElementById('memory-advance').addEventListener('click', function(){
    updateProductAmount('memory', 180,);
    
});
//update primary cost of storage
document.getElementById('storage-primary').addEventListener('click', function(){
    updateProductAmount('storage', 0,);
});
//update advance1 cost of storage
document.getElementById('storage-advance1').addEventListener('click', function(){
    updateProductAmount('storage', 100,);
});
//update advance2 cost of storage
document.getElementById('storage-advance2').addEventListener('click', function(){
    updateProductAmount('storage', 180,);
});
//update primary cost of delivery
document.getElementById('delivery-primary').addEventListener('click', function(){
    updateProductAmount('delivery', 0,);
});
//update advance cost of delivery
document.getElementById('delivery-advance').addEventListener('click', function(){
    updateProductAmount('delivery', 20,);
});

