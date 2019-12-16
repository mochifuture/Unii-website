import React from "react";
import "./TopPage.css";
import { withRouter } from "react-router";
import unii_500 from "../Images/unii_500.jpg";
import fullmoon from "../Images/fullmoon500.jpg";
import unes from "../Images/unescargotunii.jpg";
import ChildComponent from "./ChildComponent.js";

class TopPage extends React.Component {

  render() {
    return (
      <div className="TopPage">

        <div className="ContentsContainer">
          <div className="iframes">
            <div className="flexcontents">
              <iframe width="500" height="300" src="https://www.youtube.com/embed/hxrKJ9l7-Wg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="flexcontents">
              <iframe src="https://player.vimeo.com/video/69345498?title=0&byline=0&portrait=0" width="500" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
          </div>
          <div className="iframes">
            <div className="flexcontents">
              <iframe title="vimeo-player" src="https://player.vimeo.com/video/127412224?title=0&byline=0&portrait=0" width="500" height="300" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="flexcontents">
              <iframe width="500" height="300" src="https://www.youtube.com/embed/dtYBEH6MZYE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div className="ContentsContainer">
          <div className="sounds">
            <h2>Releases</h2>
            <div className="flex-container">
              <div className="flexcontents">
                <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=3551376568/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="http://elegantdisc.bandcamp.com/album/--3">ニュー世界、海と　君の瞳 by unii</a></iframe>
              </div>
              <div className="flexcontents">
                <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=3221283149/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/track=2055578461/transparent=true/" seamless><a href="http://northernlightss.bandcamp.com/album/long-scene-before-sunset">Long scene,before sunset by unii</a></iframe>
              </div>
              <div className="flexcontents">
                <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=925013865/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/track=1720647107/transparent=true/" seamless><a href="http://northernlightss.bandcamp.com/album/poet-from-the-northern-sea">Poet from the northern sea by unii</a></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="ContentsContainer">
          <div className="sounds">
            <h2>Collaborations</h2>
            <div className="flex-container">
              <div className="flexcontents">
                <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=2363593572/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="http://emerge.bandcamp.com/album/distant-glow">...distant glow... by UNII - EMERGE</a></iframe>
              </div>
              <div className="flexcontents">
                <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=646113927/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="http://indianredhead.bandcamp.com/album/end2">END2 by Blue Stork</a></iframe>
              </div>
              <div className="flexcontents">
                <img src={fullmoon} alt="fullmoon" width="240px"/>
                <p>"fullmoon" (2015)</p>
                <p>Visual by ieva  Sound by ieva and unii</p>
                <a href="https://p0llenrec.tumblr.com/">pollenrec</a>
              </div>
              <div className="flexcontents">
                <img src={unes} alt="unescargotunii" width="240px"/>
                <p>"unii escargot vide? South Asia and Japan Tour Live"</p>
                <p> (2013)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ContentsContainer">
          <h2>Profile</h2>
          <div className="profile">
            <img src={unii_500} alt="unii" />
            <p>unii</p>
            <p>
            Unii is a singer, songwriter, electronic music composer (ambient, avant-garde pop)
             from Northern island of Sapporo city, Hokkaido,
             Japan.  Her soft yet powerful voice mixed with
             electronic sound invites you to the artistic world
             of hers. Unii has been performing live not only in
             Japan but overseas in Europe and Asia, such as
             Singapore, Vietnam and China. Her music is accepted
             positively borderless-ly and her style is described
             as post Bjork that it floats us into dream-like
             soundscape.</p>
            <p>
             Unii released her first album“New world,
             sea and your eyes" (2011, elegantdisc) which
             she did all the creation work from recording
             to songwriting. The second album “Long scene,
             before sunset” was released from her own
             label Nothernlights in August of 2014.
             Unii’s creation is fresh and she is
             pioneering her own style of music.
            </p>
          </div>
        </div>

        <div className="ContentsContainer">
          <h2>Archives</h2>
          <div className="archives">
              <div className="archives_frame">
                <ChildComponent />
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(TopPage);
