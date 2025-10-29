namespace cus;

using { cuid } from '@sap/cds/common';

entity customer : cuid {
    name : String(25);
    city : String(25);
    ctry : String(3);
    sales : Decimal(13, 2);
}
