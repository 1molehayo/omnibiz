import React, { useState } from 'react';
import { PageLayout } from 'layouts/PageContainer';
import { Form } from 'reactstrap';
import bgShape from 'assets/img/svg/bg-shape.svg';
import DATA from 'utility/staticdata';
import ThemeCard from 'components/ThemeCard';
import { FormInput } from 'components/Input';

const Themes = () => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const categories = [
    {
      name: 'category1',
      price: '$200 - $300'
    },
    {
      name: 'category2',
      price: '$300 - $400'
    }
  ];

  const generateThemeCards = () => {
    return DATA.themes.map((theme, index) => (
      <ThemeCard key={index} theme={theme} />
    ));
  };

  const getPriceRange = value => {
    if (value) {
      setCategory(value);
      const range = categories.filter(item => item.name === value)[0];
      setPriceRange(range.price);
    }
  };

  const onSubmit = () => {};

  return (
    <PageLayout pageClass="page themes">
      <>
        <section className="section p-0">
          <img src={bgShape} className="themes--bg" alt="themes-background" />
          <div className="themes__header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mb-5">
                  <h3 className="heading page__heading">
                    Professional <br />
                    Omnibiz Themes
                  </h3>
                  <p className="paragraph page__desc mb-0">
                    Discover a beautiful custom design for your website
                  </p>
                </div>

                <div className="col-md-6 mb-0">
                  <Form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <FormInput
                          type="select"
                          label="category"
                          value={category}
                          onChange={e => getPriceRange(e.target.value)}
                          placeholder="all"
                        >
                          <option value="" selected>
                            all
                          </option>
                          {categories.map((categoryItem, x) => (
                            <option value={categoryItem.name} key={x}>
                              {categoryItem.name}
                            </option>
                          ))}
                        </FormInput>
                      </div>

                      <div className="col-12">
                        <FormInput
                          type="select"
                          label="price range"
                          value={priceRange}
                          onChange={e => setPriceRange(e.target.value)}
                          placeholder="all"
                        >
                          <option value="" selected>
                            all
                          </option>
                          {categories.map((rangeItem, y) => (
                            <option value={rangeItem.price} key={y}>
                              {rangeItem.price}
                            </option>
                          ))}
                        </FormInput>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section__themes pt-0">
          <div className="container">
            <div className="row">{generateThemeCards()}</div>
          </div>
        </section>
      </>
    </PageLayout>
  );
};

export default Themes;
