import ExpenseForm from '../components/ExpenseForm';

// Tax Reducer

export const tax = (state, prov) => {
    switch (prov) {
      case '0':
        return [
          ...state,
          this.setState({province: 'Alberta'}),
          
          console.log('Alberta')
      ]; 
      case '1':
          return [
          ...state,
          this.setState({province: 'British Columbia'}),
          console.log('British Columbia')
      ];
      case '2':
      return [
          ...state,
          this.setState({province: 'Manitoba'}),
          console.log('Manitoba')
      ];
      case '3':
      return [
          ...state,
          this.setState({province: 'New Brunswick'}),
          console.log('New Brunswick')
      ];
      case '4':
      return [
          ...state,
          this.setState({province: 'Newfoundland'}),
          console.log('Newfoundland')
      ];
      case '5':
      return [
          ...state,
          this.setState({province: 'Nova Scotia'}),
          console.log('Nova Scotia')
      ];
      case '6':
      return [
          ...state,
          this.setState({province: 'Ontario'}),
          console.log('Ontario')
      ];
      case '7':
      return [
          ...state,
          this.setState({province: 'Prince Edward Island'}),
          console.log('Prince Edward Island')
      ];
      case '8':
      return [
          ...state,
          this.setState({province: 'Quebec'}),
          console.log('Quebec')
      ];
      case '9':
      return [
          ...state,
          this.setState({province: 'Saskatchewan'}),
          console.log('Saskatchewan')
      ];
      case '10':
      return [
          ...state,
          this.setState({province: 'Northwest Territories'}),
          console.log('Northwest Territories')
      ];
      case '11':
      return [
          ...state,
          this.setState({province: 'Yukon'}),
          console.log('Yukon')
      ];
      case '12':
      return [
          ...state,
          this.setState({province: 'Nunavut'}),
          console.log('Nunavut')
      ];
      default:
        return state;
        console.log('Alberta')
    }
  };