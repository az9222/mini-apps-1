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
          <input type="text" name="nameId" />
          E-mail:
          <input type="text" name="email" />
          Password: 
          <input type="password" name="passwordId" />
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
            <input type="text" name="addressLine1" />
            Line 2:
            <input type="text" name="addressLine2" />
            City:
            <input type="text" name="city" />
            State:
            <input type="text" name="stateId" />
            zipCode:
            <input type="text" name="zip" />
            phoneNum
            <input type="text" name="phoneNumber" />
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
            <input type="text" name="creditCardNumber" />
            Expiration Date:
            <input type="text" name="expirationDate" />
            CVV:
            <input type="password" name="CVV" /> event.target.name????
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
          data: {name: "Angela", }
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

    //ajax request

    render(){
      switch(this.state.step) {
        case 1:
          return <CheckoutPage handleNextStep={this.handleNextStep.bind(this)}/>
        case 2:
          return <F1 handleNextStep={this.handleNextStep.bind(this)} />
        case 3:
          return <F2 handleNextStep={this.handleNextStep.bind(this)} />
        case 4:
          return <F3 handleNextStep={this.handleNextStep.bind(this)} />
        case 5:
          return <SummaryPage handleFinishStep={this.handleFinishStep.bind(this)}/>
      }
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));

//at the last page, keep track of all data and send to server