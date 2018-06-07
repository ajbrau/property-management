import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsletterArchive from './newsletter_archive';

class Newsletter extends Component {

    compoonentDidMount() {
        this.props.fetchNewsletterArchive();
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        02 Jan 18
                    </div>
                    <NewsletterArchive />
                </div>
                <div>
                    main content. latest newsletter.
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.newsletter.archive);
    return { archive: state.newsletter.archive }
}

export default connect(mapStateToProps, actions)(Newsletter);
