import React from 'react';
import bills from '../tools/templates.json';
import custemores from '../tools/person.json';
import msbIndex from '../tools/msbsIndex.json'
import billed from '../tools/receipts.json'
import payments from '../tools/payments.json'
import Index from '../components/index';
import { CreateMsb, CreateReceipt } from "./electronContactor"


export default class DataContext extends React.Component {
    constructor() {
        super();
        this.state = {
            payments: payments,
            bills: bills,
            custemores: custemores,
            msbIndex: msbIndex,
            billed: billed,
            update_custemores: (data) => this.update_custemores(data),
            update_charge: (data) => this.update_charge(data),
            update_bill: (data) => this.update_bill(data),
            update_payment: (data) => this.update_payment(data),
            update_msb: (data) => this.update_msb(data),
            remove_bill: (data) => this.remove_bill(data),
            remove_payment: (data) => this.remove_payment(data),
            createMsb: (number) => this.CreateMsb(number),
            createReceipt: (data) => this.CreateReceipt(data)
        };

    }

    CreateMsb(number) {
        const ShekelInt = (num)=>String(Math.floor(num));
        const AgurotInt = (num)=>String(((num)%1).toFixed(2)*100);

        const ByClients = groupBy(this.state.payments.filter((items) => items.msbId == number), "custemorId");
        console.log(ByClients)
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
    CreateReceipt(data){
        CreateReceipt(data);
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
            f[index]=data
        }
        return f;
    }

    update_bill(data) {
        return this.edit_asinc(data, this.help_update_bill,"billed")
    }

    help_update_payment(state, data) {
        console.log(data)
        let f = JSON.parse(JSON.stringify(state.payments))
        const index = f.findIndex(x => x.transaId == data.transaId)
        if (index == -1) {
            f.push(data)
        } else {
            f[index] = data
        }
        return f;
    }

    update_payment(data) {
        return this.edit_asinc(data, this.help_update_payment,"payments")
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

    help_remove_payment(state, data) {
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
        return this.edit_asinc(data, this.help_remove_bill,"billed")
    }

    remove_payment(data) {
        return this.edit_asinc(data, this.help_remove_payment,"payments")
    }

    edit_asinc(data, func, key) {
        if (func(this.state, data)) {
            this.setState((state, props) => ({ [key]: func(state, data) }))
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