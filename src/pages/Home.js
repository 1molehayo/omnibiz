import React, { useState } from 'react';
import { PageLayout } from 'layouts/PageContainer';
import { Link } from 'react-router-dom';
import { VideoModal, PlanCard } from 'components';
import { IMAGES } from 'utility/images';
import { ReactComponent as Playbtn } from 'assets/img/svg/playbtn.svg';
import { SectionHeader } from 'layouts/SectionHeader';
import DATA from 'utility/staticdata';
import bars from 'assets/img/svg/bars.svg';
import ThemeCard from 'components/ThemeCard';

const Home = () => {
  const [videoModal, setVideoModal] = useState(false);

  const toggleVideo = () => {
    setVideoModal(!videoModal);
  };

  const generateClients = () => {
    return Object.keys(IMAGES.clients).map((imageKey, key) => (
      <div className="col" key={key}>
        <div className="client">
          <img
            src={IMAGES.clients[imageKey]}
            alt={imageKey}
            className="img-fluid"
          />
        </div>
      </div>
    ));
  };

  const generatePlanCards = () => {
    return DATA.plans.map((plan, index) => (
      <PlanCard key={index} plan={plan} />
    ));
  };

  const generateThemeCards = () => {
    return DATA.themes
      .slice(0, 3)
      .map((theme, index) => <ThemeCard key={index} theme={theme} />);
  };

  return (
    <PageLayout pageClass="home">
      <>
        <section className="section section__intro">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7 col-xl-6">
                <h3 className="heading page__heading">
                  Get your business <br /> website up and running
                </h3>
                <p className="paragraph page__desc">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results.
                  <br /> Happiness guaranteed!
                </p>

                <Link to="/" className="button button--secondary">
                  VIEW SAMPLE
                </Link>
              </div>
              <div className="col-md-5 col-lg-5 col-xl-6">
                <div className="intro-icon">
                  <img src={bars} alt="omnibiz" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section__clients">
          <div className="container">
            <div className="client__video">
              <Playbtn className="client__button" onClick={toggleVideo} />
              <img
                src={IMAGES.videos.clientVideo}
                className="img-fluid"
                alt="clientVideo"
              />
            </div>
            <div className="row align-items-center justify-content-center">
              {generateClients()}
            </div>
          </div>
        </section>

        <section className="section section__plans">
          <div className="container">
            <SectionHeader
              title={`Find the /bold right plan /bold for you`}
              desc={`Lorem ipsum dolor sit amet, consectetur /n adipiscing elit,
              sed do eiusmod tempor incididunt`}
            />

            <div className="row">{generatePlanCards()}</div>
          </div>
        </section>

        <section className="section section__stories">
          <div className="container">
            <SectionHeader
              title={`Learn how to /bold improve your website /bold look, /n design, process and content`}
              desc={`Lorem ipsum dolor sit amet, consectetur /n adipiscing elit,
              sed do eiusmod tempor incididunt`}
            />

            <div className="stories">
              <div className="stories__video">
                <Playbtn className="stories__button" onClick={toggleVideo} />
                <img
                  src={IMAGES.videos.successVideo}
                  className="img-fluid"
                  alt="stories-video"
                />
              </div>
              <div className="stories__content">
                <p className="paragraph">
                  See Sucess
                  <br /> Story Videos
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="d-flex justify-content-end mt-3">
                  <span className="icon-right-arrow"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section__themes">
          <div className="container">
            <SectionHeader
              title={`Top /bold Themes /bold`}
              desc={`Lorem ipsum dolor sit amet, consectetur /n adipiscing elit,
              sed do eiusmod tempor incididunt`}
            />

            <div className="row">{generateThemeCards()}</div>

            <div className="text-center">
              <Link to="/themes" className="button button--secondary">
                view more
              </Link>
            </div>
          </div>
        </section>

        <VideoModal
          toggleVideo={toggleVideo}
          videoLink="https://www.youtube.com/embed/KHhBWNVopQk"
          showVideo={videoModal}
        />
      </>
    </PageLayout>
  );
};

export default Home;
