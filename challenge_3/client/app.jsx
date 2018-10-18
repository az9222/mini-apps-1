function CheckoutPage(props) {
  return (
    <button type="button" onClick={props.handleNextStep}>Checkout!</button>
  )
}

function F1(props) {
  return (
    <div className="F1">
    <form onSubmit={props.handleNextStep}>
        <label>
          Name:
          <input type="text" name="name" />
          E-mail:
          <input type="text" name="e-mail" />
          Password: 
          <input type="password" name="password" />
        </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>
  )
}

function F2(props) {
  return (
    <div className="f2Class">
      <form onSubmit={props.handleNextStep}>
          <label>
            Address line 1:
            <input type="text" name="AddressLine1" />
            Line 2:
            <input type="text" name="line2" />
            City:
            <input type="text" name="city" />
            State:
            <input type="text" name="state" />
            zipCode:
            <input type="text" name="zip" />
            phoneNum
            <input type="text" name="phone" />
          </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

function F3(props) {
  return (
    <div className="f3Class">
      <form onSubmit={props.handleNextStep}>
          <label>
            Credit Card Number:
            <input type="text" name="creditCardNum" />
            Expiration Date:
            <input type="text" name="exp-date" />
            CVV:
            <input type="password" name="cvv" />
          </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

function SummaryPage(props) {
  return (
    <div className="summary-page">
      <h1>Summary</h1>
      <button type="button" onClick={props.handleFinishStep}>Confirm Order!</button>
    </div>
  )
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          step: 1,
          info: {}
        };
    }

    handleNextStep(e) {
        //increment the next step in the state and set the state as that next step
        this.setState({
          step: this.state.step + 1
        })
        e.preventDefault(); //prevents the submit from going to a new page
        // this.setState = {nextForm: true}
    }

    handleFinishStep(e) {
      this.setState({
        step: 1
      })
      e.preventDefault();
    }

    render(){
      switch(this.state.step) {
        case 1:
          return <CheckoutPage handleNextStep={this.handleNextStep.bind(this)}/>
        case 2:
          return <F1 handleNextStep={this.handleNextStep.bind(this)}/>
        case 3:
          return <F2 handleNextStep={this.handleNextStep.bind(this)}/>
        case 4:
          return <F3 handleNextStep={this.handleNextStep.bind(this)}/>
        case 5:
          return <SummaryPage handleFinishStep={this.handleFinishStep.bind(this)}/>
      }
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));

//checkout button that when clicked, takes me to several forms
//F1 collects name, email, and password for account creation.
//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
//F3 F3 collects credit card #, expiry date, CVV, and billing zip code.
//next button at each step in checkout process
//confirmation page which summarizes data with a purchase button that completes purchase. when purchase is complete, user returns to homepage.
