import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.onhandleChange = this.onhandleChange.bind(this);

    this.state = {
      amount: props.expense ? (props.expense.amount / 100) : 0,
      pay: props.expense ? props.expense.pay : '1',
      fedtax: props.expense ? props.expense.fedtax : 0,
      provtax: props.expense ? props.expense.provtax : 0,
      province: props.expense ? props.expense.province : '0',
      total: props.expense ? props.expense.total : 0,
      error: ''
    };
  }


  onAmountChange = (e) => {

    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onHoursChange = (e) => {
    const hours = e.target.value;

  if (!hours || hours.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ hours }));
    }
  };
  onPayChange = (e) => {
    const pay = e.target.value;

    this.setState(() => ({ pay }));
  };
  onhandleChange(e) {
    this.setState({
      type: e.target.value
    });
  };
  onProvinceChange = (e) => {
    const province = e.target.value;

    this.setState(() => ({ province }));
  };
  onRateChange = (e) => {
    const rate = e.target.value;

    this.setState(() => ({ rate }));
  };
  tax = (state = taxDefaultState) => {
    let amt = this.state.amount;
    let pay = this.state.pay;
    let prov = this.state.province;
    let sum;
    let provtax;
    let fedtax;
    let taxes;
    let taxCalculator = (amt = this.state.amount) => {
      if(46606 > amt) {
        sum =  (amt * .15);
      } else if(amt > 46606 && 93208 > amt) {
        sum = (((amt - 46605) * .205) + 6991);
      } else if(amt > 93208 && 144489 > amt) {
        sum = (((amt - 93208) * .26) + 16544);
      } else if(amt > 144489 && 205842 > amt) {
        sum = (((amt - 144489) * .29) + 29877);
      } else {
        sum = (((amt - 205842) * .33) + 47670);
      }        
        return this.setState({fedtax: sum })
    };
    let abCalculator = (amt = this.state.amount) => {
      if(128145 > amt) {
        sum = (amt * .10);
      } else if(amt > 128146 && 153773 > amt) {
        sum = (amt * .12);
      } else if(amt > 153774 && 205031 > amt) {
        sum = (amt * .13);
      } else if(amt > 205032 && 307547 > amt) {
        sum = (amt * .14);
      } else {
        sum = (amt * .15);
      }        
        return this.setState({provtax: sum })
    };
    let bcCalculator = (amt = this.state.amount) => {
      if(39676 > amt) {
        sum = (amt * .0506);
      } else if(amt > 39677 && 79353 > amt) {
        sum = (amt * .077);
      } else if(amt > 79354 && 91107 > amt) {
        sum = (amt * .105);
      } else if(amt > 91108 && 110630 > amt) {
        sum = (amt * .1229);
      } else if(amt > 110631 && 150000 > amt) {
        sum = (amt * .149);
      } else {
        sum = (amt * .168);
      }        
        return this.setState({provtax: sum })
    };
    let mbCalculator = (amt = this.state.amount) => {
      if(31843 > amt) {
        sum = (amt * .108);
      } else if(amt > 31844 && 68821 > amt) {
        sum = (amt * .1275);
      } else {
        sum = (amt * .174);
      }        
      return this.setState({provtax: sum })
    };
    let nbCalculator = (amt = this.state.amount) => {
      if(41675 > amt) {
        sum = (amt * .0968);
      } else if(amt > 41676 && 83351 > amt) {
        sum = (amt * .1482);
      } else if(amt > 83352 && 135510 > amt) {
        sum = (amt * .1652);
      } else if(amt > 135511 && 154382 > amt) {
        sum = (amt * .1784);
      } else {
        sum = (amt * .203);
      }        
      return this.setState({provtax: sum })
    };
    let nlCalculator = (amt = this.state.amount) => {
      if(36926 > amt) {
        sum = (amt * .087);
      } else if(amt > 36927 && 73852 > amt) {
        sum = (amt * .145);
      } else if(amt > 73853 && 131850 > amt) {
        sum = (amt * .158);
      } else if(amt > 131851 && 184590 > amt) {
        sum = (amt * .173);
      } else {
        sum = (amt * .183);
      }        
      return this.setState({provtax: sum })
    };
    let nsCalculator = (amt = this.state.amount) => {
      if(29590 > amt) {
        sum = (amt * .0879);
      } else if(amt > 29591 && 59180 > amt) {
        sum = (amt * .1495);
      } else if(amt > 59181 && 93000 > amt) {
        sum = (amt * .1667);
      } else if(amt > 93001 && 150000 > amt) {
        sum = (amt * .175);
      } else {
        sum = (amt * .21);
      }        
      return this.setState({provtax: sum })
    };
    let ntCalculator = (amt = this.state.amount) => {
      if(44437 > amt) {
        sum = (amt * .04);
      } else if(amt > 44438 && 88874 > amt) {
        sum = (amt * .07);
      } else if(amt > 88875 && 144488 > amt) {
        sum = (amt * .09);
      } else {
        sum = (amt * .115);
      }        
      return this.setState({provtax: sum })
    };
    let nwtCalculator = (amt = this.state.amount) => {
      if(42209 > amt) {
        sum = (amt * .059);
      } else if(amt > 42210 && 84420 > amt) {
        sum = (amt * .086);
      } else if(amt > 84421 && 137248 > amt) {
        sum = (amt * .122);
      } else {
        sum = (amt * .1405);
      }        
      return this.setState({provtax: sum })
    };
    let onCalculator = (amt = this.state.amount) => {
      if(42960 > amt) {
        sum = (amt * .0505);
      } else if(amt > 42961 && 85923 > amt) {
        sum = (amt * .0915);
      } else if(amt > 85924 && 150000 > amt) {
        sum = (amt * .1116);
      } else if(amt > 150001 && 220000 > amt) {
        sum = (amt * .1216);
      } else {
        sum = (amt * .1316);
      }        
      return this.setState({provtax: sum })
    };
    let peiCalculator = (amt = this.state.amount) => {
      if(31984 > amt) {
        sum = (amt * .098);
      } else if(amt > 31985 && 63969 > amt) {
        sum = (amt * .138);
      } else {
        sum = (amt * .167);
      }        
      return this.setState({provtax: sum })
    };
    let qcCalculator = (amt = this.state.amount) => {
      if(43790 > amt) {
        sum = (amt * .15);
      } else if(amt > 43791 && 87575 > amt) {
        sum = (amt * .20);
      } else if(amt > 87576 && 106555 > amt) {
        sum = (amt * .24);
      } else {
        sum = (amt * .2575);
      }        
      return this.setState({provtax: sum })
    };
    let skCalculator = (amt = this.state.amount) => {
      if(45225 > amt) {
        sum = (amt * .105);
      } else if(amt > 45226 && 129214 > amt) {
        sum = (amt * .125);
      } else {
        sum = (amt * .145);
      }        
      return this.setState({provtax: sum })
    };
    let ytCalculator = (amt = this.state.amount) => {
      if(46605 > amt) {
        sum = (amt * .064);
      } else if(amt > 46606 && 93208 > amt) {
        sum = (amt * .09);
      } else if(amt > 93209 && 144489 > amt) {
        sum = (amt * .109);
      } else if(amt > 144490 && 500000 > amt) {
        sum = (amt * .128);
      } else {
        sum = (amt * .15);
      }        
      return this.setState({provtax: sum })
    };
    let taxDeductions = (amt = this.state.amount, fedtax = this.state.fedtax, provtax = this.state.provtax, pay = this.state.pay) => {
      taxes = fedtax + provtax;
      sum = amt - taxes;
      if (pay == '12') {
        sum /= 12;
        console.log('Pay is monthly')
      } else if (pay == '26') {
        sum /= 26;
        console.log('Pay is bi-weekly')
      } else if (pay == '52') {
        sum /= 52;
        console.log('Pay is weekly')
      } else if (pay == '4') {
        sum /= 4;
        console.log('Pay is quarterly')
      } else if (pay == '24') {
        sum /= 24;
        console.log('Pay is bi-montly')
      } else if (pay == '22') {
        sum /= 22
        console.log('Pay is 22 pays')
      } else if (pay == '13') {
        sum /= 13
        console.log('Pay is 13 pays')
      } else if (pay == '10') {
        sum /= 10
        console.log('Pay is 10 pays')
      } else {
        sum;
        console.log('Pay is yearly pay')
      }
      return this.setState({total: sum })
    };
    switch (prov) {
      case '0':
        return [
          ...state,
          this.setState({province: 'Alberta'}),
          taxCalculator(),
          abCalculator(),
          taxDeductions(),
          console.log('Alberta')
          
      ]; 
      case '1':
          return [
          ...state,
          this.setState({province: 'British Columbia'}),
          taxCalculator(),
          bcCalculator(),
          taxDeductions(),
          console.log('British Columbia')
      ];
      case '2':
      return [
          ...state,
          this.setState({province: 'Manitoba'}),
          taxCalculator(),
          mbCalculator(),
          taxDeductions(),
          console.log('Manitoba')
      ];
      case '3':
      return [
          ...state,
          this.setState({province: 'New Brunswick'}),
          taxCalculator(),
          nbCalculator(),
          taxDeductions(),
          console.log('New Brunswick')
      ];
      case '4':
      return [
          ...state,
          this.setState({province: 'Newfoundland'}),
          taxCalculator(),
          nlCalculator(),
          taxDeductions(),
          console.log('Newfoundland')
      ];
      case '5':
      return [
          ...state,
          this.setState({province: 'Nova Scotia'}),
          taxCalculator(),
          nsCalculator(),
          taxDeductions(),
          console.log('Nova Scotia')
      ];
      case '6':
      return [
          ...state,
          this.setState({province: 'Ontario'}),
          taxCalculator(),
          onCalculator(),
          taxDeductions(),
          console.log('Ontario')
      ];
      case '7':
      return [
          ...state,
          this.setState({province: 'Prince Edward Island'}),
          taxCalculator(),
          peiCalculator(),
          taxDeductions(),
          console.log('Prince Edward Island')
      ];
      case '8':
      return [
          ...state,
          this.setState({province: 'Quebec'}),
          taxCalculator(),
          qcCalculator(),
          taxDeductions(),
          console.log('Quebec')
      ];
      case '9':
      return [
          ...state,
          this.setState({province: 'Saskatchewan'}),
          taxCalculator(),
          skCalculator(),
          taxDeductions(),
          console.log('Saskatchewan')
      ];
      case '10':
      return [
          ...state,
          this.setState({province: 'Northwest Territories'}),
          taxCalculator(),
          nwtCalculator(),
          taxDeductions(),
          console.log('Northwest Territories')
      ];
      case '11':
      return [
          ...state,
          this.setState({province: 'Yukon'}),
          taxCalculator(),
          ytCalculator(),
          taxDeductions(),
          console.log('Yukon')
      ];
      case '12':
      return [
          ...state,
          this.setState({province: 'Nunavut'}),
          taxCalculator(),
          ntCalculator(),
          taxDeductions(),
          console.log('Nunavut')
      ];
      default:
        return state;
        taxCalculator(),
        abCalculator(),
        taxDeductions(),
        console.log('Alberta')
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.amount) {
      this.setState(() => ({ error: 'Please provide pay amount.' }));
    } else {
      this.setState(() => ({ error: '' }));

      taxDeductions();
      console.log('form submission');

      this.props.onSubmit({
        amount: parseFloat(this.state.amount, 10) * 100,
        pay: this.state.pay,
        fedtax: this.state.fedtax,
        provtax: this.state.provtax,
        province: this.state.province,
        total: this.state.total
      });
    }
  };
  render() {    
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            {/* <h1 id="header-msg"  className="page-header__title">
            Your { this.tax(this.state.pay) } Gross pay in { this.tax(this.state.province) } is <span>${ this.tax(parseFloat(this.state.amount).toFixed(2)) }</span>
            <br /> You paid <span>${ this.tax(parseFloat(this.state.fedtax).toFixed(2)) }</span> in Federal taxes and <span>${ this.tax(parseFloat(this.state.provtax).toFixed(2)) }</span> in provincial taxes.
            <br /> You Net pay will be <span>${ this.tax(parseFloat(this.state.total).toFixed(2)) }</span>.</h1> */}
            <h1 id="header-msg"  className="page-header__title">
            Your Net pay in { this.tax(this.state.province) } is <span>${ this.tax(parseFloat(this.state.total).toFixed(2)) }</span>.</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form" onSubmit={this.onSubmit}>          
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            {/* <span className=" input-group-addon">
                <i className="fas fa-calendar marginright5"></i>
                <span className="hidden-sm hidden-xs hidden-md">
                    Payment Date
                </span>
            </span> */}
            {/* <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            /> */}
            <span className=" input-group-addon dollarwidth">
                <i className="fas fa-map-marker-alt marginright5"></i>
                <span className="hidden-sm hidden-xs hidden-md">
                    Province
                </span>
            </span>
            <div className="input-group__item">
              <select
                onChange={this.onProvinceChange}
              >
                <option value="0">Alberta</option>
                <option value="1">British Columbia</option>
                <option value="2">Manitoba</option>
                <option value="3">New Brunswick</option>
                <option value="4">Newfoundland</option>
                <option value="5">Nova Scotia</option>
                <option value="6">Ontario</option>
                <option value="7">Prince Edward Island</option>
                <option value="8">Quebec</option>
                <option value="9">Saskatchewan</option>
                <option value="10">Northwest Territories</option>
                <option value="11">Yukon</option>
                <option value="12">Nunavut</option>
              </select>
            </div>
            <span className=" input-group-addon">
                <i className="fas fa-calendar marginright5"></i>
                <span className="hidden-sm hidden-xs hidden-md">
                    Pay Frequency
                </span>
            </span>
            <div className="input-group__item">
              <select 
                onChange={this.onPayChange}
              >
                  
                  <option value="1">Yearly</option>                  
                  <option value="52">Weekly</option>
                  <option value="26">BiWeekly</option>
                  <option value="12">Monthly</option>
                  <option value="4">Quarterly</option>
                  <option value="24">Semi-Monthly</option>
                  <option value="22">22 Pays a year</option>
                  <option value="13">13 Pays a year</option>
                  <option value="10">Pays a year</option>
              </select>
            </div>
            <span className="input-group-addon dollarwidth">
                <i className="fas fa-dollar-sign marginright5"></i>
                <span className="hidden-sm hidden-xs hidden-md">
                    Pay Amount
                </span>
            </span>
            <input
              className="text-input"
              placeholder="Amount"
              type="text"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
            {/* <div 
              id="flipbox" 
              className="k-button"
            >
              <label>
                <input type="radio" value="net"
                  onChange={this.onhandleChange}
                  checked={this.state.type === "net"}  />
                Net
              </label>
              <label>
                <input type="radio" value="gross"
                  onChange={this.onhandleChange}
                  checked={this.state.type === "gross"} />
                Gross
              </label>
            </div> */}
            {/* <span className=" input-group-addon">
                <i className="far fa-calendar-plus marginright5"></i>
                <span className="hidden-sm hidden-xs hidden-md">
                    Pay Unit
                </span>
            </span>
            <div className="input-group__item">
              <select 
                onChange={this.onRateChange}
              >
                  <option value="H">Hourly Rate</option>
                  <option value="D">Daily Rate</option>
                  <option value="W">Weekly Rate</option>
                  <option value="M">Monthly Rate</option>
                  <option value="Y">Yearly Rate</option>
              </select>
            </div>
            <span className="input-group-addon">
                <i className="fas fa-calculator marginright5"></i>
                <span className="hidden-sm hidden-xs hidden-md">
                    Hours / Week
                </span>
            </span>
            <input            
              className="text-input" 
              data-val-required=""              
              placeholder="Hours/Week" 
              type="text" 
              value={this.state.hours}
              onChange={this.onHoursChange}
            />*/}
            <div>          
              <button className="button">Submit</button>
            </div> 
          </form>
        </div>
      </div>
    )
  }
}