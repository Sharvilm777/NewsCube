import "./styles.css";
import Navbar from "./Components/Navbar";
import Newscontainer from "./Components/Newscontainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { Component } from "react";

export default class App extends Component {
  state = {
    progress: 0,
  };
  pageSize = 15;

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <Switch>
          <Route exact path="/general">
            <Newscontainer
              key="general"
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="general"
            />
          </Route>
          <Route exact path="/general">
            <Newscontainer
              key="general"
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="general"
            />
          </Route>
          <Route exact path="/science">
            <Newscontainer
              key=""
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="science"
            />
          </Route>
          <Route exact path="/technology">
            <Newscontainer
              key="science"
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="technology"
            />
          </Route>
          <Route exact path="/business">
            <Newscontainer
              key="business"
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="business"
            />
          </Route>
          <Route exact path="/health">
            <Newscontainer
              key="health"
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="health"
            />
          </Route>
          <Route exact path="/entertainment">
            <Newscontainer
              key="entertainment"
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="entertainment"
            />
          </Route>
          <Route exact path="/sports">
            <Newscontainer
              key="health"
              setProgress={this.setProgress}
              pageSize={this.pageSize}
              category="sports"
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}
