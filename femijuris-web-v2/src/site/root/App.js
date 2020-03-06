import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import LandingPage from "../ebook/containers/LandingPageEbooks"
import Home from "../home/container/home"
import AdminLawyersList from "../admin/containers/AdminLawyersList"
import LawyerDetailPage from "../lawyer-detail/containers/LawyerDetailPage"
import SignInPage from "../signin/containers/SigninPage"
import SignupPage from "../signup/containers/SignupPage"
import ProfilePage from "../profile/containers/ProfilePage"
import Directory from "../diretory/container/directory"
import Blog from "../blog/container/blog"
import Post from "../blog/container/post"

class App extends Component {
  render() {
    return (
      <div>
            <Route exact path="/ebook/:ebookUri" component={LandingPage} />
            <Route exact path="/admin/lawyers/list/:action" component={AdminLawyersList} />
            <Route exact path="/adv/:lawyerUri" component={ LawyerDetailPage } />
            <Route exact path="/login" component={ SignInPage } />
            <Route exact path="/signup" component={ SignupPage } />
            <Route exact path="/profile" component={ ProfilePage } />
            <Route exact path="/diretorio" component={ Directory } />
            <Route exact path="/blog" component={ Blog } />
            <Route exact path="/blog/:postUri" component={ Post } />
            <Route exact path="/" component={ Home } />
      </div>
    );
  }
}
export default App;