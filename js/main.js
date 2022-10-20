/**
 * Đầu vào:
 * A là số ngày làm nhập từ bàn phím
 * Xử lí:
 * Tạo biến B là tổng tiền lương số ngày làm
 * B = A * 100000
 * Đầu ra
 * 
 * Tổng lương 5 ngày là 500000
 * 
 */



document.getElementById("btnB1").onclick = function() {
    var A = document.getElementById("inputB1").value;

    var B = A * 100000;
    document.getElementById("infoB1").innerHTML = "Tổng lương: "+A+" ngày là "+B;
};

// /**
// * Đầu vào:
//  * 5 số thực cho 5 biến
//  * Xử lí:
//  * Tạo biến Agver = Tổng 5 số /5
//  * Đầu ra
//  * 
//  * Xuất ra màn hình trung bình của 5
//  * 
//  * 
//  */


// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));
// const num3 = parseInt(prompt('Enter the third number '));
// const num4 = parseInt(prompt('Enter the fourth number '));
// const num5 = parseInt(prompt('Enter the fifth number '));
document.getElementById("btnB2").onclick = function(){
    var num1 = document.getElementById("inputB2").value*1;
    var num2 = document.getElementById("inputB2_1").value*1;
    var num3 = document.getElementById("inputB2_2").value*1;
    var num4 = document.getElementById("inputB2_3").value*1;
    var num5 = document.getElementById("inputB2_4").value*1;
    // var Agver = (num1+num2+num3+num4+num5)/5;
    var Avg = (num1 + num2 + num3 + num4 + num5)/5;

    document.getElementById("infoB2").innerHTML = "Tổng 5 số là: " + Avg+".";
    // console.log("Gía trị trung bình là: "+Agver);
};


// /**
// * Đầu vào:
//  * Tạo biến Money là số tiền sẽ nhập
//  * Xử lí:
//  * VND = Money * 23500
//  * Đầu ra
//  * 
//  * Xuất ra màn hình Số VND LÀ : XXXXX VND
//  * 
//  * 
//  */
// const money = parseInt(prompt('Money: '));
document.getElementById("btnB3").onclick = function(){
    var money = document.getElementById("inputB3").value*1;

    var transfer = money * 23500;
   
    document.getElementById("infoB3").innerHTML = "Số tiền chuyển: "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(transfer);
};

// var VND = money * 23500;

// console.log("Số VND Là: "+VND+" VND");

// /**
// * Đầu vào:
//  * 2 biến chiều dài chiều rộng
//  * Xử lí:
//  * Diện tích = dài * rộng
//  * Chu vi = (dài + rộng ) *2
//  * Đầu ra
//  * 
//  * Xuất ra màn hình Chu vi là: ..... , diện tích là ......
//  * 
//  * 
//  */

// const dai = parseInt(prompt('Chiều dài là: '));
// const rong = parseInt(prompt('Chiều rộng là: '));

// var chuvi = (dai + rong) *2;
// var dientich = dai * rong

// console.log("Chu vi là: "+chuvi+", diện tích là: "+dientich);
document.getElementById("btnB4").onclick = function(){
    var dai = document.getElementById("inputB4").value*1;
    var rong = document.getElementById("inputB4_1").value*1;

    var chuvi = (dai + rong)*2;
    var dientich = dai * rong;

    document.getElementById("infoB4").innerHTML = "Chu vi là: "+chuvi+". Diện tích là: "+dientich+".";

};
// /**
// * Đầu vào:
//  * tạo 1 biến a là số người dùng nhập
//  * Xử lí:
//  * num1 = số đầu
//  * num2 = số sau
//  * sum = num1 + num2
//  * Đầu ra
//  * 
//  * Xuất ra màn hình Tổng là: .....
//  * 
//  * 
//  */


// const a = parseInt(prompt("Nhập vào 1 số: "));

// var num10 = a % 10;
// var num20 = a / 10;

// var sum = parseInt(num1) + parseInt(num2);

// console.log("Tổng là " +sum);

document.getElementById("btnB5").onclick = function(){
    var a = document.getElementById("inputB5").value*1;
    
    var num10 = a % 10;

    var num20 = a /10;

    var sum = num10 + num20;

    document.getElementById("infoB5").innerHTML = "Tổng là: " +sum;
    
};