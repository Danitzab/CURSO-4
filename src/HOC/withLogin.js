import React from 'react';

function withLogin(WrappedComponent) {
  return class WithLoginComponent extends React.Component {
      constructor(props) {
          super(props)

          this.state = {loggued: false}
          this.veryfyUserLogin = this.veryfyUserLogin.bind(this)
      }
    veryfyUserLogin() {
        setTimeout(() => {
            const loggued = Math.round(Math.random())
            this.setState ({ loggued: loggued === 1})
        })
    }

    componentDidMount (){
        this.veryfyUserLogin()
    }

    render() {
      return <WrappedComponent {...this.props} 
      loggued={this.state.loggued} />;
    }
  };
}

export default withLogin;
