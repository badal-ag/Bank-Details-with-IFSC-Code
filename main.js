const showBankDetails = document.querySelector('.showBankDetails');


function checkIFSC(event) {
    event.preventDefault();
    var ifsc = document.querySelector('#ifsc').value;
    var link = "https://ifsc.razorpay.com/";
    var uri = link.concat(ifsc);
    console.log(uri);
    file_get_contents(uri);

    function file_get_contents(uri) {
        fetch(uri)
        .then(
            res => res.text()
        ).then(
            function(data) {  
            var bankInfo = JSON.parse(data);

            console.log(bankInfo)

            showBankDetails.innerHTML = `
                <p>ADDRESS: ${bankInfo.ADDRESS}</p>
                <p>BANK: ${bankInfo.BANK}</p>
                <p>BANKCODE: ${bankInfo.BANKCODE}</p>
                <p>BRANCH: ${bankInfo.BRANCH}</p>
                <p>CENTRE: ${bankInfo.CENTRE}</p>
                <p>CITY: ${bankInfo.CITY}</p>
                <p>CONTACT: ${bankInfo.CONTACT}</p>
                <p>DISTRICT: ${bankInfo.DISTRICT}</p>
                <p>IFSC: ${bankInfo.IFSC}</p>
                <p>IMPS: ${bankInfo.IMPS}</p>
                <p>ISO3166: ${bankInfo.ISO3166}</p>
                <p>MICR: ${bankInfo.MICR}</p>
                <p>NEFT: ${bankInfo.NEFT}</p>
                <p>RTGS: ${bankInfo.RTGS}</p>
                <p>STATE: ${bankInfo.STATE}</p>
                <p>SWIFT: ${bankInfo.SWIFT}</p>
                <p>UPI: ${bankInfo.UPI}</p>
            `
        });
    }
}

