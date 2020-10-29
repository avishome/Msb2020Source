import React from 'react';
import bills from '../tools/bills.json';
import custemores from '../tools/person.json';
import msbIndex from '../tools/msbsIndex.json'
import billed from '../tools/billed.json'
import Index from '../components/index';
import { CreateMsb } from "./fireBaseContactor"


export default class DataContext extends React.Component {
    constructor() {
        super();
        this.state = {
            bills: bills,
            custemores: custemores,
            msbIndex: msbIndex,
            billed: billed,
            update_custemores: (data) => this.update_custemores(data),
            update_charge: (data) => this.update_charge(data),
            update_bill: (data) => this.update_bill(data),
            update_msb: (data) => this.update_msb(data),
            remove_bill: (data) => this.remove_bill(data),
            createMsb: (number) => this.CreateMsb(number)
        };

    }

    CreateMsb(number) {
        const ShekelInt = (num)=>String(Math.floor(num));
        const AgurotInt = (num)=>String(((num)%1).toFixed(2)*100);

        const ByClients = groupBy(this.state.billed.filter((items) => items.msbId == number), "custemorId");
        const Users = Object.keys(ByClients).map((Client)=>{
            const valueArr = ByClients[Client];
            const totalTaxes = valueArr.reduce(function (sum, pay) {
                return sum + pay.payed;
            }, 0);
            const client = this.state.custemores.filter((custemore)=>custemore.id == Client)[0]
            return({
                "Bank" : String(client.banknum),
                "Snif": String(client.brancenum),
                "Account" : String(client.accuntnum),
                "Id": String(client.id),
                "Name" : String(client.name),
                "ShekelInt": ShekelInt(totalTaxes),
                "AgurotInt" : AgurotInt(totalTaxes)
            })
        }).filter((item)=>item.ShekelInt>0);

        const sumOfFile = Users.reduce(function (sum, pay) {
            return sum + Number(pay.ShekelInt+"."+pay.AgurotInt);
        }, 0);


        const DATA = {
            "CodeMosad": "12345", "CodeSendMosad": "12345", "YY": "20", "MM": "12", "DD": "29", "NameMosad": "המרכז לגביה", "AmountShekel": ShekelInt(sumOfFile), "AmountAguort": AgurotInt(sumOfFile), "Sum": String(Users.length),
            "move": Users
        }
        CreateMsb(DATA);
    }
    help_update_custemores(state, data) {
        let f = JSON.parse(JSON.stringify(state.custemores))
        const index = f.findIndex(x => x.id == data.id)
        if (index == -1) {
            f.push(data)
        } else {
            f[index] = data
        }
        return f;
    }

    update_custemores(data) {
        this.setState((state, props) => ({ custemores: this.help_update_custemores(state, data) }));
        return true;
    }
    update_msb(data) {
        let f = JSON.parse(JSON.stringify(this.state.msbIndex))
        const index = f.findIndex(x => x.id == data.id)
        if (index == -1) {
            f.push(data)
        } else {
            f[index] = data
        }
        this.setState({ msbIndex: f });
        return true;
    }
    update_charge(data) {
        let f = JSON.parse(JSON.stringify(this.state.bills))
        const index = f.findIndex(x => x.id == data.id)
        if (index == -1) {
            f.push(data)
        } else {
            f[index] = data
        }
        this.setState({ bills: f });
        return true;
    }

    help_update_bill(state, data) {
        let f = JSON.parse(JSON.stringify(state.billed))
        const index = f.findIndex(x => x.transaId == data.transaId)
        if (index == -1) {
            f.push(data)
        } else {
            // in msb - change isDone to True and put price. after that his responsibaly to put new charge - to complit the pay (if need).
            if (!f[index].isDone)
                f[index] = data
            else {
                if (data.payed == 0) {
                    f[index] = data
                } else {
                    if (f[index].isDone && !data.isDone) {
                        //only if msb is "ממתין לאישור"
                        f[index] = data
                    } else {
                        console.log("your change not allow - becouse the charge is done!", data, f[index])
                        return false;
                    }
                }
            }
        }
        return f;
    }

    update_bill(data) {
        return this.bill_asinc(data, this.help_update_bill)
    }

    help_remove_bill(state, data) {
        let f = JSON.parse(JSON.stringify(state.billed))
        const index = f.findIndex(x => x.transaId == data.transaId)
        if (index == -1) {
            return false
        } else {
            f = f.filter(x => x.transaId != data.transaId)
        }
        return f;
    }

    remove_bill(data) {
        return this.bill_asinc(data, this.help_remove_bill)
    }

    bill_asinc(data, func) {
        if (func(this.state, data)) {
            this.setState((state, props) => ({ billed: func(state, data) }))
            return true;
        }
        return false;
    }

    render() {
        return (
            <Index
                {...this.state} />
        );
    }
}

const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};