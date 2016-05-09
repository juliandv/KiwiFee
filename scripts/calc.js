
        var fee;
        var price;
<<<<<<< HEAD

=======

>>>>>>> origin/master
        function eval(){
            var price = document.frm.salePrice.value;
            var payNowFee = 0;
            var topSeller = 0;
            var afterFee  = 0;
            fee = price * 0.079;
            if (fee > 149) {fee = 149};
            if (price <= 1) {fee = 0};

            if (document.getElementById('payNow').checked &&
                document.getElementById('topSeller').checked )
            {
                payNowFee = (price * 0.0165)
            } else if (document.getElementById('payNow').checked &&
                       document.getElementById('topSeller').checked == false)
            {
                payNowFee = (price * 0.0195)
            };
<<<<<<< HEAD

=======

>>>>>>> origin/master
            if (document.getElementById('topSeller').checked) {topSeller = fee * 0.15};
            fee = fee + payNowFee - topSeller;


<<<<<<< HEAD

=======

>>>>>>> origin/master
if (document.getElementById('myonoffswitch').checked == false) {
    afterFee = price - fee;
    afterFee = afterFee.toFixed(2);
    document.frm1.result.value = '$' + afterFee;
} else if (document.getElementById('myonoffswitch').checked == true) {
    fee = fee.toFixed(2);
    document.frm1.result.value = '$' + fee;
}
<<<<<<< HEAD

        }


=======

        }



>>>>>>> origin/master
