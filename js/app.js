function updateProductAmount (product, price,) {
    const primaryCost = document.getElementById(product + '-cost');
    primaryCost.innerText = price;

    //update total
    updateTotal();
}
function updateTotal () {
    const bestyCost = document.getElementById('best-cost').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    //update first total
    const totalCost = parseInt(bestyCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    const getFirstTotal = document.getElementById('first-total');
    getFirstTotal.innerText = totalCost;

    //update last total
    const getLastTotal = document.getElementById('last-total');
    getLastTotal.innerText = totalCost;

    //I want discount
    const codeFild = document.getElementById('code-fild');
    const codeFildText = codeFild.value;
    if(codeFildText == 'stivekaku') {
        const discount = totalCost / 20;
        getLastTotal.innerText = totalCost - discount;
    }
    //clear the input fild
    codeFild.value = '';
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
//update discount amount
document.getElementById('discount-button').addEventListener('click', function(){
    updateTotal();
}) 

