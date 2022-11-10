var customer = `{"cust_code":"101", "cust_name":"Gaurav", "gender":"male", "DOB":"01/01/2000", "address":"Udaipur", "Phone":"9876543210"}`

//var cust = JSON.parse(`{"cust_code":"101", "cust_name":"Gaurav", "gender":"male", "DOB":"01/01/2000", "address":"Udaipur", "Phone":"9876543210"}`)

var cust2 = JSON.parse(customer)
document.write(cust2.cust_code + " " + cust2.cust_name)