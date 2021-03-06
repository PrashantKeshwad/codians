import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
// import Features from './components/features';
import About from './components/about';
import Services from './components/services';
// import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
import Statements from './components/statements';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        {/* <Features data={this.state.landingPageData.Features} /> */}
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Statements data={this.state.landingPageData.Statements} />
        {/* <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
