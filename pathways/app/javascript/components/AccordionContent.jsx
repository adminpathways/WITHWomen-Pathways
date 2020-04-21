import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import ReactGA from 'react-ga';

class AccordionContent extends Component {
    componentDidMount() {
        const {hash} = this.props;
        setTimeout(() => {
            this.openAccordion(hash);
        }, 10);
        this.trackAccordionEvent();
    }

    shouldComponentUpdate(nextProps) {
        const {hash} = nextProps;
        this.openAccordion(hash);
        return true;
    }

    trackAccordionEvent = () => {
        $(document).on('click', '.accordion-item', e => {
            ReactGA.event({
                category: 'Accordion',
                action: 'Click',
                label: e.target.innerText
            });
        });
    };

    openAccordion = hash => {
        if (hash !== '') {
            const array = hash.split('-');

            if (array.length > 1) {
                const mainId = `${array[0]}-${array[1]}`;
                $('#accordion').foundation('down', $(mainId));

                if (array.length > 2) {
                    $('#deeplinked-accordion').foundation('down', $(`${mainId}-${array[2]}`));
                }

                Foundation.SmoothScroll.scrollToLoc(mainId);
            }
        }
    };

    render() {
        const {content, showNumbers, showChildNumbers} = this.props;
        const safetyTipsTitle = ['Child Safety Plan', 'Pet Safety Plan', 'Safety at Home', 'Work Safety Plan', 'Dealing with Stalking'];
        return <ul
            className='accordion'
            data-accordion
            data-allow-all-closed='true'
            data-deep-link='true'
            data-deep-link-smudge='true'
            data-deep-link-smudge-delay='500'
            data-multi-expand='true'
            data-update-history='true'
            id='accordion'>
            {
                content.map((value, index) =>
                    <li

                        className={safetyTipsTitle.includes(value.title) ? 'accordion-item is-active' : 'accordion-item'}
                        data-accordion-item
                        key={value.title}
                    >
                        <a className={safetyTipsTitle.includes(value.title) ? 'accordion-title padding-right-3 is-hidden' : 'accordion-title padding-right-3'}
                            href={`#tab-${index + 1}`}>
                            {showNumbers ? `${index + 1}. ` : ''}{value.title}
                        </a>
                        <div className='accordion-content' data-tab-content id={`tab-${index + 1}`}>
                            {value.description}
                            {
                                value.tabs &&
                                <ul
                                    className='accordion'
                                    data-accordion
                                    data-allow-all-closed='true'
                                    data-deep-link='true'
                                    data-deep-link-smudge='true'
                                    data-deep-link-smudge-delay='500'
                                    data-multi-expand='true'
                                    data-update-history='true'
                                    id='deeplinked-accordion'>
                                    {value.tabs.map((tab, i) =>
                                        <li
                                            className='accordion-item'
                                            data-accordion-item
                                            key={tab.title}
                                        >
                                            <a
                                                className='accordion-title padding-right-3'
                                                href={`#tab-${index + 1}-${i + 1}`}>
                                                {showChildNumbers ? `${i + 1}. ` : ''}{tab.title}
                                            </a>
                                            <div
                                                className='accordion-content' data-tab-content
                                                id={`tab-${index + 1}-${i + 1}`}>
                                                {tab.description}
                                            </div>
                                        </li>)}
                                </ul>
                            }
                            {value.bottomDescription && value.bottomDescription}
                        </div>
                    </li>)
            }
        </ul>;
    }
}

AccordionContent.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
    hash: PropTypes.string,
    showChildNumbers: PropTypes.bool,
    showNumbers: PropTypes.bool
};

AccordionContent.defaultProps = {
    hash: '',
    showChildNumbers: false,
    showNumbers: false
};

export default AccordionContent;