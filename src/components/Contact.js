import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        {/* Add Bulma contact page here */}
        {/* <!-- START NAV --> */}
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <img 
                    src="https://c.tenor.com/Yjx_r38x1aYAAAAd/mind-blown-explosion.gif" 
                    alt="Logo"
                    style={{ width: '50px'}} />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <a href="/" className="navbar-item is-active">Home</a>
                <a href="/about" className="navbar-item">About</a>
                <a href="/characters" className="navbar-item">Characters</a>
                <a className="navbar-item">Team</a>
                <a className="navbar-item">Archives</a>
                <a className="navbar-item">Help</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Account</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">Dashboard</a>
                    <a className="navbar-item">Profile</a>
                    <a className="navbar-item">Settings</a>
                    <hr className="navbar-divider" />
                    <div className="navbar-item">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- END NAV -->     */}
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-8 is-variable ">
                <div className="column is-two-thirds has-text-left">
                  <h1 className="title is-1">Contact Us</h1>
                  <p className="is-size-4">
                    Any questions about animes, please contact us.
                  </p>
                  <div className="social-media">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      className="button is-light is-large"
                    >
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="button is-light is-large"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="button is-light is-large"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="column is-one-third has-text-left">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input className="input is-medium" type="text" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input is-medium" type="text" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea className="textarea is-medium"></textarea>
                    </div>
                  </div>
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-link is-fullwidth has-text-weight-medium is-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;