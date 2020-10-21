import React from 'react';
import bills from '../tools/bills.json';
import custemores from '../tools/person.json';
import custemoreBills from '../tools/CreatebillTemp.json';
import msbIndex from '../tools/msbsIndex.json'
import billed from '../tools/billed.json'
import Index from '../components/index';

const AppContext = React.createContext({
    bills: null,
    custemores: null,
    custemoreBills: null,
    msbIndex: null,
    billed: null,
});

export default class DataContext extends React.Component {
    constructor() {
        super();
        this.state = {
            bills: bills,
            custemores: custemores,
            custemoreBills: custemoreBills,
            msbIndex: msbIndex,
            billed: billed,
            update_custemores: (data) => this.update_custemores(data),
            update_charge: (data) => this.update_charge(data),
            update_bill: (data) => this.update_bill(data),
            update_msb: (data) => this.update_msb(data)
        };
    }

    update_custemores(data) {
        let f = JSON.parse(JSON.stringify(this.state.custemores))
        const index = f.findIndex(x => x.id == data.id)
        if (index == -1) {
            f.push(data)
        } else {
            f[index] = data
        }
        this.setState({ custemores: f });
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
                    console.log("your change not allow - becouse the charge is done!", data, f[index])
                    return false;
                }
            }
        }
        return f;
    }

    update_bill(data) {
        if(this.help_update_bill(this.state, data)){
            this.setState((state, props) => ({ billed: this.help_update_bill(state, data) }))
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