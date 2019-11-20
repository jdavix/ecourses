import React from 'react';
import App from 'next/app';
import '../lib/css/pure-1.0/base.css';
import '../lib/css/pure-1.0/pure.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faBook);
library.add(faArrowsAlt);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp