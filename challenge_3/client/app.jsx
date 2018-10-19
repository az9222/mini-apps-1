

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
          <input type="text" name="nameId" onChange={props.handleData}/>
          E-mail:
          <input type="text" name="email" onChange={props.handleData}/>
          Password: 
          <input type="password" name="passwordId" onChange={props.handleData}/>
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
            <input type="text" name="addressLine1" onChange={props.handleData}/>
            Line 2:
            <input type="text" name="addressLine2" onChange={props.handleData}/>
            City:
            <input type="text" name="city" onChange={props.handleData}/>
            State:
            <input type="text" name="stateId" onChange={props.handleData}/>
            zipCode:
            <input type="text" name="zipCode" onChange={props.handleData}/>
            Phone Number: 
            <input type="text" name="phoneNumber" onChange={props.handleData}/>
          </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

function F3(props) {
  return (
    <div className="f3Class">
      <form onSubmit={(e) => { 
          props.handleNextStep(e); 
          props.sendData();
        }}>
          <label>
            Credit Card Number:
            <input type="text" name="creditCardNumber" onChange={props.handleData}/>
            Expiration Date:
            <input type="text" name="expirationDate" onChange={props.handleData}/>
            CVV:
            <input type="password" name="CVV" onChange={props.handleData}/> 
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
      <p>Name: {props.formData.nameId}</p>
      <p>E-mail: {props.formData.email}</p>
      <button type="button" onClick={props.handleFinishStep}>Confirm Order!</button>
    </div>
  )
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          step: 1,
          data: {},
          successPost: false
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

    handleData(event) {
      var newState = Object.assign({}, this.state.data); //state cannot be mutated so we make a copy of the object. basically, object.assign combines any of its parameters together and using a blank object will make a copy of the state
      newState[event.target.name] = event.target.value; //we then add whatever property we want into the object with overriding the state
      this.setState({data: newState}) //set the state as an object with all the property names
    }

    //create a post data function on the confirm button that will send the state to the database
    sendData(){
      $.ajax({
        type: 'POST',
        url: '/checkout',
        data: JSON.stringify(this.state.data),
        contentType: 'application/json',
        success: () => {this.setState({successPost: true})} 
      });
    }

    render(){
      switch(this.state.step) {
        case 1:
          return <CheckoutPage handleNextStep={this.handleNextStep.bind(this)}/>
        case 2:
          return <F1 handleNextStep={this.handleNextStep.bind(this)} handleData={this.handleData.bind(this)} />
        case 3:
          return <F2 handleNextStep={this.handleNextStep.bind(this)} handleData={this.handleData.bind(this)}/>
        case 4:
          return <F3 handleNextStep={this.handleNextStep.bind(this)} handleData={this.handleData.bind(this)} sendData={this.sendData.bind(this)}/>
        case 5:
          return <SummaryPage handleFinishStep={this.handleFinishStep.bind(this)} formData={this.state.data} />
      }
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));

//at the last page, keep track of all data and send to server