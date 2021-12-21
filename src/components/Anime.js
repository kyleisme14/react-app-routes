import React, { Component } from "react";

class Anime extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-small">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">Modal Cards</p>
              <p className="subtitle">Subtitle</p>
            </div>
          </div>
        </section>
        <div className="box cta">
          <p className="has-text-centered">
            <span className="tag is-primary">New</span> Here we have modal
            cards. When you click on them they will open functional modal
            examples.
          </p>
        </div>
        <section className="container">
          <div className="columns features">
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://source.unsplash.com/RWnpyGtY1aU"
                      alt="Placeholder image"
                      className="modal-button"
                      data-target="modal-image2"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Click on image above</h4>
                    <p>
                      Purus semper eget duis at tellus at urna condimentum
                      mattis. Non blandit massa enim nec. Integer enim neque
                      volutpat ac tincidunt vitae semper quis. Accumsan tortor
                      posuere ac ut consequat semper viverra nam.
                    </p>
                    <span
                      className="button is-link modal-button"
                      data-target="modal-image2"
                    >
                      Image modal
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://source.unsplash.com/6Ticnhs1AG0"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tempor orci dapibus faber in.</h4>
                    <p>
                      Ut venenatis tellus in metus vulputate. Amet consectetur
                      adipiscing elit pellentesque. Sed arcu non odio euismod
                      lacinia at quis risus. Faucibus turpis in eu mi bibendum
                      neque egestas cmonsu songue. Phasellus vestibulum lorem
                      sed risus.
                    </p>
                    <span
                      className="button is-link modal-button"
                      data-target="modal-card"
                    >
                      Modal Card
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4 modal-button" data-target="modal-image">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Click anywhere on card</h4>
                    <p>
                      Imperdiet dui accumsan sit amet nulla facilisi morbi.
                      Fusce ut placerat orci nulla pellentesque dignissim enim.
                      Libero id faucibus nisl tincidunt eget nullam. Commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <span
                      className="button is-link modal-button"
                      data-target="modal-image"
                    >
                      Image modal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns features">
            <div className="column is-4 modal-button" data-target="modal-card">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>
                      Click anywhere on card to <br />
                      expand into modal card
                    </h4>
                    <p>
                      Purus semper eget duis at tellus at urna condimentum
                      mattis. Non blandit massa enim nec. Integer enim neque
                      volutpat ac tincidunt vitae semper quis. Accumsan tortor
                      posuere ac ut consequat semper viverra nam.
                    </p>
                    <span className="button is-link modal-button">
                      Modal card
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://source.unsplash.com/hLyd1LukQ7E"
                      alt="butterfly image"
                      className="modal-button"
                      data-target="modal-image4"
                    />
                  </figure>
                </div>
                <div
                  className="card-content  modal-button"
                  data-target="modal-card2"
                >
                  <div className="content">
                    <h4>
                      Click anywhere on card to <br />
                      expand into modal card - header image expands into bigger
                      image
                    </h4>
                    <p>
                      Purus semper eget duis at tellus at urna condimentum
                      mattis. Non blandit massa enim nec. Integer enim neque
                      volutpat ac tincidunt vitae semper quis.
                    </p>
                    <span className="button is-link modal-button">
                      Modal card
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <section className="section">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-one-third">
                  <article className="notification media has-background-white">
                    <figure className="media-left">
                      <span className="icon">
                        <i className="has-text-warning fa fa-columns fa-lg"></i>
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Columns</h1>
                        <p className="is-size-5 subtitle">
                          The power of <strong>Flexbox</strong> in a simple
                          interface
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-one-third">
                  <article className="notification has-background-white media">
                    <figure className="media-left">
                      <span className="icon has-text-info">
                        <i className="fa fa-lg fa-wpforms"></i>
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Form</h1>
                        <p className="is-size-5 subtitle">
                          The indispensable <strong>form controls</strong>,
                          designed for maximum clarity
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-one-third">
                  <article className="notification has-background-white media">
                    <figure className="media-left">
                      <span className="icon has-text-danger">
                        <i className="fa fa-lg fa-cubes"></i>
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Components</h1>
                        <p className="is-size-5 subtitle">
                          Advanced multi-part components with lots of
                          possibilities
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-one-third">
                  <article className="notification has-background-white media">
                    <figure className="media-left">
                      <span className="icon has-text-grey">
                        <i className="fa fa-lg fa-cogs"></i>
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Modifiers</h1>
                        <p className="is-size-5 subtitle">
                          An <strong>easy-to-read</strong> naming system
                          designed for humans
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-one-third">
                  <article className="notification has-background-white media">
                    <figure className="media-left">
                      <span className="icon has-text-primary">
                        <i className="fa fa-lg fa-superpowers"></i>
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Layout</h1>
                        <p className="is-size-5 subtitle">
                          Design the <strong>structure</strong> of your webpage
                          with these CSS classNamees
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-one-third">
                  <article className="notification has-background-white media">
                    <figure className="media-left">
                      <span className="icon has-text-danger">
                        <i className="fa fa-lg fa-cube"></i>
                      </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Elements</h1>
                        <p className="is-size-5 subtitle">
                          Essential interface elements that only require a{" "}
                          <strong>single CSS className</strong>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <div className="content has-text-centered">
            <div className="control level-item">
              <a href="https://github.com/BulmaTemplates/bulma-templates">
                <div className="tags has-addons">
                  <span className="tag is-dark">Bulma Templates</span>
                  <span className="tag is-info">MIT license</span>
                </div>
              </a>
            </div>
          </div>
        </footer>
        {/* <!--  ===============
    HERE BE MODALS
    ===============  --> */}
        {/* <!-- 3dFlipVertical card tiny --> */}
        <div id="modal-card" className="modal modal-fx-3dSlit">
          <div className="modal-background"></div>
          <div className="modal-content is-tiny">
            {/* <!-- content --> */}
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/6Ticnhs1AG0"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                        alt="linda barret avatar"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Jane Doe</p>
                    <p className="subtitle is-6">@jane_doe</p>
                  </div>
                </div>
                <div className="content">
                  Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
                  tellin' you way up north bookin' it can't get theyah from
                  heeyah native bean suppah whawf Powrtland Museum of Aht, back
                  woods hawsun around the pit mummah Yessah, mummah muckle riyht
                  on'ta her Bean's dinnahbucket bub geez bud sumpin' fierce
                  ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah
                  sumpin' fierce hoppa bub If you can't stand the wintah you
                  don't deserve the summah slower than molasses going uphill in
                  January. Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak
                  Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor
                  ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig,
                  naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye.
                  Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih
                  throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
                  nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time datetime="2018-02-02">12:45 AM - 20 June 2018</time>
                </div>
              </div>
            </div>
            {/* <!-- end content --> */}
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
        {/* <!-- end tiny modal card --> */}
        {/* <!-- 3dFlipVertical card tiny [butterfly] --> */}
        <div id="modal-card2" className="modal modal-fx-3dSlit">
          <div className="modal-background"></div>
          <div className="modal-content is-tiny">
            {/* <!-- content --> */}
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/hLyd1LukQ7E"
                    alt="butterfly"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                        alt="linda barret avatar"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Jane Doe</p>
                    <p className="subtitle is-6">@jane_doe</p>
                  </div>
                </div>
                <div className="content">
                  Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
                  tellin' you way up north bookin' it can't get theyah from
                  heeyah native bean suppah whawf Powrtland Museum of Aht, back
                  woods hawsun around the pit mummah Yessah, mummah muckle riyht
                  on'ta her Bean's dinnahbucket bub geez bud sumpin' fierce
                  ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah
                  sumpin' fierce hoppa bub If you can't stand the wintah you
                  don't deserve the summah slower than molasses going uphill in
                  January. Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak
                  Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor
                  ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig,
                  naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye.
                  Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih
                  throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
                  nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time datetime="2018-02-02">12:45 AM - 20 May 2018</time>
                </div>
              </div>
            </div>
            {/* <!-- end content --> */}
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
        {/* <!-- end tiny modal card --> */}
        {/* <!-- Image modal --> */}
        <div id="modal-image2" className="modal modal-fx-3dSlit">
          <div className="modal-background"></div>
          <div className="modal-content is-huge is-image">
            {/* <!-- content --> */}
            <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image" />
            {/* <!-- end content --> */}
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
        {/* <!-- Image modal --> */}
        <div id="modal-image4" className="modal modal-fx-3dSlit">
          <div className="modal-background"></div>
          <div className="modal-content is-huge is-image">
            {/* <!-- content --> */}
            <img
              src="https://source.unsplash.com/hLyd1LukQ7E"
              alt="butterfly"
            />
            {/* <!-- end content --> */}
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
        {/* <!-- Image modal--> */}
        <div id="modal-image" className="modal modal-fx-superScaled">
          <div className="modal-background"></div>
          <div className="modal-content  is-image">
            {/* <!-- content --> */}
            <img
              src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg"
              alt="Placeholder image"
            />
            {/* <!--     <img src="https://source.unsplash.com/zFrUz_tNjCY" alt="placeholder"/> */}
            {/* -->    <!-- end content --> */}
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    );
  }
}

export default Anime;