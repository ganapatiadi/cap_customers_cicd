using { cus } from '../db/customers';

service CustomerSrv @(requires: 'authenticated-user'){

    entity Customers 
         @(restrict: [
                    { grant: '*',to   : 'RiskManager' }
                   ]) 
    as projection on cus.customer;

    
    annotate Customers with @odata.draft.enabled;

}