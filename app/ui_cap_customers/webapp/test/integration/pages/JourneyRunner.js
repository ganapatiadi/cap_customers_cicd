sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ibm/sap/training/uicapcustomers/test/integration/pages/CustomersList",
	"ibm/sap/training/uicapcustomers/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ibm/sap/training/uicapcustomers') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

