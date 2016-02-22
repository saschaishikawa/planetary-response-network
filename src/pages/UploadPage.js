import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header'

export default class UploadPage extends React.Component {
  render() {
    return (
      <DocumentTitle title='AOI Uploader'>
        <div className='UploadPage'>
          <Header/>
          <div className='container'>
            <h2 className='text-center'>AOI Uploader</h2>
            <hr />
            <div className='jumbotron'>
              <p>
                <strong>
                  Upload a KML file
                </strong>
              </p>

              <form method="POST" enctype="multipart/form-data" action="/aois" class="uploader">
                <label for="file">Drop a file here, or click to browse</label>
                <input id="file" type="file" name="file"/>
                  <button type="submit">Upload</button>
              </form>

            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
