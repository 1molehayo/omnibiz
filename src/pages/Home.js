import React, { useState } from 'react';
import { PageLayout } from 'layouts/PageContainer';
import { Link } from 'react-router-dom';
import { VideoModal } from 'components';
import { IMAGES } from 'utility/images';
import bars from 'assets/img/svg/bars.svg';
import { ReactComponent as Playbtn } from 'assets/img/svg/playbtn.svg';

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

  return (
    <PageLayout pageClass="home">
      <>
        <section className="section section__intro">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7 col-xl-6">
                <h3 className="heading">
                  Get your business <br /> website up and running
                </h3>
                <p className="paragraph">
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
            <div className="section__header text-center">
              <h3 className="heading">
                Find the <span className="font-bold">right plan</span> for you
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor incididunt
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card plan-card">
                  <div className="plan-card__header">
                    <p className="plan-card__title">INDIVIDUAL</p>
                  </div>

                  <div className="mb-4 text-center">
                    <p className="plan-card__text plan-card__text--small">
                      Starting From
                    </p>
                    <p className="plan-card__text plan-card__text--big">$59</p>
                    <p className="plan-card__text plan-card__text--small">
                      month
                    </p>
                  </div>

                  <ul className="plan-card__list">
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                  </ul>

                  <a href="/" className="button button--primary">
                    GET STARTED
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card plan-card">
                  <div className="plan-card__header">
                    <p className="plan-card__title">BUSINESS</p>
                  </div>

                  <div className="mb-4 text-center">
                    <p className="plan-card__text plan-card__text--small">
                      Starting From
                    </p>
                    <p className="plan-card__text plan-card__text--big">$199</p>
                    <p className="plan-card__text plan-card__text--small">
                      month
                    </p>
                  </div>

                  <ul className="plan-card__list">
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                  </ul>

                  <a href="/" className="button button--primary">
                    GET STARTED
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card plan-card">
                  <div className="plan-card__header">
                    <p className="plan-card__title">ENTERPRISE</p>
                  </div>

                  <div className="mb-4 text-center">
                    <p className="plan-card__text plan-card__text--small">
                      Starting From
                    </p>
                    <p className="plan-card__text plan-card__text--big">$299</p>
                    <p className="plan-card__text plan-card__text--small">
                      month
                    </p>
                  </div>

                  <ul className="plan-card__list">
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                    <li className="plan-card__item">Website Development</li>
                  </ul>

                  <a href="/" className="button button--primary">
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section__stories">
          <div className="container">
            <div className="section__header text-center">
              <h3 className="heading">
                Learn how to{' '}
                <span className="font-bold">improve your website</span> look,
                <br />
                design, process and content
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor incididunt
              </p>
            </div>

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
